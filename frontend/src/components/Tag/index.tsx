import * as React from 'react';

import styled from 'sc';

import FlexBase from '../Flex';

import closeImg from './close-x.svg';

const Wrapper = styled(FlexBase)`
  background-color: ${({ theme }) => theme.colors.black};
  padding: ${({ theme }) => theme.spacing.xs}px;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const Text = styled.span`
  color: ${({ theme }) => theme.colors.white};
`;

const RemoveButton = styled.img`
  cursor: pointer;
`;

interface TagProps {
  removeButtonProps: any;
  name: string;
}

const Tag: React.SFC<TagProps> = ({ name, removeButtonProps }) => {
  return (
    <Wrapper>
      <Text>{name}</Text>
      <RemoveButton src={closeImg} {...removeButtonProps} />
    </Wrapper>
  );
};

export default Tag;
