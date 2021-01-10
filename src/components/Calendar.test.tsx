import React from 'react';
import { render, screen } from '@testing-library/react';
import { Calendar, DayOfWeek, getWeekdays, getWeeks, Month } from './Calendar';

describe(`getWeekdays(startOfWeek)`, () => {
  it(`should be a function`, () => {
    expect(getWeekdays).toBeInstanceOf(Function);
  });

  ([
    [
      DayOfWeek.Sunday,
      [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
    ],
    [
      DayOfWeek.Monday,
      [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
    ],
    [
      DayOfWeek.Tuesday,
      [
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
        'Monday',
      ],
    ],
    [
      DayOfWeek.Wednesday,
      [
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
        'Monday',
        'Tuesday',
      ],
    ],
    [
      DayOfWeek.Thursday,
      [
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
      ],
    ],
    [
      DayOfWeek.Friday,
      [
        'Friday',
        'Saturday',
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
      ],
    ],
    [
      DayOfWeek.Saturday,
      [
        'Saturday',
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
    ],
  ] as [DayOfWeek, string[]][]).forEach(([start, expected]) => {
    it(`should return the weekdays based on the start of the week`, () => {
      const result = getWeekdays(start);
      expect(result).toEqual(expected);
    });
  });
});

describe(`getWeeks(month, startOfWeek)`, () => {
  it(`should be a function`, () => {
    expect(getWeeks).toBeInstanceOf(Function);
  });

  ([
    [
      new Date(2020, Month.January),
      DayOfWeek.Sunday,
      [
        [
          new Date(2019, Month.December, 29),
          new Date(2019, Month.December, 30),
          new Date(2019, Month.December, 31),
          new Date(2020, Month.January, 1),
          new Date(2020, Month.January, 2),
          new Date(2020, Month.January, 3),
          new Date(2020, Month.January, 4),
        ],
        [
          new Date(2020, Month.January, 5),
          new Date(2020, Month.January, 6),
          new Date(2020, Month.January, 7),
          new Date(2020, Month.January, 8),
          new Date(2020, Month.January, 9),
          new Date(2020, Month.January, 10),
          new Date(2020, Month.January, 11),
        ],
        [
          new Date(2020, Month.January, 12),
          new Date(2020, Month.January, 13),
          new Date(2020, Month.January, 14),
          new Date(2020, Month.January, 15),
          new Date(2020, Month.January, 16),
          new Date(2020, Month.January, 17),
          new Date(2020, Month.January, 18),
        ],
        [
          new Date(2020, Month.January, 19),
          new Date(2020, Month.January, 20),
          new Date(2020, Month.January, 21),
          new Date(2020, Month.January, 22),
          new Date(2020, Month.January, 23),
          new Date(2020, Month.January, 24),
          new Date(2020, Month.January, 25),
        ],
        [
          new Date(2020, Month.January, 26),
          new Date(2020, Month.January, 27),
          new Date(2020, Month.January, 28),
          new Date(2020, Month.January, 29),
          new Date(2020, Month.January, 30),
          new Date(2020, Month.January, 31),
          new Date(2020, Month.February, 1),
        ],
      ],
    ],
    [
      new Date(2020, Month.January),
      DayOfWeek.Friday,
      [
        [
          new Date(2019, Month.December, 27),
          new Date(2019, Month.December, 28),
          new Date(2019, Month.December, 29),
          new Date(2019, Month.December, 30),
          new Date(2019, Month.December, 31),
          new Date(2020, Month.January, 1),
          new Date(2020, Month.January, 2),
        ],
        [
          new Date(2020, Month.January, 3),
          new Date(2020, Month.January, 4),
          new Date(2020, Month.January, 5),
          new Date(2020, Month.January, 6),
          new Date(2020, Month.January, 7),
          new Date(2020, Month.January, 8),
          new Date(2020, Month.January, 9),
        ],
        [
          new Date(2020, Month.January, 10),
          new Date(2020, Month.January, 11),
          new Date(2020, Month.January, 12),
          new Date(2020, Month.January, 13),
          new Date(2020, Month.January, 14),
          new Date(2020, Month.January, 15),
          new Date(2020, Month.January, 16),
        ],
        [
          new Date(2020, Month.January, 17),
          new Date(2020, Month.January, 18),
          new Date(2020, Month.January, 19),
          new Date(2020, Month.January, 20),
          new Date(2020, Month.January, 21),
          new Date(2020, Month.January, 22),
          new Date(2020, Month.January, 23),
        ],
        [
          new Date(2020, Month.January, 24),
          new Date(2020, Month.January, 25),
          new Date(2020, Month.January, 26),
          new Date(2020, Month.January, 27),
          new Date(2020, Month.January, 28),
          new Date(2020, Month.January, 29),
          new Date(2020, Month.January, 30),
        ],
        [
          new Date(2020, Month.January, 31),
          new Date(2020, Month.February, 1),
          new Date(2020, Month.February, 2),
          new Date(2020, Month.February, 3),
          new Date(2020, Month.February, 4),
          new Date(2020, Month.February, 5),
          new Date(2020, Month.February, 6),
        ],
      ],
    ],
  ] as [Date, DayOfWeek, Date[][]][]).forEach(([month, start, expected]) => {
    it(`should generate the week data for the specified month with the specified start date`, () => {
      const result = getWeeks(month, start);

      expect(result).toEqual(expected);
    });
  });
});

describe.skip(`<Calendar month={date} />`, () => {
  it(`should render a calendar for the specific month`, () => {
    const { container } = render(<Calendar month={new Date(2020, 0)} />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <table>
          <thead>
            <tr>
              <th>Sunday</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>29</span></td>
              <td><span>30</span></td>
              <td><span>31</span></td>
              <td><span>01</span></td>
              <td><span>02</span></td>
              <td><span>03</span></td>
              <td><span>04</span></td>
            </tr>
            <tr>
              <td><span>05</span></td>
              <td><span>06</span></td>
              <td><span>07</span></td>
              <td><span>08</span></td>
              <td><span>09</span></td>
              <td><span>10</span></td>
              <td><span>11</span></td>
            </tr>
            <tr>
              <td><span>12</span></td>
              <td><span>13</span></td>
              <td><span>14</span></td>
              <td><span>15</span></td>
              <td><span>16</span></td>
              <td><span>17</span></td>
              <td><span>18</span></td>
            </tr>
            <tr>
              <td><span>19</span></td>
              <td><span>20</span></td>
              <td><span>21</span></td>
              <td><span>22</span></td>
              <td><span>23</span></td>
              <td><span>24</span></td>
              <td><span>25</span></td>
            </tr>
            <tr>
              <td><span>26</span></td>
              <td><span>27</span></td>
              <td><span>28</span></td>
              <td><span>29</span></td>
              <td><span>30</span></td>
              <td><span>31</span></td>
              <td><span>01</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    `);
  });
});
