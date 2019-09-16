import gql from 'graphql-tag';

export const SEARCH_TAG = gql`
  query FindTag($search: String!) {
    findTags(search: $search) {
      name
      id
    }
  }
`;
