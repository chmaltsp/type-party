import * as React from 'react';

import { em } from 'polished';
import styled, { media } from 'sc';

import { Container } from '../../components/Container';

import SignupPanel from '../../components/SignupPanel';
import Websites from './Websites';

const Heading = styled.h1`
  font-weight: 800;
  font-size: ${em(40)};
  margin: 96px auto;
  padding: 0 80px;
  display: block;
  text-align: center;
  ${media.tablet`
   text-align: left;
    margin: 0;
    padding: 0 ${({ theme }: any) => theme.spacing.sm}px;
`};
`;

class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <>
        <Container>
          <Heading>
            Type Party is a collection of the best free and open source typography on the
            web.
          </Heading>
          <Websites />
        </Container>
        <SignupPanel />
      </>
    );
  }
}

export default Home;
