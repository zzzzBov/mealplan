import React, { FC } from 'react';
import styled from 'styled-components';

interface IHeadingProps {
  month: Date;
}

const $Wrapper = styled.h1`
  margin: 0;
  text-align: center;
`;

export const Heading: FC<IHeadingProps> = ({ month }) => {
  const heading = month.toLocaleString(window.navigator.language, {
    month: 'long',
    year: 'numeric',
  });
  return <$Wrapper>{heading}</$Wrapper>;
};
