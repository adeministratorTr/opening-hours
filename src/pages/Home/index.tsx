import { useEffect, useState } from 'react';
import { getRestaurantTimeSlots } from 'services/restaurant';
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
      {days && days.length > 1 && (
        <>
          <div>Opening Hours</div>
          <p>----------------------------</p>
          {days.map((item, index) => (
            <p key={index}>
              {item.day}: {item.value}
            </p>
          ))}
        </>
      )}
    </div>
  );
}
