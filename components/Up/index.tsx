import React, { useEffect } from 'react';
import { useScrollY } from '../../hooks/useScrollY';
import { useAnimation, motion } from 'framer-motion';
import styles from './Up.module.css';
import { ButtonIcon } from '../ButtonIcon';

export const Up: React.FC = () => {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div
      className={styles.up}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <ButtonIcon
        appearance="primary"
        icon="up"
        aria-label="Наверх"
        onClick={scrollToTop}
      />
    </motion.div>
  );
};
