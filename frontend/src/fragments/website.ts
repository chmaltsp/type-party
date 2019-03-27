import gql from 'graphql-tag';

export const WebsiteFragments = {
  fragments: {
    images: gql`
      fragment WebsiteImages on Website {
        images {
          full {
            url
            id
            filename
          }
          thumbnail {
            url
            id
            filename
          }
        }
      }
    `,
    info: gql`
      fragment WebsiteInfo on Website {
        id
        slug
        title
        isPublished
        url
        tags {
          id
          name
        }
      }
    `,
    typefaces: gql`
      fragment WebsiteTypefaces on Website {
        typefaces {
          id
          name
          slug
        }
      }
    `,
  },
};
