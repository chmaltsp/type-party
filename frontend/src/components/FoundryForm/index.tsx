import * as React from 'react';

import { Field, FieldProps, Formik, FormikProps } from 'formik';

import Button from '../Button';
import Input from '../Input';

export interface FoundryProps {
  handleSubmit?: () => void;
}

interface InputValues {
  name: string;
  url: string;
}
export default class Foundry extends React.PureComponent<FoundryProps, any> {
  private handleOnSubmit = (values: InputValues) => {
    console.log('FOUNDRY FORM: ', values);
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
                  return <Input label="Foundry Name" {...fieldProps} />;
                }}
              />
              <Field
                name="url"
                render={(fieldProps: FieldProps<InputValues>) => {
                  return <Input label="Foundry Url" {...fieldProps} />;
                }}
              />
              <div>
                <Button black={true}>Submit Foundry</Button>
              </div>
            </div>
          );
        }}
      />
    );
  }
}
