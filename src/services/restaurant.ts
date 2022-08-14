import * as data from 'data/restaurant.json';
import { TRestaurantDays } from './types';

// if this changes to API request, dont forget to add Lazy import & Suspense to Home page
export const getRestaurantTimeSlots = (): TRestaurantDays => JSON.parse(JSON.stringify(data));
