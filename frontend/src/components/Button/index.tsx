import * as React from 'react';

import styled, { css } from 'sc';

import { em } from 'polished';
import { LoadingSpinner } from '../LoadingSpinner';

interface ButtonProps {
  black?: boolean;
  rounded?: boolean;
}

const buttonCss = css<ButtonProps>`
  position: relative;
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

const Spinner = styled(LoadingSpinner)`
  position: absolute;
  top: calc(50% - ${props => props.size && props.size / 2}em);
  left: calc(50% - ${props => props.size && props.size / 2}em);
`;
interface LoadingButtonProps extends ButtonProps {
  loading: boolean;
  type?: 'submit' | 'button' | 'reset';
  onClick?: () => void;
}
export const LoadingButton: React.FunctionComponent<LoadingButtonProps> = ({
  loading,
  type,
  ...props
}) => {
  return (
    <Button disabled={loading} type={type || 'button'} {...props}>
      {loading ? <Spinner white={props.black} size={2.3} /> : props.children}
    </Button>
  );
};

export default Button;
