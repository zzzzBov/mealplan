import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface ILayoutProps {
  footer: ReactNode;
  header: ReactNode;
  main: ReactNode;
}

const $Wrapper = styled.div``;

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
