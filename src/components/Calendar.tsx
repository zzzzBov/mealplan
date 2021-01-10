import React, { FC } from 'react';
import styled from 'styled-components';

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

const $Wrapper = styled.div``;

const $Table = styled.table``;

const $THead = styled.thead``;

const $HeaderRow = styled.tr``;

const $Header = styled.th``;

const $TBody = styled.tbody``;

const $WeekRow = styled.tr``;

const $WeekDay = styled.td``;

const $Date = styled.span``;

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

interface ICalendarProps {
  month: Date;
  startOfWeek?: DayOfWeek;
}

export const Calendar: FC<ICalendarProps> = ({
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
                  <$Date>{day.getDate()}</$Date>
                </$WeekDay>
              ))}
            </$WeekRow>
          ))}
        </$TBody>
      </$Table>
    </$Wrapper>
  );
};
