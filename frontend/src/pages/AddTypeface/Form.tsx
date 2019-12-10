import * as React from 'react';
import styled from 'sc';

import { Field, FieldProps, Form as FormBase, Formik, FormikProps } from 'formik';
import { ChildDataProps, compose, FetchResult, graphql } from 'react-apollo';
import ButtonBase from '../../components/Button';
import DesignerForm from '../../components/DesignerForm';
import Flex from '../../components/Flex';
import FoundryForm from '../../components/FoundryForm';
import Input from '../../components/Input';

import { AddDesigner_addDesigner } from '../../components/DesignerForm/__generated__/AddDesigner';
import { AddFoundry_addFoundry } from '../../components/FoundryForm/__generated__/AddFoundry';
import { AddTag_addTag } from '../../components/TagForm/__generated__/AddTag';
import { AddTypeface, AddTypefaceVariables } from './__generated__/AddTypeface';
import DesignerTypeahead from './DesignerTypeahead';
import FoundryTypeahead from './FoundryTypeahead';
import { ADD_TYPEFACE, UPDATE_TYPEFACE } from './mutation';

import MediaUpload from '../../components/MediaUpload';
import TagForm from '../../components/TagForm';
import TagTypeahead from '../../components/TagTypeahead';

import {
  EditTypeface,
  EditTypeface_typeface_images_full,
  EditTypefaceVariables,
} from './__generated__/EditTypeface';
import { UpdateTypeface, UpdateTypefaceVariables } from './__generated__/UpdateTypeface';
import { EDIT_TYPEFACE } from './queries';
import { validationSchema } from './validationSchema';

export interface TypefaceFormProps {
  handleSubmit?: (typeface: any) => void;
}

interface TypefaceFormState {
  showDesignerForm: boolean;
  showFoundryForm: boolean;
}

export interface InputValues {
  designers: AddDesigner_addDesigner[];
  foundries: AddFoundry_addFoundry[];
  downloadUrl: string;
  description: string;
  slug: string;
  name: string;
  tags: AddTag_addTag[];
  fullTypeface: File | null;
}

const Form = styled(FormBase)`
  max-width: 700px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ButtonWrapper = styled(Flex)`
  margin-top: ${({ theme }) => theme.spacing.md}px;
`;

const Publish = styled(ButtonBase)``;

interface ImageProps {
  full: EditTypeface_typeface_images_full | null;
}
interface AllProps extends ChildDataProps<WrappedFormProps, EditTypeface>, ImageProps {
  addTypeface: (data: AddTypefaceVariables) => Promise<void | FetchResult<AddTypeface>>;
  updateTypeface: (
    data: UpdateTypefaceVariables
  ) => Promise<void | FetchResult<UpdateTypeface>>;
  handleSubmit?: (typeface: any) => void;
}

class TypefaceForm extends React.PureComponent<AllProps, TypefaceFormState> {
  public state = {
    showDesignerForm: false,
    showFoundryForm: false,
  };

  private toggleDesignerForm = () => {
    this.setState({
      showDesignerForm: !this.state.showDesignerForm,
    });
  };

  private toggleFoundryForm = () => {
    this.setState({
      showFoundryForm: !this.state.showFoundryForm,
    });
  };
  public handleOnSubmit = async (values: InputValues) => {
    const cleanInput = {
      ...values,
      designers: values.designers.map(designer => designer.id),
      foundries: values.foundries.map(foundry => foundry.id),
      full: values.fullTypeface,
      tags: values.tags.map(tag => tag.id),
    };

    // Remove for compatibilty with nested form
    delete cleanInput.fullTypeface;
    try {
      const response = await this.props.addTypeface({
        input: cleanInput,
      });

      if (response && response.data && this.props.handleSubmit) {
        return this.props.handleSubmit(
          response.data[this.props.slug ? 'updateTypeface' : 'addTypeface']
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  private handleAddTag = (formProps: FormikProps<InputValues>) => (
    tag: AddTag_addTag
  ) => {
    formProps.setFieldValue('tags', [...formProps.values.tags, tag]);
  };

  public handleAddNewFoundry = (formProps: FormikProps<InputValues>) => (
    foundry: AddFoundry_addFoundry
  ) => {
    formProps.setFieldValue('foundries', [...formProps.values.foundries, foundry]);
    this.toggleFoundryForm();
  };

  public handleAddNewDesigner = (formProps: FormikProps<InputValues>) => (
    designer: AddDesigner_addDesigner
  ) => {
    const newDesigner = {
      ...designer,
      value: designer.name,
    };

    formProps.setFieldValue('designers', [...formProps.values.designers, newDesigner]);
    this.toggleDesignerForm();
  };

  public render() {
    console.log(this.props);

    const typeface = this.props.data && this.props.data.typeface;

    const full = typeface && typeface.images && typeface.images.full;
    return (
      <div>
        <Formik<InputValues>
          enableReinitialize={true}
          initialValues={{
            description: (typeface && typeface.description) || '',
            designers: (typeface && typeface.designers) || [],
            downloadUrl: (typeface && typeface.downloadUrl) || '',
            foundries: (typeface && typeface.foundries) || [],
            fullTypeface: null,
            name: (typeface && typeface.name) || '',
            slug: (typeface && typeface.slug) || '',
            tags: (typeface && typeface.tags) || [],
          }}
          validationSchema={validationSchema}
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
                  name="slug"
                  render={(fieldProps: FieldProps<InputValues>) => {
                    return (
                      <Input
                        label="Typeface Slug"
                        placeholder="typeface-slug"
                        {...fieldProps}
                      />
                    );
                  }}
                />
                <Field
                  name="fullTypeface"
                  render={(fieldProps: FieldProps<InputValues>) => {
                    return (
                      <MediaUpload
                        label="Large Typeface Asset"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                          const file =
                            event.currentTarget.files && event.currentTarget.files[0];
                          const { setFieldValue } = fieldProps.form;
                          setFieldValue('fullTypeface', file);
                        }}
                        previewUrl={(full && full.url) || undefined}
                        {...fieldProps}
                      />
                    );
                  }}
                />
                <TagTypeahead />
                <TagForm handleSubmit={this.handleAddTag(props)} />
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
      </div>
    );
  }
}

interface WrappedFormProps {
  slug: string;
}

const WrappedForm = compose(
  graphql<WrappedFormProps, AddTypeface, AddTypefaceVariables, any>(ADD_TYPEFACE, {
    props: ({ mutate }) => ({
      addTypeface: async (variables: AddTypefaceVariables) => {
        if (mutate) {
          return mutate({ variables });
        }
      },
    }),
  }),
  graphql<WrappedFormProps, EditTypeface, EditTypefaceVariables, any>(EDIT_TYPEFACE, {
    options: ({ slug }) => {
      return {
        variables: {
          slug,
        },
      };
    },
  }),
  graphql<WrappedFormProps, UpdateTypeface, UpdateTypefaceVariables, any>(
    UPDATE_TYPEFACE,
    {
      props: ({ mutate }) => ({
        updateTypeface: async (variables: UpdateTypefaceVariables) => {
          if (mutate) {
            return mutate({ variables });
          }
        },
      }),
    }
  )
)(TypefaceForm);

export default WrappedForm;
