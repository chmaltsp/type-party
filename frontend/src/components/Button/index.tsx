import styled, { css } from 'sc';

import { em } from 'polished';

interface ButtonProps {
  black?: boolean;
  rounded?: boolean;
}

const buttonCss = css<ButtonProps>`
  padding: ${({ theme }) => theme.spacing.sm}px ${({ theme }) => theme.spacing.md}px;
  border: 1px solid
    ${({ theme, black }) => (black ? theme.colors.white : theme.colors.black)};
  color: ${({ theme, black }) => (black ? theme.colors.white : theme.colors.black)};
  background-color: ${({ theme, black }) =>
    black ? theme.colors.black : theme.colors.white};
  border-radius: ${({ rounded }) => (rounded ? '50px' : '0px')};
  font-size: ${({ rounded }) => (rounded ? em(16) : em(18))};
  font-weight: 400;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
const Button = styled.button<ButtonProps>`
  ${buttonCss}
`;

export const ButtonA = styled.a<ButtonProps>`
  ${buttonCss}
  text-decoration: none;
`;

export default Button;
