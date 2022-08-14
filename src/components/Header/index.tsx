import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.appHeader} data-testid="Header">
      <p>Welcome to Opening Hour Project</p>
    </header>
  );
}
