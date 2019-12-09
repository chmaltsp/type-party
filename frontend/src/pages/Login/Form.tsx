import * as React from 'react';

import {
  Field,
  FieldProps,
  Form as FormBase,
  Formik,
  FormikActions,
  FormikProps,
} from 'formik';
import { ChildMutateProps, graphql, withApollo, WithApolloClient } from 'react-apollo';

import LOGIN_MUTATION from './mutation';

import styled from 'sc';
import ButtonBase from '../../components/Button';
import Input from '../../components/Input';

import { RouteComponentProps, withRouter } from 'react-router';
import { LoginMutation, LoginMutationVariables } from './__generated__/LoginMutation';
import validation from './validation';

import { AUTH_STATUS } from '../../components/ProtectedRoute/query';
import { setToken } from '../../utils/auth';

export interface LoginFormProps {
  mutate?: () => void;
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

class LoginForm extends React.PureComponent<
  ChildMutateProps<
    RouteComponentProps & WithApolloClient<{}>,
    LoginMutation,
    LoginMutationVariables
  >
> {
  private handleSubmit = async (
    values: LoginMutationVariables,
    actions: FormikActions<LoginMutationVariables>
  ) => {
    try {
      const response = await this.props.mutate({
        variables: values,
      });

      if (response && response.data) {
        setToken(response.data.login.token);

        this.props.client.writeData({
          data: {
            __typename: 'Auth',
            loggedIn: true,
          },
        });

        actions.setSubmitting(false);
        this.props.history.push('/');
      }
    } catch (error) {
      actions.setSubmitting(false);
      actions.setFieldError('password', 'Username and Password do not match');
      console.error(error);
    }
  };
  public render() {
    console.log(this.props);
    return (
      <Formik<LoginMutationVariables>
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={this.handleSubmit}
        validationSchema={validation}
        render={(props: FormikProps<LoginMutationVariables>) => {
          return (
            <Form>
              <Field
                name="email"
                render={(fieldProps: FieldProps<LoginMutationVariables>) => {
                  return <Input label="Email" {...fieldProps} />;
                }}
              />
              <Field
                name="password"
                render={(fieldProps: FieldProps<LoginMutationVariables>) => {
                  return <Input label="Password" {...fieldProps} type="password" />;
                }}
              />
              <Button black={true} disabled={props.isSubmitting} type="submit">
                Login
              </Button>
            </Form>
          );
        }}
      />
    );
  }
}

export default withApollo<any>(
  withRouter(
    graphql<any, LoginMutation, LoginMutationVariables>(LOGIN_MUTATION)(LoginForm)
  )
);
