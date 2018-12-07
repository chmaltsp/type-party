import { gql } from 'apollo-boost';

export const ADD_FOUNDRY = gql`
  mutation AddFoundry($input: FoundryCreateInput) {
    addFoundry(input: $input) {
      name
      id
      url
    }
  }
`;
