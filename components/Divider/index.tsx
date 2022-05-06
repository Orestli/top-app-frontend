import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Divider.module.css';
import cn from "classnames";

interface DividerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {}

const Divider: React.FC<DividerProps> = ({ className, ...props }) => {
  return <hr className={cn(className, styles.hr)} {...props} />;
};

export default Divider;
