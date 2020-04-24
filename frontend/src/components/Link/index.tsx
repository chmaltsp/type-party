import { Link as LinkBase } from 'react-router-dom';
import styled, { css } from 'sc';

const linkCss = css`
  color: ${({ theme }) => theme.colors.black};
`;
export const Link = styled(LinkBase)`
  ${linkCss}
`;

export const LinkA = styled.a`
  ${linkCss}
`;

export default Link;
