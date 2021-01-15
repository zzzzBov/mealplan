import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface ILayoutProps {
  footer: ReactNode;
  header: ReactNode;
  main: ReactNode;
}

// prettier-ignore
const $Wrapper = styled.div`
  display: grid;
  gap: 1em;
  grid-template:
    'header' auto
    'main  ' 1fr
    'footer' auto
  /  100%    ;
  min-height: 100%;
  padding: 4.8rem;
`;

const $Header = styled.header``;

const $Main = styled.main``;

const $Footer = styled.footer``;

export const Layout: FC<ILayoutProps> = ({ footer, header, main }) => {
  return (
    <$Wrapper>
      <$Header>{header}</$Header>
      <$Main>{main}</$Main>
      <$Footer>{footer}</$Footer>
    </$Wrapper>
  );
};
