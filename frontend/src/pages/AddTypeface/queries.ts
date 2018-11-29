import { gql } from 'apollo-boost';

export const SEARCH_DESIGNER = gql`
  query FindDesigner($search: String!) {
    findDesigners(search: $search) {
      name
      id
      url
    }
  }
`;
