import { mapDateTime } from './mapper';
import { TRestaurantDays } from 'services/types';
import { CLOSE_TEXT_ON_PAGE } from './Home.constants';

const sampleAPIData: TRestaurantDays = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: []
};

beforeEach(() => {
  sampleAPIData.monday = []
  sampleAPIData.tuesday = []
  sampleAPIData.wednesday = []
  sampleAPIData.thursday = []
  sampleAPIData.friday = []
  sampleAPIData.saturday = []
  sampleAPIData.sunday = []
})

describe('Home Page -> mapper', () => {
  describe('mapDateTime', () => {
    it('should map data to close for all days', () => {
      const expectedData = [
        {
          day: 'monday',
          value: CLOSE_TEXT_ON_PAGE
        },
        {
          day: 'tuesday',
          value: CLOSE_TEXT_ON_PAGE
        },
        {
          day: 'wednesday',
          value: CLOSE_TEXT_ON_PAGE
        },
        {
          day: 'thursday',
          value: CLOSE_TEXT_ON_PAGE
        },
        {
          day: 'friday',
          value: CLOSE_TEXT_ON_PAGE
        },
        {
          day: 'saturday',
          value: CLOSE_TEXT_ON_PAGE
        },
        {
          day: 'sunday',
          value: CLOSE_TEXT_ON_PAGE
        }
      ];
      expect(mapDateTime(sampleAPIData)).toStrictEqual(expectedData);
    });
    it('should map data into day & value way', () => {
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
          value: CLOSE_TEXT_ON_PAGE
        },
        {
          day: 'wednesday',
          value: CLOSE_TEXT_ON_PAGE
        },
        {
          day: 'thursday',
          value: CLOSE_TEXT_ON_PAGE
        },
        {
          day: 'friday',
          value: '9 AM - 11 PM'
        },
        {
          day: 'saturday',
          value: CLOSE_TEXT_ON_PAGE
        },
        {
          day: 'sunday',
          value: CLOSE_TEXT_ON_PAGE
        }
      ];
      expect(mapDateTime(sampleAPIData)).toStrictEqual(expectedData);
    });
    it('should map data into multiple day & value way', () => {
      sampleAPIData.monday = [{ type: 'open', value: 36000 }];
      sampleAPIData.tuesday = [{ type: 'close', value: 3600 }];
      sampleAPIData.friday = [
        {
          type: 'open',
          value: 32400
        },
        {
          type: 'close',
          value: 39600
        },
        {
          type: 'open',
          value: 57600
        },
        {
          type: 'close',
          value: 82800
        }
      ];
      const expectedData = [
        {
          day: 'monday',
          value: '10 AM - 1 AM'
        },
        {
          day: 'tuesday',
          value: CLOSE_TEXT_ON_PAGE
        },
        {
          day: 'wednesday',
          value: CLOSE_TEXT_ON_PAGE
        },
        {
          day: 'thursday',
          value: CLOSE_TEXT_ON_PAGE
        },
        {
          day: 'friday',
          value: '9 AM - 11 AM, 4 PM - 11 PM'
        },
        {
          day: 'saturday',
          value: CLOSE_TEXT_ON_PAGE
        },
        {
          day: 'sunday',
          value: CLOSE_TEXT_ON_PAGE
        }
      ];
      expect(mapDateTime(sampleAPIData)).toStrictEqual(expectedData);
    });
    it('should map data for Sunday open & Monday close edge case', () => {
      sampleAPIData.monday = [
        { type: 'close', value: 3600 }
      ];
      sampleAPIData.sunday = [
        { type: 'open', value: 64800 }
      ];
      const expectedData = [
        {
          day: 'monday',
          value: CLOSE_TEXT_ON_PAGE
        },
        {
          day: 'tuesday',
          value: CLOSE_TEXT_ON_PAGE
        },
        {
          day: 'wednesday',
          value: CLOSE_TEXT_ON_PAGE
        },
        {
          day: 'thursday',
          value: CLOSE_TEXT_ON_PAGE
        },
        {
          day: 'friday',
          value: CLOSE_TEXT_ON_PAGE
        },
        {
          day: 'saturday',
          value: CLOSE_TEXT_ON_PAGE
        },
        {
          day: 'sunday',
          value: '6 PM - 1 AM'
        }
      ];
      expect(mapDateTime(sampleAPIData)).toStrictEqual(expectedData);
    })
  });
});
