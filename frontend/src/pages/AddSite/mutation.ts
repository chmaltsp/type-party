import gql from 'graphql-tag';
import { WebsiteFragments } from '../../fragments/website';

export const UPLOAD_IMAGE = gql`
  mutation uploadImage($file: Upload!) {
    uploadImage(file: $file) {
      id
      url
      filename
    }
  }
`;

export const ADD_WEBSITE = gql`
  mutation AddWebsite($input: AddWebsiteInput!) {
    addWebsite(input: $input) {
      id
      url
      title
    }
  }
`;

export const UPDATE_WEBSITE = gql`
  mutation UpdateWebsite($input: UpdateWebsiteInput!) {
    updateWebsite(input: $input) {
      ...WebsiteInfo
      ...WebsiteTypefaces
      ...WebsiteImages
    }
  }
  ${WebsiteFragments.fragments.info}
  ${WebsiteFragments.fragments.typefaces}
  ${WebsiteFragments.fragments.images}
`;
