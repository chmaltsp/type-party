import * as React from 'react';

import MobileNav from './Mobile';

import { Link, LinkA, Logo, MenuLink, NavlinksWrapper, Star, Wrapper } from './styles';

import { Link as RouterLink } from 'react-router-dom';

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
    to: '/',
  },
  {
    text: 'About',
    to: '/about',
  },
];

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
  };
  public render() {
    return (
      <React.Fragment>
        <Wrapper>
          <RouterLink to="/">
            <Logo />
          </RouterLink>
          <Star />
          <MenuLink onClick={this.handleMenuToggle}>Menu</MenuLink>
          <NavlinksWrapper>
            <>
              {links.map(({ to, text }) => (
                <Link key={to} to={to}>
                  {text}
                </Link>
              ))}
              <LinkA href="https://twitter.com/typeparty_" target="_blank">
                @typeparty
              </LinkA>
            </>
          </NavlinksWrapper>
        </Wrapper>
        <MobileNav open={this.state.mobileOpen} />
      </React.Fragment>
    );
  }
}

export default Header;
