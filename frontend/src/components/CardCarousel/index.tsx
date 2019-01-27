import * as React from 'react';
import Card, { CardProps } from '../Card';
import Flex from '../Flex';

export interface CardCarouselProps {
  cards: CardProps[];
}

export class CardCarousel extends React.PureComponent<CardCarouselProps, any> {
  public render() {
    const { cards } = this.props;
    return (
      <Flex>
        {cards.map(card => (
          <Card {...card} />
        ))}
      </Flex>
    );
  }
}
