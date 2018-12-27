import gql from 'graphql-tag';

export const AUTH_STATUS = gql`
  query AuthStatus {
    auth @client {
      loggedIn
    }
  }
`;
