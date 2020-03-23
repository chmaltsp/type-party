import * as React from 'react';
import styled, { media } from 'sc';
import CardBase, { CardProps } from '../Card';
import FlexBase from '../Flex';

export interface CardCarouselProps {
  cards: CardProps[];
}

const Wrapper = styled(FlexBase)`
  flex-wrap: wrap;
  > div {
    width: 25%;
    /* margin-right: ${({ theme }) => theme.spacing.md}px; */
  }
  @media screen and (max-width: 1425px) {
    > div {
      margin-top: ${({ theme }: any) => theme.spacing.md}px;
      width: 50%;
    }
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
  padding-right: ${({ theme }) => theme.spacing.md}px;

  /* img {
    max-height: 172px;
    width: auto;
    height: auto;
    max-width: 321px;
  }
  @media screen and (max-width: 1425px) {
    img {
      max-height: 250px;
      width: auto;
      height: auto;
      max-width: 400px;
    }
  } */
`;

const CardWrapper = styled(FlexBase)``;
export class CardCarousel extends React.PureComponent<CardCarouselProps, any> {
  public render() {
    const { cards } = this.props;
    return (
      <Wrapper>
        {cards.map(card => (
          <CardWrapper key={card.title}>
            <Card {...card} />
          </CardWrapper>
        ))}
      </Wrapper>
    );
  }
}
