import gql from 'graphql-tag';

export const GET_WEBSITE = gql`
  query GetWebsite($slug: String!) {
    website(slug: $slug) {
      slug
      title
      url
      createdAt
      id
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
      tags {
        name
        id
      }
    }
    auth @client {
      loggedIn
    }
  }
`;

export const KEEP_EXPLORING = gql`
  query KeepExploringQuery($after: String) {
    websites(input: { first: 4, after: $after, randomize: true }) {
      title
      slug
      url
      images {
        thumbnail {
          createdAt
          url
        }
      }
      typefaces {
        slug
        name
      }
    }
  }
`;
