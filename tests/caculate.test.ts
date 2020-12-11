import {add} from '../src/caculate';

describe('validate:', () => {
  /**
   * myFirstFunc
   */
  it('add', () => {
    test('return caculate value', () => {
      expect(add(1, 2)).toBe(3);
    });
  });
});
