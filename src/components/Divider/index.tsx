import { classNames } from 'helpers/css';

import styles from './Divider.module.scss';

type TDividerProps = {
  variant?: 'light';
};

export default function Divider({ variant }: TDividerProps) {
  const className = classNames(styles.container, variant && styles[variant]);
  return <div className={className} data-testid="Divider" />;
}
