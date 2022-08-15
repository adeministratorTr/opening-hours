import { mapDateTime } from './mapper';
import { TRestaurantDays } from 'services/types';

describe('Home Page -> mapper', () => {
  describe('mapDateTime', () => {
    const sampleAPIData: TRestaurantDays = {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: []
    };
    it('should map data to close for all days', () => {
      const expectedData = [
        {
          day: 'monday',
          value: 'close'
        },
        {
          day: 'tuesday',
          value: 'close'
        },
        {
          day: 'wednesday',
          value: 'close'
        },
        {
          day: 'thursday',
          value: 'close'
        },
        {
          day: 'friday',
          value: 'close'
        },
        {
          day: 'saturday',
          value: 'close'
        },
        {
          day: 'sunday',
          value: 'close'
        }
      ];
      expect(mapDateTime(sampleAPIData)).toStrictEqual(expectedData);
    });

    it('should map data to some days', () => {
      sampleAPIData.monday = [
        { type: 'open', value: 36000 },
        { type: 'close', value: 64800 }
      ];
      sampleAPIData.friday = [
        { type: 'open', value: 32400 },
        { type: 'close', value: 82800 }
      ];
      const expectedData = [
        {
          day: 'monday',
          value: '10 AM - 6 PM'
        },
        {
          day: 'tuesday',
          value: 'close'
        },
        {
          day: 'wednesday',
          value: 'close'
        },
        {
          day: 'thursday',
          value: 'close'
        },
        {
          day: 'friday',
          value: '9 AM - 11 PM'
        },
        {
          day: 'saturday',
          value: 'close'
        },
        {
          day: 'sunday',
          value: 'close'
        }
      ];
      expect(mapDateTime(sampleAPIData)).toStrictEqual(expectedData);
    });
  });
});
