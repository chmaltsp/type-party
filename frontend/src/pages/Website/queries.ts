import gql from 'graphql-tag';

export const GET_WEBSITE = gql`
  query GetWebsite($slug: String!) {
    website(slug: $slug) {
      slug
      title
      url
      createdAt
      typefaces {
        name
        slug
      }
      images {
        full {
          createdAt
          url
        }
      }
    }
  }
`;
