import { em } from 'polished';
import * as React from 'react';
import styled from 'sc';
import LinkBase from '../Link';
import Logo from '../Logo';

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
    
`;

const NavlinksWrapper = styled.div`
    flex: 1;
    text-align: right;
`;

const Header: React.SFC<{}> = props => (
  <Wrapper>
    <Logo />
    <NavlinksWrapper>
      <Link to="/directory">Font Directory</Link>
      <Link to="/free-fonts">Sites using free fonts</Link>
      <Link to="/resources">Resources</Link>
      <Link to="/about">About</Link>
      <Link to="/twitter">@typeparty</Link>
    </NavlinksWrapper>
  </Wrapper>
);
export default Header;
