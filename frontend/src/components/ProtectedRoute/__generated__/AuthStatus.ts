/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AuthStatus
// ====================================================

export interface AuthStatus_auth {
  __typename: 'Auth';
  loggedIn: boolean;
}

export interface AuthStatus {
  auth: AuthStatus_auth | null;
}
