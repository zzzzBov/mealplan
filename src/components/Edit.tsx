import React, { FC } from 'react';
import styled from 'styled-components';

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

  ::-webkit-calendar-picker-indicator {
    margin: 0;
  }
`;

export const Edit: FC<IEditProps> = ({ month, setMonth: _ }) => {
  return <$Input type="month" value={month.toISOString().slice(0, 7)} />;
};
