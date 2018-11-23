import * as React from 'react';

import { Field, FieldProps, Form, Formik, FormikProps } from 'formik';
import Input from '../../components/Input';

export interface TypefaceFormProps {}

export interface InputValues {
  name: string;
}

export default class TypefaceForm extends React.PureComponent<TypefaceFormProps, any> {
  public handleOnSubmit = (values: any) => {
    console.log(values);
  }
  public render() {
    return (
      <Formik<InputValues>
        initialValues={{
          name: '',
        }}
        onSubmit={this.handleOnSubmit}
        render={(props: FormikProps<InputValues>) => {
          return (
            <Form>
              <Field
                name="name"
                render={(fieldProps: FieldProps<InputValues>) => {
                  return <Input label="Typeface Name" {...fieldProps} />;
                }}
              />
              <Field
                name="url"
                render={(fieldProps: FieldProps<InputValues>) => {
                  return <Input label="Typeface Download Url" {...fieldProps} />;
                }}
              />
              <Field
                name="designerName"
                render={(fieldProps: FieldProps<InputValues>) => {
                  return <Input label="Designer Name" {...fieldProps} />;
                }}
              />
              <Field
                name="designerUrl"
                render={(fieldProps: FieldProps<InputValues>) => {
                  return <Input label="Designer Url" {...fieldProps} />;
                }}
              />
              <Field
                name="description"
                render={(fieldProps: FieldProps<InputValues>) => {
                  return <Input label="Description" {...fieldProps} />;
                }}
              />
            </Form>
          );
        }}
      />
    );
  }
}
