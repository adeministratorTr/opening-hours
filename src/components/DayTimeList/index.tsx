import Divider from 'components/Divider';

import styles from './DayTimeList.module.scss';

type TDayTimeListProps = {
  title?: string;
  children: React.ReactNode;
};
export default function DayTimeList({ title, children }: TDayTimeListProps) {
  return (
    <div className={styles.container} data-testid="DayTimeList">
      <div className={styles.titleContainer}>
        <img
          src="https://png.pngitem.com/pimgs/s/10-101450_circle-hd-png-download.png"
          alt="clock-icon"
          height={15}
        />
        <div className={styles.title}>{title || 'Opening hours'}</div>
      </div>
      <Divider />
      <div data-testid="DayTimeListChildren">{children}</div>
    </div>
  );
}
