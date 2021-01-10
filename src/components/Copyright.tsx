import React, { FC } from 'react';
import styled from 'styled-components';

interface ICopyrightProps {
  date: Date;
}

const $Wrapper = styled.p``;

export const Copyright: FC<ICopyrightProps> = ({ date }) => {
  const year = date.getFullYear();
  return <$Wrapper>Copyright &copy; zzzzBov 2021-{year}</$Wrapper>;
};
