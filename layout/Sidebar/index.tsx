import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Menu } from '../Menu';
import Logo from '../logo.svg';
import cn from 'classnames';
import styles from './Sidebar.module.css';
import { Search } from '../../components';
import Link from 'next/link';

interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Sidebar: React.FC<SidebarProps> = ({ className, ...props }) => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Link href="/">
        <a>
          <Logo className={styles.logo} />
        </a>
      </Link>
      <Search />
      <Menu />
    </div>
  );
};
