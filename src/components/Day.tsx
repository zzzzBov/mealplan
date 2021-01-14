import React, { FC } from 'react';
import styled from 'styled-components';
import { ICalendarDayProps } from './Calendar';
import { black, grey5 } from '../styles';

export interface IDayProps extends ICalendarDayProps {}

const $Wrapper = styled.div``;

interface IDateProps {
  current: boolean;
}

const $Date = styled.span<IDateProps>`
  color: ${({ current }) => (current ? black : grey5)};
  font-weight: ${({ current }) => (current ? 'bold' : 'normal')};
`;

export const Day: FC<IDayProps> = ({ day, month }) => {
  const date = day.getDate();
  return (
    <$Wrapper>
      <$Date current={day.getMonth() === month.getMonth()}>{date}</$Date>
    </$Wrapper>
  );
};
