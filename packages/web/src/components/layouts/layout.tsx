import { ReactNode } from 'react';

import { css } from "@emotion/react";
import Container from '@mui/material/Container';

import Footer from 'components/layouts/footer';
import Header from 'components/layouts/header';

const sizes = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
};

type Props = {
  children: ReactNode;
  containerSize?: keyof typeof sizes;
}

export default function Layout({ 
  children,
  containerSize = 'xl'
}: Props): JSX.Element {
  return (
    <>
      <Header />
      <Container
        css={css`
          &&& {
            margin-top: 3rem;
            margin-bottom: 3rem;
          }
      `}
        maxWidth={containerSize}>
        { children }
      </Container>
      <Footer />
    </>
  );
}