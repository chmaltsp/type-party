import * as React from 'react';

import { em } from 'polished';
import styled from 'sc';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${em(46)};
  margin: 0;
`;

const Landing = () => (
  <Container>
    <MainTitle>Type Party</MainTitle>
  </Container>
);

export default Landing;
