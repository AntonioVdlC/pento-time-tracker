import formatCounter from './index';

describe('format-counter', () => {
  it('should return a string when passed an Integer', () => {
    const counter = 10;

    const expected = 'string';
    const actual = typeof formatCounter(counter);

    expect(actual).toEqual(expected);
  });
  it('should throw an error if passed something that is not an Integer', () => {
    const counter = 'blabla';

    const expected = new TypeError('`counter` needs to be an Integer.');
    const actual = () => {
      formatCounter(counter);
    };

    expect(actual).toThrow(expected);
  });

  it('should display seconds correctly', () => {
    const counter = 55;

    const expected = `00:00:55`;
    const actual = formatCounter(counter);

    expect(actual).toEqual(expected);
  });
  it('should display minutes and seconds correctly', () => {
    const counter = 75;

    const expected = `00:01:15`;
    const actual = formatCounter(counter);

    expect(actual).toEqual(expected);
  });
  it('should display hours, minutes and seconds correctly', () => {
    const counter = 12345;

    const expected = `03:25:45`;
    const actual = formatCounter(counter);

    expect(actual).toEqual(expected);
  });
});
