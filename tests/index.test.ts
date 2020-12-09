import myFirstFunc from '../src';

describe('validate:', () => {
  /**
   * myFirstFunc
   */
  it('myFirstFunc', () => {
    test('return hello rollup', () => {
      expect(myFirstFunc('rollup')).toBe('hello rollup');
    });
  });
});
