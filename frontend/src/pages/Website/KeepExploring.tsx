import * as React from 'react';

import { em } from 'polished';
import styled from 'sc';
import { CardCarousel } from '../../components/CardCarousel';
import Flex from '../../components/Flex';

const H2 = styled.h3`
  font-weight: 600;
  font-size: ${em(32)};
  margin-top: ${({ theme }) => theme.baseSpacing * 12}px;
`;

export interface KeepExploringProps {}

export default class KeepExploring extends React.PureComponent<KeepExploringProps, any> {
  public render() {
    return (
      <Flex flexDirection="column">
        <H2>Keep Exploring</H2>
        <CardCarousel cards={[]} />
      </Flex>
    );
  }
}
