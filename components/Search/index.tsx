import React, { DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import cn from 'classnames';
import styles from './Search.module.css';
import { Input } from '../Input';
import { Button } from '../Button';
import { useRouter } from 'next/router';
import GlassIcon from './glass.svg';

interface SearchProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {}

export const Search: React.FC<SearchProps> = ({ className, ...props }) => {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');

  const handleButton = () => {
    router.push({
      pathname: '/search',
      query: {
        q: search,
      },
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleButton();
    }
  };

  return (
    <form className={cn(className, styles.search)} {...props} role="search">
      <Input
        className={styles.input}
        value={search}
        placeholder="Поиск..."
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        className={styles.button}
        appearance="primary"
        onClick={handleButton}
        aria-label="Искать по сайту"
      >
        <GlassIcon />
      </Button>
    </form>
  );
};
