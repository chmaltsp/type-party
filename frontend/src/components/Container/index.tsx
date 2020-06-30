import { em } from 'polished';
import styled, { media } from 'sc';

export const Container = styled.div`
  padding: 0 ${em(136)};
  margin-top: ${em(96)};
  ${media.desktop`
        padding: 0 ${em(32)};
    `};
`;

export const FullWidthContainer = styled(Container)`
  padding: 0;
  ${media.desktop`
        padding: 0;
    `};
`;
