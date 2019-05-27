import gql from 'graphql-tag';

export const WebsitesFragments = {
  fragments: {
    card: gql`
      fragment WebsiteCard on Website {
        title
        url
        id
        slug
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
    `,
  },
};

export const GET_WEBSITES = gql`
  query GetWebsites {
    websites {
      ...WebsiteCard
    }
  }
  ${WebsitesFragments.fragments.card}
`;
