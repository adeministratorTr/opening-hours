export type TRestaurantDays = {
  [key in Days]: TDayHours[];
};

export type TDayHours = {
  type: `${Status}`;
  value: number;
};

export enum Days {
  Monday = 'monday',
  Tuesday = 'tuesday',
  Wednesday = 'wednesday',
  Thursday = 'thursday',
  Friday = 'friday',
  Saturday = 'saturday',
  Sunday = 'sunday'
}

export enum Status {
  Open = 'open',
  Close = 'close'
}
