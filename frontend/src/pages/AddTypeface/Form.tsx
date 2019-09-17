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
import { AddTag_addTag } from '../../components/TagForm/__generated__/AddTag';
import {
  AddTypeface,
  AddTypeface_addTypeface,
  AddTypefaceVariables,
} from './__generated__/AddTypeface';
import DesignerTypeahead from './DesignerTypeahead';
import FoundryTypeahead from './FoundryTypeahead';
import { ADD_TYPEFACE } from './mutation';

import MediaUpload from '../../components/MediaUpload';
import TagForm from '../../components/TagForm';
import TagTypeahead from '../../components/TagTypeahead';
import { EDIT_WEBISTE } from '../AddSite/queries';
import {
  EditTypeface,
  EditTypeface_typeface_images_full,
  EditTypefaceVariables,
} from './__generated__/EditTypeface';
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
  full: File | null;
}

const Form = styled.div`
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
type Props = ChildMutateProps<TypefaceFormProps, AddTypeface, AddTypefaceVariables> &
  ImageProps;

class TypefaceForm extends React.PureComponent<Props, TypefaceFormState> {
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
    console.log(values);

    try {
      const response = await this.props.mutate({
        variables: {
          input: {
            ...values,
            designers: values.designers.map(designer => designer.id),
            foundries: values.foundries.map(foundry => foundry.id),
            tags: values.tags.map(tag => tag.id),
          },
        },
      });

      if (response && response.data && this.props.handleSubmit) {
        this.props.handleSubmit(response.data.addTypeface);
      }
    } catch (error) {
      console.log(error);
    }
    // this.props.handleSubmit();
  };

  private handleAddTag = (formProps: FormikProps<InputValues>) => (
    tag: AddTag_addTag
  ) => {
    console.log('in handleAddTag', tag);

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
    return (
      <div>
        <Formik<InputValues>
          initialValues={{
            description: '',
            designers: [],
            downloadUrl: '',
            foundries: [],
            full: null,
            name: '',
            slug: '',
            tags: [],
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
                  name="full"
                  render={(fieldProps: FieldProps<InputValues>) => {
                    return (
                      <MediaUpload
                        label="Large Asset"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                          const file =
                            event.currentTarget.files && event.currentTarget.files[0];
                          const { setFieldValue } = fieldProps.form;
                          setFieldValue('full', file);
                        }}
                        previewUrl={(this.props.full && this.props.full.url) || undefined}
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
  graphql<any, AddTypeface, AddTypefaceVariables>(ADD_TYPEFACE),
  graphql<WrappedFormProps, EditTypeface, EditTypefaceVariables, any>(EDIT_WEBISTE, {
    options: ({ slug }) => {
      return {
        variables: {
          slug,
        },
      };
    },
  })
)(TypefaceForm);

export default WrappedForm;
