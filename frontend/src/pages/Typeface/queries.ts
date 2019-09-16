import gql from 'graphql-tag';

export const GET_TYPEFACE = gql`
  query GetTypeface($slug: String!) {
    typeface(slug: $slug) {
      name
      slug
      description
      downloadUrl
      tags {
        name
        id
      }
    }
  }
`;
