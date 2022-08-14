import React, { useEffect, useState } from 'react';

import { getRestaurantTimeSlots } from 'services/restaurant';
import DayTimeList from 'components/DayTimeList';
import Divider from 'components/Divider';

import { mapDateTime, TMappedDateTime } from './mapper';

import styles from './Home.module.scss';

export default function Home() {
  const [days, setDays] = useState<TMappedDateTime[]>();
  useEffect(() => {
    setDays(mapDateTime(getRestaurantTimeSlots()));
  }, []);

  function renderNoResult() {
    return <p>Ooops. This place is closed!</p>;
  }

  return (
    <div>
      {!days || (days === null && renderNoResult())}
      {days && days.length === 0 && renderNoResult()}
      {/* @TODO Add "TODAY" badge */}
      {days && days.length > 1 && (
        <div className={styles.dayTimeWrapper}>
          <DayTimeList>
            {days.map((item, index) => (
              <React.Fragment key={index}>
                <div className={styles.dayTimeItem}>
                  <p>{item.day}</p>
                  <p>{item.value}</p>
                  {/* Add gray color to "Closed" */}
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
