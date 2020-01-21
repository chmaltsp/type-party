import * as React from 'react';
import styled, { media } from 'sc';
import CardBase, { CardProps } from '../Card';
import FlexBase from '../Flex';

export interface CardCarouselProps {
  cards: CardProps[];
}

const Wrapper = styled(FlexBase)`
  > div {
    width: 31%;
    padding-right: ${({ theme }) => theme.spacing.md}px;
  }
  ${media.tablet`
    flex-direction: column;
    > div {
      margin-top: ${({ theme }: any) => theme.spacing.md}px;
      width: 100%;
    }
  `}
`;

const Card = styled(CardBase)`
  img {
    height: 271px;
  }
`;
export class CardCarousel extends React.PureComponent<CardCarouselProps, any> {
  public render() {
    const { cards } = this.props;
    return (
      <Wrapper>
        {cards.map(card => (
          <Card key={card.title} {...card} />
        ))}
      </Wrapper>
    );
  }
}
