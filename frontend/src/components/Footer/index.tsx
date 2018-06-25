import * as React from 'react';
import styled, { media } from 'sc';

import { Container } from '../Container';

import LinkBase from '../Link';
import LogoBase from '../Logo';

import { links } from '../Header';

import { em } from 'polished';

const Link = LinkBase.extend`
  text-decoration: none;
`;

const Credits = styled.div`
  margin: 32px auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.greyDDD};
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border-top: 1px solid ${({ theme }) => theme.colors.greyDDD};
  padding: ${em(64)} 0 ${em(132)};
  ${media.tablet`
    grid-template-columns: 1fr;
    grid-gap: 0px;
  `};
`;

const Logo = LogoBase.extend`
  width: ${em(64)};
  height: ${em(64)};
  ${media.tablet`
    display: none;
  `};
`;

// interface FooterProps {
// }
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Footer: React.SFC<{}> = props => {
  return (
    <Container>
      <InnerWrapper>
        <Logo />

        <Column>
          {links
            .map(({ to, text }) => (
              <Link key={to} to={to}>
                {text}
              </Link>
            ))
            .slice(0, 2)}
        </Column>
        <Column>
          {links
            .map(({ to, text }) => (
              <Link key={to} to={to}>
                {text}
              </Link>
            ))
            .slice(2, 4)}
        </Column>
        <Column>
          {links
            .map(({ to, text }) => (
              <Link key={to} to={to}>
                {text}
              </Link>
            ))
            .slice(4, 5)}
        </Column>
      </InnerWrapper>
      <Credits>©2018 Type Party. Project by Milan Moffatt, built by Phil Chmalts</Credits>
    </Container>
  );
};

export default Footer;
