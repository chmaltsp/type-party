import { gql } from 'apollo-boost';

export const ADD_DESIGNER = gql`
  mutation AddDesigner($input: DesignerCreateInput) {
    addDesigner(input: $input) {
      name
      url
      id
    }
  }
`;
