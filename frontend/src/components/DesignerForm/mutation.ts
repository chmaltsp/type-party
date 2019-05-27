import gql from 'graphql-tag';

export const ADD_DESIGNER = gql`
  mutation AddDesigner($input: DesignerCreateInput) {
    addDesigner(input: $input) {
      name
      url
      id
    }
  }
`;
