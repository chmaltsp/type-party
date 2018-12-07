import * as React from 'react';
import styled from 'sc';

import { Field, FieldProps, Form as FormBase, Formik, FormikProps } from 'formik';
import { ChildMutateProps, compose, graphql } from 'react-apollo';
import ButtonBase from '../../components/Button';
import DesignerForm from '../../components/DesignerForm';
import Flex from '../../components/Flex';
import FoundryForm from '../../components/FoundryForm';
import Input from '../../components/Input';

import { AddDesigner_addDesigner } from 'src/components/DesignerForm/__generated__/AddDesigner';
import { AddFoundry_addFoundry } from 'src/components/FoundryForm/__generated__/AddFoundry';
import { AddTypeface, AddTypefaceVariables } from './__generated__/AddTypeface';
import DesignerTypeahead from './DesignerTypeahead';
import FoundryTypeahead from './FoundryTypeahead';
import { ADD_TYPEFACE } from './mutation';

export interface TypefaceFormProps {
  handleSubmit?: () => void;
}

interface TypefaceFormState {
  showDesignerForm: boolean;
  showFoundryForm: boolean;
}

interface Designer {
  name: string;
  id: string;
  value: string;
}
export interface InputValues {
  designers: AddDesigner_addDesigner[];
  foundries: AddFoundry_addFoundry[];
  downloadUrl: string;
  description: string;
  slug: string;
  name: string;
}

const Form = styled.div`
  max-width: 700px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ButtonWrapper = styled(Flex)`
  margin-top: ${({ theme }) => theme.spacing.md}px;
`;

const Publish = styled(ButtonBase)``;

type Props = ChildMutateProps<{}, AddTypeface, AddTypefaceVariables>;

class TypefaceForm extends React.PureComponent<Props, TypefaceFormState> {
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
  public handleOnSubmit = async (values: InputValues) => {
    console.log(values);

    try {
      const response = await this.props.mutate({
        variables: {
          input: {
            ...values,
            addedBy: {},
            designers: {
              connect: values.designers.map(designer => ({
                id: designer.id,
              })),
            },
          },
        },
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
    // this.props.handleSubmit();
  }

  public handleAddNewFoundry = (formProps: FormikProps<InputValues>) => (
    foundry: AddFoundry_addFoundry
  ) => {
    formProps.setFieldValue('foundries', [...formProps.values.foundries, foundry]);
    this.toggleFoundryForm();
  }

  public handleAddNewDesigner = (formProps: FormikProps<InputValues>) => (
    designer: AddDesigner_addDesigner
  ) => {
    const newDesigner = {
      ...designer,
      value: designer.name,
    };

    formProps.setFieldValue('designers', [...formProps.values.designers, newDesigner]);
    this.toggleDesignerForm();
  }

  public render() {
    console.log(this.props);
    return (
      <Formik<InputValues>
        initialValues={{
          description: '',
          designers: [],
          downloadUrl: '',
          foundries: [],
          name: '',
          slug: '',
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
                name="downloadUrl"
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
              <DesignerTypeahead />
              {!this.state.showDesignerForm && (
                <div>
                  <ButtonBase rounded={true} onClick={this.toggleDesignerForm}>
                    + Add Designer
                  </ButtonBase>
                </div>
              )}
              {this.state.showDesignerForm && (
                <DesignerForm handleSubmit={this.handleAddNewDesigner(props)} />
              )}
              <FoundryTypeahead />
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
                <FoundryForm
                  handleSubmit={this.handleAddNewFoundry(props)}
                  onCancel={this.toggleFoundryForm}
                />
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

const WrappedForm = graphql<any, AddTypeface, AddTypefaceVariables>(ADD_TYPEFACE)(
  TypefaceForm
);

export default compose(graphql<any, AddTypeface, AddTypefaceVariables>(ADD_TYPEFACE))(
  WrappedForm
);
