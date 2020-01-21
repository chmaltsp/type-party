import * as React from 'react';

import styled from 'sc';

import { Field, FieldProps, Formik, FormikActions, FormikProps } from 'formik';

import { responsePathAsArray } from 'graphql';
import { ChildMutateProps, graphql } from 'react-apollo';
import Button from '../Button';
import Flex from '../Flex';
import Input from '../Input';
import LinkBase from '../Link';
import {
  AddFoundry,
  AddFoundry_addFoundry,
  AddFoundryVariables,
} from './__generated__/AddFoundry';
import { ADD_FOUNDRY } from './mutation';

export interface FoundryProps {
  handleSubmit: (foundry: any) => void;
  onCancel: () => void;
}

export const Link = styled.a`
  padding-left: ${({ theme }) => theme.spacing.sm}px;
  text-decoration: underline;
  cursor: pointer;
`;

export const ButtonContainer = styled(Flex)`
  margin: ${({ theme }) => theme.spacing.sm} 0;
  align-items: center;
`;

interface InputValues {
  name: string;
  url: string;
}
export class Foundry extends React.PureComponent<
  ChildMutateProps<FoundryProps, AddFoundry, AddFoundryVariables>,
  any
> {
  private handleOnSubmit = async (
    values: InputValues,
    actions: FormikActions<InputValues>
  ) => {
    try {
      const response = await this.props.mutate({
        variables: {
          input: {
            ...values,
            addedBy: {},
          },
        },
      });

      if (response && response.data) {
        this.props.handleSubmit(response.data.addFoundry);
      }
    } catch (error) {
      if (error && error.graphQLErrors) {
        actions.setFieldError('name', error.graphQLErrors[0].message);
      }
    }
  };
  public render() {
    return (
      <Formik
        initialValues={{
          name: '',
          url: '',
        }}
        onSubmit={this.handleOnSubmit}
        render={(props: FormikProps<InputValues>) => {
          return (
            <div>
              <Field
                name="name"
                render={(fieldProps: FieldProps<InputValues>) => {
                  return <Input label="Foundry Name" {...fieldProps} />;
                }}
              />
              <Field
                name="url"
                render={(fieldProps: FieldProps<InputValues>) => {
                  return <Input label="Foundry Url" {...fieldProps} />;
                }}
              />
              <ButtonContainer>
                <Button black={true} onClick={props.submitForm}>
                  Submit Foundry
                </Button>
                <Link onClick={this.props.onCancel}>Cancel</Link>
              </ButtonContainer>
            </div>
          );
        }}
      />
    );
  }
}

const WrappedForm = graphql<any, AddFoundry, AddFoundryVariables>(ADD_FOUNDRY)(Foundry);

export default WrappedForm;
