import styles from './Tag.module.css';
import cn from 'classnames';
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 's' | 'm';
  color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
  href?: string;
  children: React.ReactNode;
}

export const Tag: React.FC<TagProps> = ({
  size = 's',
  children,
  color = 'ghost',
  href,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(styles.tag, className, styles[size], styles[color])}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
