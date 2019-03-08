import gql from 'graphql-tag';

export const GET_TYPEFACES = gql`
  query GetTypefaces {
    typefaces {
      name
      slug
    }
  }
`;
