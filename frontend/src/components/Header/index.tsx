import * as React from 'react';

import MobileNav from './Mobile';

import star from './star.svg';

import { Link, Logo, MenuLink, NavlinksWrapper, Star, Wrapper } from './styles';

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
