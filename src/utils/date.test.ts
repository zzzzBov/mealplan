import { dateFromString, stringFromDate } from './date';

describe(`dateFromString()`, () => {
  it(`should be a function`, () => {
    expect(dateFromString).toBeInstanceOf(Function);
  });

  const now = new Date();
  const thisMonth = new Date(now.getFullYear(), now.getMonth());

  ([
    ['2020-01', new Date(2020, 0)],
    ['2020-02', new Date(2020, 1)],
    ['2020-03', new Date(2020, 2)],
    ['2020-04', new Date(2020, 3)],
    ['2020-05', new Date(2020, 4)],
    ['2020-06', new Date(2020, 5)],
    ['2020-07', new Date(2020, 6)],
    ['2020-08', new Date(2020, 7)],
    ['2020-09', new Date(2020, 8)],
    ['2020-10', new Date(2020, 9)],
    ['2020-11', new Date(2020, 10)],
    ['2020-12', new Date(2020, 11)],
    ['asdf-gh', thisMonth],
    ['2020-00', new Date(2019, 11)],
    ['2020-13', new Date(2021, 0)],
    ['1234-56', new Date(1238, 7)],
  ] as [string, Date][]).forEach(([input, expected]) => {
    it(`should convert "${input}" to ${expected.toISOString()}`, () => {
      const result = dateFromString(input);

      expect(result).toEqual(expected);
    });
  });
});

describe(`stringFromDate()`, () => {
  it(`should be a function`, () => {
    expect(stringFromDate).toBeInstanceOf(Function);
  });

  ([
    [new Date(2020, 0), '2020-01'],
    [new Date(2020, 1), '2020-02'],
    [new Date(2020, 2), '2020-03'],
    [new Date(2020, 3), '2020-04'],
    [new Date(2020, 4), '2020-05'],
    [new Date(2020, 5), '2020-06'],
    [new Date(2020, 6), '2020-07'],
    [new Date(2020, 7), '2020-08'],
    [new Date(2020, 8), '2020-09'],
    [new Date(2020, 9), '2020-10'],
    [new Date(2020, 10), '2020-11'],
    [new Date(2020, 11), '2020-12'],
  ] as [Date, string][]).forEach(([input, expected]) => {
    it(`should convert ${input.toISOString()} to "${expected}"`, () => {
      const result = stringFromDate(input);

      expect(result).toEqual(expected);
    });
  });
});
