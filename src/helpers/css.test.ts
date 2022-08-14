import { classNames } from './css';

describe('css', () => {
  describe('classNames', () => {
    it('should return a single string from multiple classes', () => {
      expect(classNames('text', 'text-sm')).toBe('text text-sm');
    });

    it('should filter out falsy values', () => {
      expect(
        classNames(
          'text',
          true && 'text-sm',
          false && 'b',
          undefined && 'c',
          null && 'd',
          0 && 'e'
        )
      ).toBe('text text-sm');
    });
  });
});
