import { em, transparentize } from 'polished';

import styled, { media } from 'sc';

import { Star as StarBase } from '../Images';

import LinkBase from '../Link';
import LogoBase from '../Logo';

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
  padding-bottom: ${em(16)};
  border-bottom: none;
  ${media.tablet`
  border-bottom: 1px solid ${(props: any) =>
    transparentize(0.8, props.theme.colors.black)};
`};
  ${media.desktop`
  margin: 0 ${em(32)};
`};
`;

const Star = StarBase.extend`
  display: none;
  width: 48px;
  height: 48px;
  background-repeat: no-repeat;
  ${media.tablet`
    display: inline-block;
  `};
`;

const Logo = LogoBase.extend`
  display: block;
  width: ${em(80)};
  ${media.tablet`
    display: none;
  `} ${media.desktop`
    width: ${em(72)};
    height: ${em(72)};
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
  align-self: center;
  cursor: pointer;
  ${media.tablet`
      display: inline-block;
  `};
`;

export { MenuLink, NavlinksWrapper, Logo, Star, Wrapper, Link };
