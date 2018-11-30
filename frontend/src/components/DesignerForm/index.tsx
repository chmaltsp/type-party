import * as React from 'react';

import { Field, FieldProps, Formik, FormikActions, FormikProps } from 'formik';

import { ErrorResponse } from 'apollo-link-error';
import { ChildMutateProps, graphql } from 'react-apollo';
import Button from '../Button';
import Input from '../Input';
import { AddDesigner, AddDesignerVariables } from './__generated__/AddDesigner';
import { ADD_DESIGNER } from './mutation';

export interface DesignerFormProps {
  handleSumbit?: () => void;
}

export interface DesignerFormState {
  showFoundryForm: boolean;
}
interface InputValues {
  name: string;
  url: string;
}

export class DesignerForm extends React.PureComponent<
  ChildMutateProps<{}, AddDesigner, AddDesignerVariables>,
  any
> {
  private handleOnSubmit = async (
    values: InputValues,
    actions: FormikActions<InputValues>
  ) => {
    try {
      this.props.mutate({
        variables: {
          input: {
            ...values,
            addedBy: {},
          },
        },
      });
    } catch (error) {
      actions.setFieldError('name', error.graphQLErrors[0].message);
    }
  }
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
                  return <Input label="Designer Name" {...fieldProps} />;
                }}
              />
              <Field
                name="url"
                render={(fieldProps: FieldProps<InputValues>) => {
                  return <Input label="Designer Url" {...fieldProps} />;
                }}
              />
              <Button type="button" onClick={props.submitForm}>
                Submit Designer
              </Button>
            </div>
          );
        }}
      />
    );
  }
}

export default graphql<any, AddDesigner, AddDesignerVariables>(ADD_DESIGNER, {
  options: {
    errorPolicy: 'all',
  },
})(DesignerForm);
