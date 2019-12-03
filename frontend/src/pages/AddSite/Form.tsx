import * as React from 'react';

import Input from '../../components/Input';
import MediaUpload from '../../components/MediaUpload';

import { ChildDataProps, compose, graphql } from 'react-apollo';
import { ADD_WEBSITE, UPDATE_WEBSITE } from './mutation';

import { Field, FieldProps, Formik, FormikProps } from 'formik';

import TagForm from '../../components/TagForm';
import { AddTag_addTag } from '../../components/TagForm/__generated__/AddTag';
import TagTypeahead from '../../components/TagTypeahead';
import { AddTypeface_addTypeface } from '../AddTypeface/__generated__/AddTypeface';
import TypefaceForm from '../AddTypeface/Form';
import {
  AddWebsite,
  AddWebsite_addWebsite,
  AddWebsiteVariables,
} from './__generated__/AddWebsite';
import {
  EditWebsite,
  EditWebsite_website_images_full,
  EditWebsite_website_images_thumbnail,
  EditWebsiteVariables,
} from './__generated__/EditWebsite';
import {
  UpdateWebsite,
  UpdateWebsite_updateWebsite,
  UpdateWebsiteVariables,
} from './__generated__/UpdateWebsite';
import { EDIT_WEBISTE } from './queries';
import { AddTypefaceButton, Form, LeftColumn, RightColumn, SubmitButton } from './styles';
import TypefaceTypeahead from './TypefaceTypeahead';
import { validationSchema } from './validationSchema';

export interface InputValues {
  thumbnail: File | null;
  full: File | null;
  slug: string;
  title: string;
  url: string;
  typefaces: AddTypeface_addTypeface[];
  tags: AddTag_addTag[];
}

export interface Typeface {
  value: string;
}

interface SiteFormState {
  showAddTypeface: boolean;
}

type Props = FormikProps<InputValues> & ImageProps;
class SiteForm extends React.PureComponent<Props, SiteFormState> {
  public state = {
    showAddTypeface: false,
  };

  private toggleTypefaceForm = () => {
    this.setState({
      showAddTypeface: !this.state.showAddTypeface,
    });
  };

  private handleAddTypeface = (typeface: AddTypeface_addTypeface) => {
    console.log(typeface);
    this.props.setFieldValue('typefaces', [...this.props.values.typefaces, typeface]);
  };

  private handleAddTag = (tag: AddTag_addTag) => {
    this.props.setFieldValue('tags', [...this.props.values.tags, tag]);
  };

  public render() {
    return (
      <Form>
        <LeftColumn>
          <Field
            name="full"
            render={(props: FieldProps<InputValues>) => {
              return (
                <MediaUpload
                  label="Large Asset"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const file =
                      event.currentTarget.files && event.currentTarget.files[0];
                    const { setFieldValue } = props.form;
                    setFieldValue('full', file);
                  }}
                  previewUrl={(this.props.full && this.props.full.url) || undefined}
                  {...props}
                />
              );
            }}
          />
          <Field
            name="thumbnail"
            render={(props: FieldProps<InputValues>) => {
              return (
                <MediaUpload
                  label="Thumbnail"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const file =
                      event.currentTarget.files && event.currentTarget.files[0];
                    this.props.setFieldValue('thumbnail', file);
                  }}
                  previewUrl={
                    (this.props.thumbnail && this.props.thumbnail.url) || undefined
                  }
                  {...props}
                />
              );
            }}
          />
        </LeftColumn>
        <RightColumn>
          <Field
            name="title"
            render={(props: FieldProps<AddWebsiteVariables>) => {
              return <Input label="Site Name" {...props} />;
            }}
          />
          <Field
            name="url"
            render={(props: FieldProps<AddWebsiteVariables>) => {
              return <Input label="Website Url" placeholder="http://" {...props} />;
            }}
          />
          <Field
            name="slug"
            render={(props: FieldProps<AddWebsiteVariables>) => {
              return <Input label="Website Slug" placeholder="website-slug" {...props} />;
            }}
          />
          <TagTypeahead />
          <TagForm handleSubmit={this.handleAddTag} />
          <TypefaceTypeahead />
          {!this.state.showAddTypeface && (
            <div>
              <AddTypefaceButton rounded={true} onClick={this.toggleTypefaceForm}>
                + Add New Typeface
              </AddTypefaceButton>
            </div>
          )}
          {this.state.showAddTypeface && (
            <TypefaceForm handleSubmit={this.handleAddTypeface} />
          )}
          <SubmitButton onSubmit={this.props.submitForm}>Publish Website</SubmitButton>
        </RightColumn>
      </Form>
    );
  }
}

interface ImageProps {
  full: EditWebsite_website_images_full | null;
  thumbnail: EditWebsite_website_images_thumbnail | null;
}

interface AllProps extends ChildDataProps<WrappedFormProps, EditWebsite> {
  updateWebsite: (data: UpdateWebsiteVariables) => UpdateWebsite_updateWebsite;
  addWebsite: (data: AddWebsiteVariables) => AddWebsite_addWebsite;
}

const WrappedForm: React.SFC<AllProps> = props => {
  const website = props.data && props.data.website;
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        full: null,
        slug: (website && website.slug) || '',
        tags: (website && website.tags) || [],
        thumbnail: null,
        title: (website && website.title) || '',
        typefaces: (website && website.typefaces) || [],
        url: (website && website.url) || '',
      }}
      validationSchema={validationSchema(!!props.slug)}
      onSubmit={async (values: InputValues) => {
        const response = await props[props.slug ? 'updateWebsite' : 'addWebsite']({
          input: {
            ...values,
            tags: values.tags.map(tag => tag.id),
            typefaces: values.typefaces.map(typeface => typeface.id),
          },
        });
      }}
    >
      {(formikProps: FormikProps<InputValues>) => (
        <SiteForm
          {...formikProps}
          full={(website && website.images && website.images.full) || null}
          thumbnail={(website && website.images && website.images.thumbnail) || null}
        />
      )}
    </Formik>
  );
};

interface WrappedFormProps {
  slug: string;
}

const ComposedWrappedForm = compose(
  graphql<WrappedFormProps, UpdateWebsite, UpdateWebsiteVariables, any>(UPDATE_WEBSITE, {
    props: ({ mutate }) => ({
      updateWebsite: async (variables: UpdateWebsiteVariables) => {
        if (mutate) {
          return mutate({ variables });
        }
      },
    }),
  }),
  graphql<WrappedFormProps, AddWebsite, AddWebsiteVariables, any>(ADD_WEBSITE, {
    props: ({ mutate }) => ({
      addWebsite: async (variables: AddWebsiteVariables) => {
        if (mutate) {
          return mutate({ variables });
        }
      },
    }),
  }),
  graphql<WrappedFormProps, EditWebsite, EditWebsiteVariables, any>(EDIT_WEBISTE, {
    options: ({ slug }) => {
      return {
        variables: {
          slug,
        },
      };
    },
  })
)(WrappedForm);

export default ComposedWrappedForm;
