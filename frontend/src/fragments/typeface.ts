import gql from 'graphql-tag';

export const TypefaceFragments = {
  fragments: {
    designers: gql`
      fragment TypefaceDesigners on Typeface {
        designers {
          id
          name
        }
      }
    `,
    foundries: gql`
      fragment TypefaceFoundries on Typeface {
        foundries {
          id
          name
        }
      }
    `,
    images: gql`
      fragment TypefaceImages on Typeface {
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
      fragment TypefaceInfo on Typeface {
        id
        slug
        name
        downloadUrl
        tags {
          id
          name
        }
      }
    `,
  },
};
