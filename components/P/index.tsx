import styles from './P.module.css';
import cn from 'classnames';
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

interface PProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: 's' | 'm' | 'l';
  children: React.ReactNode;
}

export const P: React.FC<PProps> = ({
  size = 'm',
  children,
  className,
  ...props
}) => {
  return (
    <p className={cn(styles.p, className, styles[size])} {...props}>
      {children}
    </p>
  );
};
