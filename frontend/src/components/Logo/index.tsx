import { em } from 'polished';
import * as React from 'react';
import styled from 'sc';

import tpLogo from './type-party-logo.svg';

const Logo = styled.img.attrs({
  src: tpLogo,
})`
    max-width: ${em(100)};
    width: 100%;
    height: auto;
`;

export default Logo;
