import * as React from 'react';

import { em } from 'polished';
import styled, { media } from 'sc';

import { Container, FullWidthContainer } from '../../components/Container';

import SignupPanel from '../../components/SignupPanel';
import Websites from './Websites';

import HeroCarousel from './HeroCarousel';

const Heading = styled.h1`
  font-weight: 500;
  font-size: ${em(40)};
  margin: 96px auto;
  padding: 0 80px;
  max-width: 891px;
  display: block;
  text-align: center;
  font-style: italic;
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
        <div>
          <Container>
            <Heading>
              Type Party is a collection of the best free and open source typography on
              the web.
            </Heading>
          </Container>
          <FullWidthContainer>
            <HeroCarousel />
          </FullWidthContainer>
          <Container>
            <Websites />
            <SignupPanel />
          </Container>
        </div>
      </>
    );
  }
}

export default Home;
