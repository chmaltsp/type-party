import * as React from 'react';

import { Field, FieldProps, Formik, FormikProps } from 'formik';

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
  designerName: string;
  designerUrl: string;
  foundry: string;
}
export default class DesignerForm extends React.PureComponent<DesignerFormProps, any> {
  public state = {
    showFoundryForm: false,
  };

  private toggleFoundryForm = () => {
    this.setState({
      showFoundryForm: !this.state.showFoundryForm,
    });
  }

  private handleOnSubmit = (values: any) => {
    console.log(values);
  }
  public render() {
    return (
      <Formik
        initialValues={{
          designerName: '',
          designerUrl: '',
          foundry: '',
        }}
        onSubmit={this.handleOnSubmit}
        render={(props: FormikProps<InputValues>) => {
          return (
            <div>
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
              <div>
                <Button rounded={true} type="button" onClick={this.toggleFoundryForm}>
                  + Add Foundry
                </Button>
              </div>
              {this.state.showFoundryForm && <Foundry />}
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
