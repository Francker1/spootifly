import { millisToMinutesAndSeconds } from '../../../../app/core/helpers/main';

describe('Test in function millisToMinutesAndSeconds', () => {
  test('should return undefined if argument is not a number', () => {
    const result = millisToMinutesAndSeconds('25');

    expect(result).toBeUndefined();
  });

  test('should print 3:oo if received 180000 seconds', () => {
    const numberRecieved = 180000;
    const result = millisToMinutesAndSeconds(numberRecieved);

    expect(result).toBe('3:00');
  });
});
