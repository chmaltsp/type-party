import * as React from 'react';

import { Field, FieldProps, Form as FormBase, Formik, FormikProps } from 'formik';

import styled from 'sc';
import ButtonBase from '../../components/Button';
import Input from '../../components/Input';

import validation from './validation';

export interface LoginFormProps {
  onSubmit?: () => void;
}

interface InputValues {
  email: string;
  password: string;
}

const Form = styled(FormBase)`
  display: flex;
  max-width: 400px;
  flex-direction: column;
  margin: ${({ theme }) => theme.spacing.xl}px auto;
`;

const Button = styled(ButtonBase)`
  margin-top: ${({ theme }) => theme.spacing.md}px;
`;

export default class LoginForm extends React.PureComponent<LoginFormProps, any> {
  private handleSubmit = (values: any) => {
    console.log(values);
  }
  public render() {
    return (
      <Formik<InputValues>
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={this.handleSubmit}
        validationSchema={validation}
        render={(props: FormikProps<InputValues>) => {
          return (
            <Form>
              <Field
                name="email"
                render={(fieldProps: FieldProps<InputValues>) => {
                  return <Input label="Email" {...fieldProps} />;
                }}
              />
              <Field
                name="password"
                render={(fieldProps: FieldProps<InputValues>) => {
                  return <Input label="Password" {...fieldProps} type="password" />;
                }}
              />
              <Button black={true} type="submit">
                Login
              </Button>
            </Form>
          );
        }}
      />
    );
  }
}
