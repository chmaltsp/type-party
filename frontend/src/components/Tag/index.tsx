import * as React from 'react';

import styled from 'sc';

import FlexBase from '../Flex';

import closeImg from './close-x.svg';

interface WhiteProps {
  white?: boolean;
  rounded?: boolean;
}
const Wrapper = styled<WhiteProps, any>(FlexBase)`
  background-color: ${({ theme, white }) =>
    white ? theme.colors.white : theme.colors.black};
  padding: ${({ theme }) => theme.spacing.xs}px
    ${({ theme, rounded }) => (rounded ? theme.spacing.sm : theme.spacing.xs)}px;
  border-radius: ${({ theme, rounded }) => (rounded ? '100px' : theme.borderRadius)};
  border: ${({ white, theme }) => (white ? `1px solid  ${theme.colors.black}` : 'none')};
`;

const Text = styled.span<WhiteProps>`
  color: ${({ theme, white }) => (white ? theme.colors.black : theme.colors.white)};
`;

const RemoveButton = styled.img`
  cursor: pointer;
`;

interface TagProps {
  removeButtonProps?: any;
  white?: boolean;
  rounded?: boolean;
  name: string;
}

const Tag: React.SFC<TagProps> = ({ name, removeButtonProps, white, rounded }) => {
  return (
    <Wrapper white={white} rounded={rounded}>
      <Text white={white}>{name}</Text>
      {removeButtonProps && <RemoveButton src={closeImg} {...removeButtonProps} />}
    </Wrapper>
  );
};

export default Tag;
