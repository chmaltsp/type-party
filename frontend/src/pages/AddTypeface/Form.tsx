import * as React from 'react';
import styled from 'sc';

import { Field, FieldProps, Form as FormBase, Formik, FormikProps } from 'formik';
import Autocomplete from '../../components/Autocomplete';
import ButtonBase from '../../components/Button';
import DesignerForm from '../../components/DesignerForm';
import Flex from '../../components/Flex';
import FoundryForm from '../../components/FoundryForm';
import Input from '../../components/Input';

export interface TypefaceFormProps {
  handleSubmit?: () => void;
}

interface TypefaceFormState {
  showDesignerForm: boolean;
  showFoundryForm: boolean;
}

export interface InputValues {
  typefaces: string[];
  url: string;
  description: string;
}

const Form = styled.div`
  max-width: 700px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ButtonWrapper = styled(Flex)`
  margin-top: ${({ theme }) => theme.spacing.md}px;
`;

const Publish = styled(ButtonBase)``;

export default class TypefaceForm extends React.PureComponent<
  TypefaceFormProps,
  TypefaceFormState
> {
  public state = {
    showDesignerForm: false,
    showFoundryForm: false,
  };

  private toggleDesignerForm = () => {
    this.setState({
      showDesignerForm: !this.state.showDesignerForm,
    });
  }

  private toggleFoundryForm = () => {
    this.setState({
      showFoundryForm: !this.state.showFoundryForm,
    });
  }
  public handleOnSubmit = (values: any) => {
    console.log(values);
    // this.props.handleSubmit();
  }
  public render() {
    return (
      <Formik<InputValues>
        initialValues={{
          description: '',
          typefaces: [],
          url: '',
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
                name="description"
                render={(fieldProps: FieldProps<InputValues>) => {
                  return <Input textarea={true} label="Description" {...fieldProps} />;
                }}
              />
              <Field
                name="designers"
                render={(fieldProps: FieldProps<InputValues>) => {
                  return (
                    <Autocomplete<{ name?: string; value: string }>
                      items={[{ value: 'jim' }]}
                      label="Designer(s)"
                      handleOnChange={selection =>
                        fieldProps.form.setFieldValue('designers', selection)
                      }
                      itemToString={item => (item && item.name) || ''}
                    />
                  );
                }}
              />
              {!this.state.showDesignerForm && (
                <div>
                  <ButtonBase rounded={true} onClick={this.toggleDesignerForm}>
                    + Add Designer
                  </ButtonBase>
                </div>
              )}
              {this.state.showDesignerForm && <DesignerForm />}
              <Field
                name="foundries"
                render={(fieldProps: FieldProps<InputValues>) => {
                  return (
                    <Autocomplete<{ name?: string; value: string }>
                      items={[{ value: 'Google' }]}
                      label="Foundries(s)"
                      handleOnChange={selection =>
                        fieldProps.form.setFieldValue('foundries', selection)
                      }
                      itemToString={item => (item && item.name) || ''}
                    />
                  );
                }}
              />
              {!this.state.showFoundryForm && (
                <div>
                  <ButtonBase
                    rounded={true}
                    type="button"
                    onClick={this.toggleFoundryForm}
                  >
                    + Add Foundry
                  </ButtonBase>
                </div>
              )}
              {this.state.showFoundryForm && (
                <FoundryForm onCancel={this.toggleFoundryForm} />
              )}
              <ButtonWrapper>
                <Publish type="button" black={true} onClick={props.submitForm}>
                  Submit Typeface
                </Publish>
              </ButtonWrapper>
            </Form>
          );
        }}
      />
    );
  }
}
