import { em } from 'polished';
import * as React from 'react';

import styled from 'sc';
import ButtonBase from '../Button';
import InputBase from '../Input';

import {
  Field,
  FieldProps,
  Form as Formbase,
  InjectedFormikProps,
  withFormik,
} from 'formik';

import Yup from 'yup';

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
`;

const Button = ButtonBase.extend`
  flex: 1;
  margin-left: ${({ theme }) => theme.spacing.md}px;
  max-width: 220px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  background-size: 200% 100%;
  background-image: linear-gradient(to right, black 50%, white 50%);
  transition: background-position 0.3s, color 0.3s;

  &:hover {
    background-position: -100% 0;
    color: ${({ theme }) => theme.colors.black};
    cursor: pointer;
  }
`;

const Input = styled(InputBase)<{ name: string }>`
  flex: 2;
  position: relative;
  font-size: ${em(20)};

  label {
    position: absolute;
    bottom: 0;
    transform: translate3d(0, 16px, 0);
  }
`;
export class EmailForm extends React.PureComponent<
  InjectedFormikProps<{}, InputValues>,
  any
> {
  public render() {
    return (
      <Form>
        <Field
          name="email"
          render={(props: FieldProps<InputValues>) => {
            return <Input placeholder="name@email.com" {...props} />;
          }}
        />
        <Button type="submit">Yay open source</Button>
      </Form>
    );
  }
}

export default withFormik<{}, InputValues>({
  handleSubmit: values => console.log(values),
  mapPropsToValues: () => ({
    email: '',
  }),
  validationSchema,
})(EmailForm);
