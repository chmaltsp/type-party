import * as React from 'react';

import { Field, FieldProps, Formik, FormikProps } from 'formik';

import Autocomplete from '../Autocomplete';
import Button from '../Button';
import Foundry from '../FoundryForm';
import Input from '../Input';

export interface DesignerFormProps {
  handleSumbit?: () => void;
}

export interface DesignerFormState {
  showFoundryForm: boolean;
}
interface InputValues {
  name: string;
  url: string;
  foundries: string[];
}
export default class DesignerForm extends React.PureComponent<DesignerFormProps, any> {
  private handleOnSubmit = (values: any) => {
    console.log(values);
  }
  public render() {
    return (
      <Formik
        initialValues={{
          foundries: [],
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
