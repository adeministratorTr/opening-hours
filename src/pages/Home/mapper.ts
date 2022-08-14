import { TRestaurantDays, Days, Status } from 'services/types';

export type TMappedDateTime = {
  //@TODO move to constant file
  day: Days;
  value: string;
};

// Main motivation of this file/function is doing all mapping actions here
// and try to keep page as simple as possible. If pages includes just business logic,
// it'll be easier to add new feature/debug/change current state.

export function mapDateTime(fullData: TRestaurantDays): TMappedDateTime[] {
  const mappedObject: TMappedDateTime[] = [
    {
      day: Days.Monday,
      value: getBusinessTimeText(fullData[Days.Monday])
    },
    {
      day: Days.Tuesday,
      value: getBusinessTimeText(fullData[Days.Tuesday])
    },
    {
      day: Days.Wednesday,
      value: getBusinessTimeText(fullData[Days.Wednesday])
    },
    {
      day: Days.Thursday,
      value: getBusinessTimeText(fullData[Days.Thursday])
    },
    {
      day: Days.Friday,
      value: getBusinessTimeText(fullData[Days.Friday])
    },
    {
      day: Days.Saturday,
      value: getBusinessTimeText(fullData[Days.Saturday])
    },
    {
      day: Days.Sunday,
      value: getBusinessTimeText(fullData[Days.Sunday])
    }
  ];

  return mappedObject;
}

// @TODO handle day item "close-open-close" case
// Now its working only in happy path

function getBusinessTimeText(dayList: any[]): string | any {
  //@TODO Fix "any"s
  if (!dayList || dayList === null) return Status.Close;
  if (dayList.length === 0) return Status.Close; // if certain day has no data, that means shop closed that day.
  if (dayList.length % 2 === 0) {
    return getTextFromSecond({ second: dayList[0].value }) + ' - ' + getTextFromSecond({ second: dayList[1].value });
  }

  // Just to be safe, I decided to assign closed text. Discussable, Changeable according to needs
  return Status.Close;
}

function getTextFromSecond({ second }: { second: number }): string {
  const time = new Date(0);
  time.setSeconds(second);
  const hour = time.toLocaleString('en-US', { timeZone: 'UTC', hour: 'numeric', hour12: true });
  return hour;
}
