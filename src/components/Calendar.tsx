import React, { ElementType, FC } from 'react';
import styled from 'styled-components';
import { black, greyA, white } from '../styles';

export enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

export enum DayOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

const $Wrapper = styled.div`
  overflow: auto;
`;

const $Table = styled.table`
  border-collapse: collapse;
  min-width: 60rem;
  table-layout: fixed;
  width: 100%;
`;

const $THead = styled.thead``;

const $HeaderRow = styled.tr``;

const $Header = styled.th`
  background-color: ${black};
  border-color: ${black};
  border-style: solid;
  border-width: 0.1rem;
  color: ${white};
`;

const $TBody = styled.tbody``;

const $WeekRow = styled.tr``;

const $WeekDay = styled.td`
  border-color: ${greyA};
  border-style: solid;
  border-width: 0.1rem;
  // height behaves like min-height for table cells
  height: 9rem;
  vertical-align: top;
`;

export const getWeekdays = (startOfWeek: DayOfWeek): string[] => {
  const weekdays = [];
  for (let i = 0; i < 7; i++) {
    const weekday = ((i + startOfWeek) % 7) as DayOfWeek;
    weekdays.push(DayOfWeek[weekday]);
  }
  return weekdays;
};

export const getWeeks = (month: Date, startOfWeek: DayOfWeek): Date[][] => {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const firstOfMonth = new Date(year, monthIndex, 1);
  const firstDayOfMonth = firstOfMonth.getDay();

  const dayDelta =
    startOfWeek - firstDayOfMonth - (startOfWeek > firstDayOfMonth ? 7 : 0);

  const startDate = new Date(year, monthIndex, 1 + dayDelta);

  const lastOfMonth = new Date(year, monthIndex + 1, 0);

  const weeks = [];
  for (let date = startDate; date <= lastOfMonth; ) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      week.push(date);
      date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
    }
    weeks.push(week);
  }

  return weeks;
};

export interface ICalendarDayProps {
  day: Date;
  month: Date;
}

export interface ICalendarProps {
  children: ElementType<ICalendarDayProps>;
  month: Date;
  startOfWeek?: DayOfWeek;
}

export const Calendar: FC<ICalendarProps> = ({
  children: Day,
  month,
  startOfWeek = DayOfWeek.Sunday,
}) => {
  const weekdays = getWeekdays(startOfWeek);
  const weeks = getWeeks(month, startOfWeek);

  return (
    <$Wrapper>
      <$Table>
        <$THead>
          <$HeaderRow>
            {weekdays.map((weekday, index) => (
              <$Header key={index}>{weekday}</$Header>
            ))}
          </$HeaderRow>
        </$THead>
        <$TBody>
          {weeks.map((week, weekIndex) => (
            <$WeekRow key={weekIndex}>
              {week.map((day, dayIndex) => (
                <$WeekDay key={dayIndex}>
                  <Day month={month} day={day} />
                </$WeekDay>
              ))}
            </$WeekRow>
          ))}
        </$TBody>
      </$Table>
    </$Wrapper>
  );
};
