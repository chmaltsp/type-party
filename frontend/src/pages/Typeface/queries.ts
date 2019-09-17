import gql from 'graphql-tag';
import { TypefaceFragments } from '../../fragments/typeface';

export const GET_TYPEFACE = gql`
  query GetTypeface($slug: String!) {
    typeface(slug: $slug) {
      ...TypefaceInfo
      ...TypefaceImages
      ...TypefaceDesigners
      ...TypefaceFoundries
    }
  }
  ${TypefaceFragments.fragments.info}
  ${TypefaceFragments.fragments.designers}
  ${TypefaceFragments.fragments.foundries}
  ${TypefaceFragments.fragments.images}
`;
