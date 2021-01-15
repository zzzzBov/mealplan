import React, { FC, FormEvent } from 'react';
import styled from 'styled-components';
import { dateFromString, stringFromDate } from '../utils';

interface IEditProps {
  month: Date;
  setMonth(month: Date): void;
}

const $Input = styled.input`
  margin: 1em;
  position: absolute;
  right: 0;
  top: 0;
  width: 2em;

  @media print {
    display: none;
  }

  ::-webkit-calendar-picker-indicator {
    margin: 0;
  }
`;

export const Edit: FC<IEditProps> = ({ month, setMonth }) => {
  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setMonth(dateFromString(e.currentTarget.value));
  };
  return (
    <$Input type="month" value={stringFromDate(month)} onChange={onChange} />
  );
};
