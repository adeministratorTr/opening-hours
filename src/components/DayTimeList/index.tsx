import Divider from 'components/Divider';

import styles from './DayTimeList.module.scss';

export default function DayTimeList({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      {/* TODO get title as prop */}
      <div className={styles.titleContainer}>
        <img
          src="https://png.pngitem.com/pimgs/s/10-101450_circle-hd-png-download.png"
          alt="clock-icon"
          height={15}
        />
        <div className={styles.title}>Opening hours</div>
      </div>
      <div style={{ width: '250px' }}>
        <Divider />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>{children}</div>
    </div>
  );
}
