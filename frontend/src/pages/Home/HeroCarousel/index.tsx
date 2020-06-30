import * as React from 'react';
import { ChildDataProps, graphql } from 'react-apollo';
import { GetFeaturedWebsites } from '../__generated__/GetFeaturedWebsites';
import { GET_FEATURED_WEBSITES } from '../queries';
import { selectCards } from '../Websites';

import leftArrow from './LeftArrow.svg';
import rightArrow from './RightArrow.svg';

import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  ButtonBack,
  ButtonNext,
  Card,
  DotGroup,
  LeftArrow,
  RightArrow,
  Wrapper,
} from './styles';

const HeroCarousel: React.FunctionComponent<
  ChildDataProps<{}, GetFeaturedWebsites>
> = props => {
  const websites = props.data && props.data.websites;

  if (!websites) {
    return null;
  }

  const cards = selectCards(websites);
  return (
    <Wrapper>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        visibleSlides={1}
        totalSlides={cards.length}
        infinite={true}
        isIntrinsicHeight={true}
        interval={5000}
        // isPlaying={true}
      >
        <Slider>
          {cards.map((card, idx) => (
            <Slide key={idx} index={idx}>
              <Card key={card.id} {...card} />
            </Slide>
          ))}
        </Slider>
        <ButtonBack>
          <LeftArrow src={leftArrow} />
        </ButtonBack>
        <ButtonNext>
          <RightArrow src={rightArrow} />
        </ButtonNext>
        <DotGroup />
      </CarouselProvider>
    </Wrapper>
  );
};

const WrappedCarousel = graphql<{}, GetFeaturedWebsites, any, any>(GET_FEATURED_WEBSITES)(
  HeroCarousel
);
export default WrappedCarousel;
