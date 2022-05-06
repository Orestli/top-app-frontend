import React from 'react';
import {TopPageAdvantage} from '../../interfaces/page.interface';
import CheckIcon from './check.svg';
import styles from './Advantages.module.css';

interface AdvantagesProps {
  advantages: TopPageAdvantage[]
}

export const Advantages: React.FC<AdvantagesProps> = ({advantages}) => {
  return (
    <>
      {advantages.map(a => (
        <div key={a._id} className={styles.advantage}>
          <CheckIcon />
          <div className={styles.title}>{a.title}</div>
          <hr className={styles.vline} />
          <div>{a.description}</div>
        </div>
      ))}
    </>
  );
};
