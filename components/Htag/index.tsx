import styles from './Htag.module.css';
import React from 'react';

interface HtagProps {
  tag: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
}

export const Htag: React.FC<HtagProps> = ({ tag, children }) => {
  return (
    <>
      {tag === 'h1' && <h1 className={styles.h1}>{children}</h1>}
      {tag === 'h2' && <h2 className={styles.h2}>{children}</h2>}
      {tag === 'h3' && <h3 className={styles.h3}>{children}</h3>}
    </>
  );
};
