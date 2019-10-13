import gql from 'graphql-tag';
import { TypefaceFragments } from '../../fragments/typeface';

export const ADD_TYPEFACE = gql`
  mutation AddTypeface($input: AddTypefaceInput) {
    addTypeface(input: $input) {
      name
      id
    }
  }
`;

export const UPDATE_TYPEFACE = gql`
  mutation UpdateTypeface($input: UpdateTypefaceInput) {
    updateTypeface(input: $input) {
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
