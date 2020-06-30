import { em } from 'polished';
import {
  ButtonBack as ButtonBackBase,
  ButtonNext as ButtonNextBase,
  DotGroup as DotGroupBase,
} from 'pure-react-carousel';
import { css, media } from 'sc';
import styled from 'styled-components';
import CardBase from '../../../components/Card';
export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`;
export const LeftArrow = styled.img``;
export const RightArrow = styled.img``;
const buttonNormal = css`
  top: 40%;
  position: absolute;
  border: 0;
  background: 0;
  &:focus {
    outline: none;
  }
  ${media.tablet`
     display: none;
  `}
`;
export const ButtonBack = styled(ButtonBackBase)`
  ${buttonNormal}
  left: 50px;
  @media screen and (max-width: 1248px) {
    left: 25px;
  }
`;
export const ButtonNext = styled(ButtonNextBase)`
  ${buttonNormal}
  right: 50px;
  @media screen and (max-width: 1248px) {
    right: 25px;
  }
`;
export const DotGroup = styled(DotGroupBase)`
  margin: 0 auto;
  text-align: center;
  padding-top: 32px;
  > button {
    margin-right: 8px;
    border: 1px #000 solid;
    border-radius: 50%;
    background: 0;
    width: 16px;
    height: 16px;
    &:focus {
      outline: none;
    }
    &.carousel__dot--selected {
      background: #000;
    }
  }
`;
export const Card = styled(CardBase)`
  ${media.desktop`
      max-width: ${em(600)};
  `}
 
  @media screen and (max-width: 1248px) {
    max-width: ${em(850)};
    padding: 0 ${em(100)};
  }
  ${media.tablet`
      max-width: ${em(500)};
      padding: 0 ${em(32)};
  `}
  max-width: ${em(976)};
  margin: 0 auto;
`;
