import React, { FC } from 'react';
import styled from 'styled-components';
import { d2 } from '../styles';

interface ICopyrightProps {
  date: Date;
}

const $Wrapper = styled.p`
  font-size: ${d2}em;
  margin: 0;
  text-align: center;
`;

export const Copyright: FC<ICopyrightProps> = ({ date }) => {
  const year = date.getFullYear();
  return <$Wrapper>Copyright &copy; zzzzBov 2021-{year}</$Wrapper>;
};
