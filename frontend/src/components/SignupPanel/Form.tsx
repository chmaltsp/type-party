import * as React from 'react';

import styled from 'sc';
import ButtonBase from '../Button';
import Input from '../Input';

import {
  Field,
  FieldProps,
  Form as Formbase,
  InjectedFormikProps,
  withFormik,
} from 'formik';

// export interface EmailFormProps {}

export interface InputValues {
  email: string;
}
const Form = styled(Formbase)`
  display: flex;
`;

const Button = ButtonBase.extend`
  flex: 0;
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
})(EmailForm);
