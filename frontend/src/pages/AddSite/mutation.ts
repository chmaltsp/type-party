import gql from 'graphql-tag';

export const UPLOAD_IMAGE = gql`
  mutation uploadImage($file: Upload!) {
    uploadImage(file: $file) {
      id
      url
      filename
    }
  }
`;
