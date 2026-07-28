// Dialog.tsx
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import './index.scss';
import { Button, IconButton, MonoIcon, MonoIconsName, MultiIcon, MultiIconsName } from "@tflex/uikit";

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
  title?: React.ReactNode;
}

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

  const dialogContext = useMemo(() => ({
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


  return (
    <div
      className="dialog"
      style={{ width: dialogWidth }}
      role="dialog"
      aria-modal="true"
    >
      <div className="dialog__header">
        <h2 className="dialog__title">{title}</h2>

        <div className="dialog__tools">
          {tools.map((tool) => (
            <IconButton
              size={'small'}
              key={tool.id}
              className="dialog__tool-btn"
              aria-label="Ghost"
              title={tool.title}
              icon={tool.icon}
              onClick={() => tool.onClick(dialogContext)}
              color="default"
              variant="outline"
            />
          ))}

          <IconButton
            className="dialog__tool-btn"
            size={'small'}
            color="default"
            variant="outline"
            aria-label="Ghost"
            icon={isMaximized ? <MonoIcon name={MonoIconsName.AreaSize_minimizeScreen} /> : <MonoIcon name={MonoIconsName.AreaSize_maximizeScreen} />}
            onClick={toggleMaximize}
          />

          <IconButton
            className="dialog__tool-btn"
            size={'small'}
            color="default"
            variant="outline"
            aria-label="Ghost"
            icon={<MonoIcon name={MonoIconsName.Blind_close} />}
            onClick={close}
          />

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