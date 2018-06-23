import * as React from 'react';
import styled, { media } from 'sc';

import { em } from 'polished';
import Form from './Form';

import { Plant as PlantBase, Star as StarBase } from '../Images';

const InnerWrapper = styled.div`
  margin: 0 auto;
  padding: ${em(190)} 0;
  max-width: ${em(780)};
  z-index: 5;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  ${media.tablet`
    padding: 0 ${em(32)};
    width: auto;
  `};
`;
const CtaText = styled.h2`
  font-weight: 800;
  font-size: ${em(32)};
  line-height: 1.4;
`;
// export interface SignupPanelProps {}
const StarLeft = StarBase.extend`
  position: absolute;
  top: 0;
  left: -40px;
  height: 238px;
  width: 238px;
  background-size: cover;

  ${media.tablet`
    height: 70px;
    width: 70px;
    left: 0px;
  `};
`;

const StarBottom = StarBase.extend`
  position: absolute;
  bottom: 0;
  left: 28%;
  height: 238px;
  width: 238px;
  background-size: cover;
  z-index: -1;
  ${media.tablet`
    display: none;
  `};
`;

const Plant = PlantBase.extend`
  position: absolute;
  height: 100%;
  width: 100%;
  background-position-x: 105%;
  background-position-y: 100%;
  background-size: 40% 100%;
  background-repeat: no-repeat;
  z-index: -1;
  ${media.tablet`
    background-position-y: 30%;
    background-size: 47% 35%;
    background-position-x: 115%;
   `};
`;

export default class SignupPanel extends React.Component<{}, any> {
  public render() {
    return (
      <Wrapper>
        <StarLeft />
        <StarBottom />
        <Plant />
        <InnerWrapper>
          <CtaText>
            Wanna know when new sites and fonts are added? Get a monthly round up email.
          </CtaText>
          <Form />
        </InnerWrapper>
      </Wrapper>
    );
  }
}
