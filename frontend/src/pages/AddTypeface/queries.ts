import gql from 'graphql-tag';
import { TypefaceFragments } from '../../fragments/typeface';

export const SEARCH_DESIGNER = gql`
  query FindDesigner($search: String!) {
    findDesigners(search: $search) {
      name
      id
      url
    }
  }
`;

export const SEARCH_FOUNDRY = gql`
  query FindFoundry($search: String!) {
    findFoundries(search: $search) {
      name
      id
      url
    }
  }
`;

export const EDIT_TYPEFACE = gql`
  query EditTypeface($slug: String!) {
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
