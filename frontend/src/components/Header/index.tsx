import { em } from 'polished';
import * as React from 'react';
import styled, { media } from 'sc';
import LinkBase from '../Link';
import LogoBase from '../Logo';

import MobileNav from './Mobile';

import star from './star.svg';

interface NavLink {
  to: string;
  text: string | React.ReactNode;
}
type NavLinks = NavLink[];

export const links: NavLinks = [
  {
    text: 'Font Directory',
    to: '/directory',
  },
  {
    text: 'Sites using free fonts',
    to: '/free-fonts',
  },
  {
    text: 'Resources',
    to: '/resources',
  },
  {
    text: 'About',
    to: '/about',
  },
  {
    text: <span>@typeparty</span>,
    to: '/twitter',
  },
];

const Link = styled(LinkBase)`
  font-size: ${em(18)};
  font-weight: 400;
  text-decoration: none;
  margin-right: ${({ theme }) => em(theme.spacing.md)};
`;

const Wrapper = styled.div`
  display: flex;
  margin: 0 ${em(136)};
  padding-top: ${em(48)};
  ${media.giant`
        margin: 0 ${em(32)};
    `};
`;

const Star = styled.img`
  display: none;
  ${media.tablet`
      display: inline-block;
    `};
`;

const Logo = LogoBase.extend`
  display: block;
  ${media.tablet`
      display: none;
    `} ${media.desktop`
      width: ${em(80)};
      height: ${em(80)};
    `};
`;

const NavlinksWrapper = styled.div`
  flex: 1;
  text-align: right;
  ${media.tablet`
        display: none;
    `};
`;

const MenuLink = styled.div`
  font-size: ${em(18)};
  font-weight: 400;
  margin-left: auto;
  display: none;
  ${media.tablet`
        display: inline-block;
    `};
`;

export interface HeaderState {
  mobileOpen: boolean;
}

class Header extends React.Component<{}, HeaderState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      mobileOpen: false,
    };
  }

  public handleMenuToggle = () => {
    if (this.state.mobileOpen) {
      this.setState({
        mobileOpen: false,
      });
    } else {
      this.setState({
        mobileOpen: true,
      });
    }
  }
  public render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Logo />
          <Star src={star} />
          <MenuLink onClick={this.handleMenuToggle}>Menu</MenuLink>
          <NavlinksWrapper>
            {links.map(({ to, text }) => (
              <Link key={to} to={to}>
                {text}
              </Link>
            ))}
          </NavlinksWrapper>
        </Wrapper>
        <MobileNav open={this.state.mobileOpen} />
      </React.Fragment>
    );
  }
}

export default Header;
