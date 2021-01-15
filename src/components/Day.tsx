import React, { FC } from 'react';
import styled from 'styled-components';
import { ICalendarDayProps } from './Calendar';
import { black, grey5, d1, d2 } from '../styles';

export interface IDayProps extends ICalendarDayProps {}

// prettier-ignore
const $Wrapper = styled.div`
  display: grid;
  grid-template:
    'date edit' auto
    'menu menu' 1fr
  /  1fr  1fr   ;
  min-height: 100%;
`;

interface IDateProps {
  current: boolean;
}

const $Date = styled.span<IDateProps>`
  color: ${({ current }) => (current ? black : grey5)};
  font-weight: ${({ current }) => (current ? 'bold' : 'normal')};
  grid-area: date;
`;

const $Edit = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  grid-area: edit;
  justify-self: end;
  opacity: 0.2;
  padding: 0;

  ${$Wrapper}:hover &,
  ${$Wrapper}:focus-within & {
    opacity: 1;
  }

  @media print {
    display: none;
  }
`;

const $Menu = styled.div`
  font-size: ${d2}em;
  grid-area: menu;
  text-align: center;
`;

// Star: &#9733;

export const Day: FC<IDayProps> = ({ day, month }) => {
  const date = day.getDate();
  return (
    <$Wrapper>
      <$Date current={day.getMonth() === month.getMonth()}>{date}</$Date>
      <$Edit type="button">&#9998;</$Edit>
      <$Menu></$Menu>
    </$Wrapper>
  );
};
