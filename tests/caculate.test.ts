import {add} from '../src/caculate';

describe('validate:', () => {
  /**
   * myFirstFunc
   */
  it('add', () => {
    expect(add(1, 2)).toBe(3);
  });
});
