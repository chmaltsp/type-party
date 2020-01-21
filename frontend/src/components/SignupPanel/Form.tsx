import { em } from 'polished';
import * as React from 'react';

import styled, { media } from 'sc';
import ButtonBase, { LoadingButton } from '../Button';
import InputBase from '../Input';

import {
  Field,
  FieldProps,
  Form as Formbase,
  Formik,
  FormikActions,
  FormikProps,
} from 'formik';
import { ChildMutateProps, compose, graphql } from 'react-apollo';

import * as Yup from 'yup';
import { LoadingSpinner } from '../LoadingSpinner';
import {
  SubscribeToEmailList,
  SubscribeToEmailList_subscribeToEmailList,
  SubscribeToEmailListVariables,
} from './__generated__/SubscribeToEmailList';
import { SUBSCRIBE_TO_LIST } from './mutation';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Please enter a valid email'),
});

// export interface EmailFormProps {}

export interface InputValues {
  email: string;
}
const Form = styled(Formbase)`
  display: flex;
  ${media.tablet`
    flex-direction: column;
  `};
`;

const Button = styled(LoadingButton)`
  flex: 1;
  margin-left: ${({ theme }) => theme.spacing.md}px;
  max-width: 220px;
  background-color: ${({ theme, loading }) => !loading && theme.colors.black};
  color: ${({ theme, loading }) => !loading && theme.colors.white};
  background-size: ${({ loading }) => (loading ? '100% 0' : '200% 100%')};
  background-image: linear-gradient(to right, black 50%, white 50%);
  transition: background-position 0.3s, color 0.3s;

  &:hover {
    background-position: -100% 0;
    color: ${({ theme, loading }) => !loading && theme.colors.black};
    cursor: pointer;
  }

  ${media.tablet`
    margin-top: 32px;
    width: 100%;
    max-width: 100%;
    margin-left: 0;
  `};
`;

const Input = styled(InputBase)`
  flex: 2;
  position: relative;
  font-size: ${em(20)};

  label {
    position: absolute;
    bottom: 0;
    transform: translate3d(0, 16px, 0);
  }
  ${media.tablet`
    width: 100%;
    max-width: 100%;
    margin-left: 0;
    flex: 1;
  `};

  margin-top: 0px;
`;

export const EmailForm: React.FunctionComponent<
  ChildMutateProps<{}, SubscribeToEmailList, SubscribeToEmailListVariables>
> = props => {
  const [success, setSuccess] = React.useState(false);
  const handleSubmit = async (
    values: InputValues,
    actions: FormikActions<InputValues>
  ) => {
    try {
      const response = await props.mutate({
        variables: {
          email: values.email,
        },
      });

      setSuccess(true);

      console.log(response);
      actions.setSubmitting(false);
    } catch (error) {
      console.log(error);

      actions.setFieldError('email', 'Looks like you already signed up!');
      actions.setSubmitting(false);
    }
  };
  return (
    <Formik<InputValues>
      onSubmit={handleSubmit}
      initialValues={{
        email: '',
      }}
      validationSchema={validationSchema}
    >
      {(formikProps: FormikProps<InputValues>) => (
        <Form>
          <>
            <Field
              name="email"
              render={(fieldProps: FieldProps<InputValues>) => {
                return <Input placeholder="name@email.com" {...fieldProps} />;
              }}
            />
            <Button type="submit" loading={formikProps.isSubmitting}>
              {success ? 'Thanks!' : 'Yay open source'}
            </Button>
          </>
        </Form>
      )}
    </Formik>
  );
};

export default compose(
  graphql<SubscribeToEmailListVariables, SubscribeToEmailList_subscribeToEmailList>(
    SUBSCRIBE_TO_LIST
  )
)(EmailForm);
