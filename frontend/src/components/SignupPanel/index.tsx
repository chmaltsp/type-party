import * as React from 'react';
import styled from 'sc';

import { em } from 'polished';
import Form from './Form';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: ${em(190)} 0;
  max-width: ${em(780)};
`;

const CtaText = styled.h2`
  font-weight: 800;
  font-size: ${em(32)};
  line-height: 1.4;
`;
// export interface SignupPanelProps {}

export default class SignupPanel extends React.Component<{}, any> {
  public render() {
    return (
      <Wrapper>
        <CtaText>
          Wanna know when new sites and fonts are added? Get a monthly round up email.
        </CtaText>
        <Form />
      </Wrapper>
    );
  }
}
