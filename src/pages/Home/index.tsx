import React, { useEffect, useState } from 'react';

import { getRestaurantTimeSlots } from 'services/restaurant';
import DayTimeList from 'components/DayTimeList';
import Divider from 'components/Divider';
import { Days } from 'services/types';

import { mapDateTime, TMappedDateTime } from './mapper';
import styles from './Home.module.scss';

export default function Home() {
  const [days, setDays] = useState<TMappedDateTime[]>();
  useEffect(() => {
    setDays(mapDateTime(getRestaurantTimeSlots()));
  }, []);

  function showTodayBadge({ day }: { day: Days }): boolean {
    const today = new Date().toLocaleString('en-us', { weekday: 'long' });
    return today.toLowerCase() === day.toLowerCase();
  }

  function renderNoResult() {
    return <p>Ooops. This place is closed!</p>;
  }

  return (
    <div>
      {!days || (days === null && renderNoResult())}
      {days && days.length === 0 && renderNoResult()}
      {days && days.length > 1 && (
        <div className={styles.dayTimeWrapper}>
          <DayTimeList>
            {days.map((item, index) => (
              <React.Fragment key={index}>
                <div className={styles.dayTimeItem}>
                  <div className={styles.day}>
                    {item.day}
                    {showTodayBadge({ day: item.day }) && (
                      <div className={styles.badge}>TODAY</div>
                    )}
                  </div>
                  <p>{item.value}</p>
                  {/* Add gray color to "Close" */}
                </div>
                <Divider variant="light" />
              </React.Fragment>
            ))}
          </DayTimeList>
        </div>
      )}
    </div>
  );
}
