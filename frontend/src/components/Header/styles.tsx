import { em, transparentize } from 'polished';

import styled, { media } from 'sc';
import LinkBase from '../Link';
import LogoBase from '../Logo';

export const Link = styled(LinkBase)`
  font-size: ${em(18)};
  font-weight: 400;
  text-decoration: none;
  margin-right: ${({ theme }) => em(theme.spacing.md)};
`;

export const Wrapper = styled.div`
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

export const Star = styled.img`
  display: none;
  ${media.tablet`
    display: inline-block;
  `};
`;

export const Logo = LogoBase.extend`
  display: block;
  ${media.tablet`
    display: none;
  `} ${media.desktop`
    width: ${em(80)};
    height: ${em(80)};
  `};
`;

export const NavlinksWrapper = styled.div`
  flex: 1;
  text-align: right;
  ${media.tablet`
      display: none;
  `};
`;

export const MenuLink = styled.div`
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
