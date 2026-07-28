// Dialog.tsx
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import './index.scss';

interface Tool {
  id: string;
  title: string;
  icon: string | React.ReactNode;
  onClick: (context: { visible: boolean; close: () => void }) => void;
}

interface DialogProps {
  size: number; // 0 до 1, процентное соотношение ширины
  visible?: boolean;
  onClose?: () => void;
  tools?: Tool[];
  content?: React.ReactNode;
  footer?: React.ReactNode;
  title?: string;
}

const CloseIcon = () => <span className="dialog__icon-unicode">✕</span>;
const MaximizeIcon = () => <span className="dialog__icon-unicode">⛶</span>;
const MinimizeIcon = () => <span className="dialog__icon-unicode">🗗</span>;
export const Dialog: React.FC<DialogProps> = ({
  size = 1,
  visible = false,
  onClose,
  tools = [],
  content,
  footer,
  title = '',
}) => {
  const [isMaximized, setIsMaximized] = useState(false);

  const close = useCallback(() => {
    onClose?.();
  }, [onClose]);

  const toggleMaximize = useCallback(() => {
    setIsMaximized(prev => !prev);
  }, []);

  const toolContext = useMemo(() => ({
    visible,
    close,
  }), [visible, close]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && visible) {
        close();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [visible, close]);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [visible]);

  if (!visible) return null;

  const dialogWidth = isMaximized ? '100vw' : `${size * 100}vw`;

  const renderIcon = (icon: string | React.ReactNode) => {
    if (typeof icon === 'string') {
      return <span className="dialog__tool-icon">{icon}</span>;
    }
    return icon;
  };

  return (
    <div
      className="dialog"
      style={{ width: dialogWidth }}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="dialog__header">
        <h2 className="dialog__title">{title}</h2>

        <div className="dialog__tools">
          {tools.map((tool) => (
            <button
              key={tool.id}
              className="dialog__tool-btn"
              onClick={() => tool.onClick(toolContext)}
              title={tool.title}
              aria-label={tool.title}
            >
              {renderIcon(tool.icon)}
            </button>
          ))}

          <button
            className="dialog__tool-btn"
            onClick={toggleMaximize}
            title={isMaximized ? 'Свернуть' : 'Развернуть на весь экран'}
            aria-label={isMaximized ? 'Свернуть' : 'Развернуть'}
          >
            {isMaximized ? <MinimizeIcon /> : <MaximizeIcon />}
          </button>

          <button
            className="dialog__tool-btn dialog__close-btn"
            onClick={close}
            title="Закрыть"
            aria-label="Закрыть"
          >
            <CloseIcon />
          </button>
        </div>
      </div>

      <div className="dialog__content">
        {content}
      </div>

      {footer && (
        <div className="dialog__footer">
          {footer}
        </div>
      )}
    </div>
  );
};