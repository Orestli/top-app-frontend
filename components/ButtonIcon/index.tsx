import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import cn from 'classnames';
import up from './up.svg';
import close from './close.svg';
import menu from './menu.svg';
import styles from './ButtonIcon.module.css';

const icons = {
  up,
  close,
  menu,
};

interface ButtonIconProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: keyof typeof icons;
  appearance: 'primary' | 'white';
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({
  icon,
  appearance,
  className,
  ...props
}) => {
  const IconComponent = icons[icon];

  return (
    <button
      className={cn(styles.button, className, styles[appearance])}
      {...props}
    >
      <IconComponent />
    </button>
  );
};
