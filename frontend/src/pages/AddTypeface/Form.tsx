import * as React from 'react';
import styled from 'sc';

import { Field, FieldProps, Form as FormBase, Formik, FormikProps } from 'formik';
import { ChildMutateProps, ChildProps, compose, graphql } from 'react-apollo';
import Autocomplete from '../../components/Autocomplete';
import ButtonBase from '../../components/Button';
import DesignerForm from '../../components/DesignerForm';
import Flex from '../../components/Flex';
import FoundryForm from '../../components/FoundryForm';
import Input from '../../components/Input';

import { AddDesigner_addDesigner } from 'src/components/DesignerForm/__generated__/AddDesigner';
import { addTypeface, addTypefaceVariables } from './__generated__/addTypeface';
import { FindDesigner, FindDesignerVariables } from './__generated__/FindDesigner';
import { ADD_TYPEFACE } from './mutation';
import { SEARCH_DESIGNER } from './queries';

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

type Props = ChildProps<{}, FindDesigner, FindDesignerVariables> &
  ChildMutateProps<{}, addTypeface, addTypefaceVariables>;

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

  public handleAddNewDesigner = (formProps: FormikProps<InputValues>) => (
    designer: AddDesigner_addDesigner
  ) => {
    console.log('NEW DESIGNER', designer);

    const newDesigner = {
      ...designer,
      value: designer.name,
    };

    formProps.setFieldValue('designers', [...formProps.values.designers, newDesigner]);
  }

  public handleSearch = async (search: string | null) => {
    if (this.props.data) {
      await this.props.data.refetch({
        search: search || '',
      });
    }
  }
  public render() {
    return (
      <Formik<InputValues>
        initialValues={{
          description: '',
          designers: [],
          downloadUrl: '',
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
              <Field
                name="designers"
                render={(fieldProps: FieldProps<InputValues>) => {
                  return (
                    <Autocomplete<{ name?: string; id: string; value: string }>
                      items={
                        (this.props.data &&
                          this.props.data.findDesigners &&
                          this.props.data.findDesigners.map(designer => ({
                            ...designer,
                            value: designer.name,
                          }))) ||
                        []
                      }
                      value={fieldProps.field.value}
                      label="Designer(s)"
                      handleSearch={this.handleSearch}
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
              {this.state.showDesignerForm && (
                <DesignerForm handleSubmit={this.handleAddNewDesigner(props)} />
              )}
              <Field
                name="foundries"
                render={(fieldProps: FieldProps<InputValues>) => {
                  return (
                    <Autocomplete<{ name?: string; value: string }>
                      items={[{ value: 'Google' }]}
                      value={fieldProps.field.value}
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

const WrappedForm = graphql<any, addTypeface, addTypefaceVariables>(ADD_TYPEFACE)(
  TypefaceForm
);

export default compose(
  graphql<any, addTypeface, addTypefaceVariables>(ADD_TYPEFACE),
  graphql<any, FindDesigner, FindDesignerVariables>(SEARCH_DESIGNER, {
    options: {
      variables: {
        search: '',
      },
    },
  })
)(WrappedForm);
