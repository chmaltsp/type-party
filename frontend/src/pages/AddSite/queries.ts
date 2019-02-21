import { gql } from 'apollo-boost';

export const SEARCH_TYPEFACE = gql`
  query FindTypeface($search: String!) {
    findTypefaces(search: $search) {
      name
      id
      downloadUrl
    }
  }
`;

export const SEARCH_TAG = gql`
  query FindTag($search: String!) {
    findTags(search: $search) {
      name
      id
    }
  }
`;
