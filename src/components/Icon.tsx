import { type FC, type HTMLAttributes } from 'react';
import { MonoIcon, type MonoIconsName } from '@tflex/uikit';

interface IconProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  size?: number;
  name?: MonoIconsName;
  src?: string;
}

export const Icon: FC<IconProps> = ({ name, src, size, ...rest }) => {
  if (src) {
    return <MonoIcon icon={src} size={size} {...rest} />;
  }
  if (name) {
    return <MonoIcon name={name} size={size} {...rest} />;
  }
  return <img
    alt={rest.title} {...rest}
  />;
};