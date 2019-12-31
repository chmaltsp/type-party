import * as React from 'react';

import { em } from 'polished';
import styled, { media } from 'sc';

import { Container as ContainerBase } from '../../components/Container';
import TextBase from '../../components/Text';

import {
  PlantFull as PlantBase,
  RedBlob as RedBlobBase,
  Star as StarBase,
} from '../../components/Images';

const Heading = styled.h1`
  font-weight: 600;
  font-size: ${em(32)};
  margin: 136px 0 0 0;
  display: block;
  margin-bottom: ${props => props.theme.spacing.md}px;
`;

const Container = styled(ContainerBase)`
  max-width: ${em(700)};
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
  flex-direction: column;
  position: relative;
`;

const Text = styled(TextBase)`
  margin-bottom: ${props => props.theme.spacing.sm}px;
  &:last-child {
    margin-bottom: 270px;
    ${media.tablet`
      margin-bottom: 100px;
    `}
  }
`;

const Star = styled(StarBase)`
  position: absolute;
  width: 238.74px;
  height: 232.51px;
  left: 750px;
  top: 10px;
  background-size: cover;
  z-index: -1;
  transform: rotate(30deg);

  ${media.tablet`
    display: none;
  `};
`;

const Plant = styled(PlantBase)`
  position: absolute;
  width: 609px;
  height: 452px;
  top: 400px;
  right: -300px;
  background-size: cover;
  z-index: -1;

  ${media.tablet`
    transform: scale(.6);
    top: 450px;
    right: -350px;

  `}
`;

const RedBlob = styled(RedBlobBase)`
  position: absolute;
  width: 485px;
  height: 315px;
  left: -478px;
  top: 205px;
  background-size: cover;
  z-index: -1;
`;

class About extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <>
        <Plant />
        <Container>
          <Star />
          <RedBlob />
          <Heading>
            Type Party is a resource for web inspiration using free and open source
            typography.
          </Heading>
          <Text>
            Open source typography is a great resource for designers, and opens doors to
            understanding how fonts are designed and distributed. Type Party’s mission is
            to empower designers and encourage learning and collaboration.
          </Text>
          <Text>
            By definition, open source means you can (a) use, (b) modify, (c)
            redistribute, and (d) redistribute modified versions, for both personal and
            commercial use. We highly encourage you credit the type designers if you use
            any of their fonts in your designs.
          </Text>
          <Text>Type Party is a side project of product designer Milan Moffatt.</Text>
          <Text>Built by Phil Chmalts.</Text>
        </Container>
      </>
    );
  }
}

export default About;
