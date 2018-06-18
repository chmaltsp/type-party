import * as React from 'react';

import styled from 'sc';
import ButtonBase from '../Button';
import Input from '../Input';

import { Field, FieldProps, Form as Formbase } from 'formik';

// export interface EmailFormProps {}

export interface InputValues {
  email: string;
}
const Form = styled(Formbase)`
  display: flex;
`;

const Button = ButtonBase.extend``;

export default class EmailForm extends React.PureComponent<{}, any> {
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
