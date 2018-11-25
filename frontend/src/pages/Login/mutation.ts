import { gql } from 'apollo-boost';

export default gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        name
        email
        id
      }
    }
  }
`;
