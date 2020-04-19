import * as React from 'react';

import { em } from 'polished';
import { ChildDataProps, graphql } from 'react-apollo';
import styled from 'sc';
import { CardProps } from '../../components/Card';
import { CardCarousel } from '../../components/CardCarousel';
import Flex from '../../components/Flex';
import LinkList from '../../components/LinkList';
import {
  KeepExploringQuery,
  KeepExploringQuery_websites,
} from './__generated__/KeepExploringQuery';
import { KEEP_EXPLORING } from './queries';

const H2 = styled.h3`
  font-weight: 600;
  font-size: ${em(32)};
  margin-top: ${({ theme }) => theme.baseSpacing * 12}px;
`;

export interface KeepExploringProps {
  cards: CardProps[];
  currentId: string;
}

export class KeepExploring extends React.PureComponent<
  ChildDataProps<KeepExploringProps, KeepExploringQuery>,
  any
> {
  public render() {
    const { cards } = this.props;

    return (
      <Flex flexDirection="column">
        <H2>Keep Exploring</H2>
        <CardCarousel cards={cards} />
      </Flex>
    );
  }
}

const selectCards = (websites: KeepExploringQuery_websites[]): CardProps[] => {
  return websites.map(website => ({
    imgUrl:
      (website.images &&
        website.images &&
        website.images.thumbnail &&
        website.images.thumbnail.url) ||
      '',
    secondary: (
      <span>
        Fonts —{' '}
        <LinkList
          hrefPrefix={'typeface'}
          links={
            (website.typefaces &&
              website.typefaces.map(font => ({
                name: font.name,
                slug: font.slug,
              }))) ||
            []
          }
        />
      </span>
    ),
    // secondary: website.typefaces && website.typefaces,
    slug: website.slug || '',
    title: website.title,
  }));
};

export default graphql<{ currentId: string }, KeepExploringQuery, { after: string }, any>(
  KEEP_EXPLORING,
  {
    options: props => ({
      variables: {
        after: props.currentId,
      },
    }),
    props: props => {
      return {
        cards: selectCards((props.data && props.data.websites) || []),
      };
    },
  }
)(KeepExploring);
