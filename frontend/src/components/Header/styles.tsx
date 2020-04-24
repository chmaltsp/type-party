import { em, transparentize } from 'polished';

import styled, { css, media } from 'sc';

import { Star as StarBase } from '../Images';

import LinkBase from '../Link';
import LogoBase from '../Logo';

const linkCss = css`
  font-size: ${em(18)};
  font-weight: 400;
  text-decoration: none;
  margin-right: ${({ theme }) => em(theme.spacing.md)};
  color: ${({ theme }) => theme.colors.black};
`;

const LinkA = styled.a`
  ${linkCss}
`;
const Link = styled(LinkBase)`
  ${linkCss}
`;

const Wrapper = styled.div`
  display: flex;
  margin: 0 ${em(136)};
  padding-top: ${em(48)};
  padding-bottom: ${em(16)};
  border-bottom: none;
  ${media.desktop`
    margin: 0;
    padding: ${({ theme }: any) => theme.spacing.sm}px;
`};
  ${media.tablet`
    padding:${({ theme }: any) => theme.spacing.sm}px ${({ theme }: any) =>
    theme.spacing.md}px;
`};
`;

const Line = styled.hr`
  display: none;
  width: 100%;
  height: 1px;

  color: ${(props: any) => transparentize(0.8, props.theme.colors.black)};

  ${media.tablet`
   margin: 0 auto;
   display: block;
   width: calc(100% - 48px);

  `};
`;

const TwitterLogo = styled.img`
  vertical-align: middle;
`;
const Star = styled(StarBase)`
  display: none;
  width: 48px;
  height: 48px;
  background-repeat: no-repeat;
  ${media.tablet`
    display: inline-block;
  `};
`;

const Logo = styled(LogoBase)`
  display: block;
  width: ${em(160)};
  ${media.tablet`
    display: none;
  `}
  ${media.desktop`
    width: ${em(150)};
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

export { MenuLink, NavlinksWrapper, Logo, Star, Wrapper, Link, Line, LinkA, TwitterLogo };
