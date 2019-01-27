import * as React from 'react';

import { em } from 'polished';
import { ChildDataProps, graphql } from 'react-apollo';
import styled from 'sc';
import { CardProps } from 'src/components/Card';
import { CardCarousel } from '../../components/CardCarousel';
import Flex from '../../components/Flex';
import { KeepExploringQuery } from './__generated__/KeepExploringQuery';
import { KEEP_EXPLORING } from './queries';

const H2 = styled.h3`
  font-weight: 600;
  font-size: ${em(32)};
  margin-top: ${({ theme }) => theme.baseSpacing * 12}px;
`;

// export interface KeepExploringProps {}

export class KeepExploring extends React.PureComponent<
  ChildDataProps<{}, KeepExploringQuery>,
  any
> {
  public render() {
    console.log(this.props);

    const cards: CardProps[] =
      (this.props.data.websites &&
        this.props.data.websites.map(website => ({
          slug: website.slug || '',
          title: website.title,
        }))) ||
      [];

    return (
      <Flex flexDirection="column">
        <H2>Keep Exploring</H2>
        <CardCarousel
          cards={(this.props.data.websites && this.props.data.websites) || []}
        />
      </Flex>
    );
  }
}

export default graphql<{}, KeepExploringQuery, any, any>(KEEP_EXPLORING)(KeepExploring);
