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
