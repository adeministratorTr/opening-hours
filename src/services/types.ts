export type TRestaurantDays = {
  [key in Days]: {
    type: keyof typeof Status;
    value: number;
  }[];
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
  Close = 'closed'
}
