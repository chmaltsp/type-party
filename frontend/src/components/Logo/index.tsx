import { em } from 'polished';
import styled from 'sc';

import tpLogo from './type-party_one-line.svg';

const Logo = styled.img.attrs({
  src: tpLogo,
})`
  max-width: ${em(160)};
  width: 100%;
  height: auto;
`;

export default Logo;
