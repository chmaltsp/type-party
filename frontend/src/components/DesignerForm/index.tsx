import * as React from 'react';

import { Field, FieldProps, Formik, FormikActions, FormikProps } from 'formik';

import { ChildMutateProps, graphql } from 'react-apollo';
import Button from '../Button';
import { ButtonContainer, Link } from '../FoundryForm';
import Input from '../Input';
import Text from '../Text';
import { AddDesigner, AddDesignerVariables } from './__generated__/AddDesigner';
import { ADD_DESIGNER } from './mutation';

export interface DesignerFormProps {
  handleSubmit: (designer: any) => void;
  onCancel: () => void;
}

export interface DesignerFormState {
  showFoundryForm: boolean;
}
interface InputValues {
  name: string;
  url: string;
}

export class DesignerForm extends React.PureComponent<
  ChildMutateProps<DesignerFormProps, AddDesigner, AddDesignerVariables>,
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
        this.props.handleSubmit(response.data.addDesigner);
      }
    } catch (error) {
      console.error(error);

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
                  return <Input label="Designer Name" {...fieldProps} />;
                }}
              />
              <Field
                name="url"
                render={(fieldProps: FieldProps<InputValues>) => {
                  return <Input label="Designer Url" {...fieldProps} />;
                }}
              />
              <ButtonContainer>
                <Button type="button" onClick={props.submitForm}>
                  Submit Designer
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

export default graphql<any, AddDesigner, AddDesignerVariables>(ADD_DESIGNER, {
  options: {
    // errorPolicy: ,
  },
})(DesignerForm);
