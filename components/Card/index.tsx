import React, {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
} from 'react';
import cn from 'classnames';
import styles from './Card.module.css';

interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: 'white' | 'blue';
  children: React.ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { color = 'white', children, className, ...props },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        className={cn(styles.card, className, {
          [styles.blue]: color === 'blue',
        })}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);
