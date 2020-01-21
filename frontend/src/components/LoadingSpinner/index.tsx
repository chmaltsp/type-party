import * as React from 'react';

import styled, { keyframes } from 'sc';

interface SpinnerProps {
  size?: number;
  white?: boolean;
}
const loadAnimation = keyframes`
    0% {
    transform: rotate(0deg);
    }
    100% {
    transform: rotate(360deg);
    }
`;
export const LoadingSpinner = styled.span<SpinnerProps>`
  display: inline-block;
  font-size: 10px;
  text-indent: -9999em;
  width: ${props => props.size || 4}em;
  height: ${props => props.size || 4}em;
  border-radius: 50%;
  background: ${props =>
    props.white ? props.theme.colors.white : props.theme.colors.black};
  background: linear-gradient(
    to right,
    ${props => (props.white ? props.theme.colors.white : props.theme.colors.black)} 10%,
    rgba(255, 255, 255, 0) 42%
  );
  position: relative;
  -webkit-animation: ${loadAnimation} 1.4s infinite linear;
  animation: ${loadAnimation} 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  &:before {
    width: 50%;
    height: 50%;
    background: ${props =>
      props.white ? props.theme.colors.white : props.theme.colors.black};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }

  &:after {
    background: ${props =>
      props.white ? props.theme.colors.black : props.theme.colors.white};
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;
