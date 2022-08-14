import { useEffect, useState } from 'react';

import { getRestaurantTimeSlots } from 'services/restaurant';
import DayTimeList from 'components/DayTimeList';
import Divider from 'components/Divider';

import { mapDateTime, TMappedDateTime } from './mapper';

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
        <DayTimeList>
          {days.map((item, index) => (
            <div key={index}>
              {item.day}: {item.value}
              <Divider variant="light" />
            </div>
          ))}
        </DayTimeList>
      )}
    </div>
  );
}
