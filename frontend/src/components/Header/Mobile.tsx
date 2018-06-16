import * as React from 'react';

import { em } from 'polished';
import styled, { media, withProps } from 'sc';

import LinkBase from '../Link';

const Link = LinkBase.extend`
  width: 100%;
  padding: ${em(16)} 0;
  text-align: center;
  text-decoration: none;
`;

import { links } from './';

const LinkWrapper = withProps<{ open: boolean }>()(styled.ul)`
  display: none;
  flex-direction: column;
  padding: 0;
  margin: 0;
  max-height: ${({ open }) => (open ? em(links.length * 50) : '0')};
  overflow: hidden;
  transition: max-height .2s linear;
  ${media.tablet`
    display: flex;
  `}
`;

export interface MobileNavProps {
  open: boolean;
}

const MobileNav: React.SFC<MobileNavProps> = ({ open }) => (
  <LinkWrapper open={open}>
    {links.map(({ to, text }) => {
      return (
        <Link key={to} to={to}>
          {text}
        </Link>
      );
    })}
  </LinkWrapper>
);

export default MobileNav;
