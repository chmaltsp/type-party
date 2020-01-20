import gql from 'graphql-tag';

export const SUBSCRIBE_TO_LIST = gql`
  mutation SubscribeToEmailList($email: String!) {
    subscribeToEmailList(email: $email) {
      status
    }
  }
`;
