import { em } from 'polished';
import styled, { media } from 'sc';

export const Container = styled.div`
  padding: 0 ${em(136)};
  ${media.desktop`
        padding: 0 ${em(32)};
    `};
`;
