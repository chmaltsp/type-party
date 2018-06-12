import * as React from 'react';
import styled from 'sc';

import tpLogo from './type-party-logo.svg';

const Image = styled.img`
    width: 100px;
`;

export const Logo = () => {
  return <Image src={tpLogo} />;
};

export default Logo;
