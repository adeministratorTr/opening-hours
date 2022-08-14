import * as data from 'data/restaurant.json';
import { TRestaurantDays } from './types';

export const getRestaurantTimeSlots = (): TRestaurantDays => JSON.parse(JSON.stringify(data));
