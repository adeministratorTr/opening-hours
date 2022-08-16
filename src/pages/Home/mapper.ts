import { TRestaurantDays, TDayHours, Days, Status } from 'services/types';
import { CLOSE_TEXT_ON_PAGE, weekDays } from './Home.constants';

export type TMappedDateTime = {
  day: Days;
  value: string;
};

// Main motivation of this file/function is doing all mapping actions here
// and try to keep page as simple as possible. If pages includes just business logic,
// it'll be easier to add new feature/debug/change current state.

export function mapDateTime(fullData: TRestaurantDays): TMappedDateTime[] {
  const normalizedData = normalizeDaysWorkingHours(fullData);

  const mappedObject: TMappedDateTime[] = [
    {
      day: Days.Monday,
      value: getBusinessTimeText(normalizedData[Days.Monday])
    },
    {
      day: Days.Tuesday,
      value: getBusinessTimeText(normalizedData[Days.Tuesday])
    },
    {
      day: Days.Wednesday,
      value: getBusinessTimeText(normalizedData[Days.Wednesday])
    },
    {
      day: Days.Thursday,
      value: getBusinessTimeText(normalizedData[Days.Thursday])
    },
    {
      day: Days.Friday,
      value: getBusinessTimeText(normalizedData[Days.Friday])
    },
    {
      day: Days.Saturday,
      value: getBusinessTimeText(normalizedData[Days.Saturday])
    },
    {
      day: Days.Sunday,
      value: getBusinessTimeText(normalizedData[Days.Sunday])
    }
  ];
  return mappedObject;
}

function getDayIndex(index: number): Days {
  if (index === -1) {
    // in case of Sunday, has closing time for Monday
    return weekDays[weekDays.length - 1];
  }
  return weekDays[index];
}

function normalizeDaysWorkingHours(originalData: TRestaurantDays): TRestaurantDays {
  // Normalize data in a way we'll use in Page
  for (let i = 0; i < weekDays.length; i++) {
    // day has no data, means they close
    if (originalData[getDayIndex(i)].length === 0) {
      continue;
    }
    if (originalData[getDayIndex(i)][0].type === Status.Close) {
      // move first "close" type value to the day before
      const previousDay = i - 1;
      originalData[getDayIndex(previousDay)] = [
        ...originalData[getDayIndex(previousDay)],
        originalData[getDayIndex(i)][0]
      ];
      originalData[getDayIndex(i)] = originalData[getDayIndex(i)].slice(1);
    }
  }
  return originalData;
}

function getBusinessTimeText(dayList: TDayHours[]): string {
  if (!dayList || dayList === null) return CLOSE_TEXT_ON_PAGE;
  if (dayList.length === 0) return CLOSE_TEXT_ON_PAGE; // if certain day has no data, that means shop closed that day.
  const mappedList: string[] = [];
  for (let i = 1; i <= Object.keys(dayList).length; i += 2) {
    // to group hours 2 by 2. Then it'll be easier to join with ', '
    mappedList.push(
      getTextFromSecond({ second: dayList[i - 1].value }) +
        ' - ' +
        getTextFromSecond({ second: dayList[i].value })
    );
  }
  return mappedList.map((i) => i).join(', ');
}

function getTextFromSecond({ second }: { second: number }): string {
  const time = new Date(0);
  time.setSeconds(second);
  const hour = time.toLocaleString('en-US', {
    timeZone: 'UTC',
    hour: 'numeric',
    hour12: true
  });
  return hour;
}
