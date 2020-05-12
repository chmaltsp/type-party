import * as React from 'react';
import { ChildDataProps, graphql } from 'react-apollo';
import {
  GetFeaturedWebsites,
  GetFeaturedWebsites_websites,
} from '../__generated__/GetFeaturedWebsites';
import { GET_FEATURED_WEBSITES } from '../queries';

const HeroCarousel: React.FunctionComponent<
  ChildDataProps<GetFeaturedWebsites>
> = props => {
  console.log(props);
  return <div>Carousel</div>;
};

const WrappedCarousel = graphql<{}, GetFeaturedWebsites, any, any>(GET_FEATURED_WEBSITES)(
  HeroCarousel
);
export default WrappedCarousel;
