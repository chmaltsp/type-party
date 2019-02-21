import * as React from 'react';

import Input from '../../components/Input';
import MediaUpload from '../../components/MediaUpload';

import { ChildMutateProps, Mutation } from 'react-apollo';
import { ADD_WEBSITE } from './mutation';

import { Field, FieldProps, Formik, FormikProps } from 'formik';

import TagForm from '../../components/TagForm';
import { AddTag_addTag } from '../../components/TagForm/__generated__/AddTag';
import { AddTypeface_addTypeface } from '../AddTypeface/__generated__/AddTypeface';
import TypefaceForm from '../AddTypeface/Form';
import { AddWebsite_addWebsite, AddWebsiteVariables } from './__generated__/AddWebsite';
import { AddTypefaceButton, Form, LeftColumn, RightColumn, SubmitButton } from './styles';
import TagTypeahead from './TagTypeahead';
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
const handleUpload = (event: React.SyntheticEvent<HTMLInputElement>) => {
  console.log(event.currentTarget.files);
};

interface SiteFormState {
  showAddTypeface: boolean;
}

type Props = ChildMutateProps<FormikProps<InputValues>>;
class SiteForm extends React.PureComponent<Props, SiteFormState> {
  public state = {
    showAddTypeface: false,
  };

  private toggleTypefaceForm = () => {
    this.setState({
      showAddTypeface: !this.state.showAddTypeface,
    });
  }

  private handleAddTypeface = (typeface: AddTypeface_addTypeface) => {
    this.props.setFieldValue('typefaces', [...this.props.values.typefaces, typeface]);
  }

  private handleAddTag = (tag: AddTag_addTag) => {
    this.props.setFieldValue('tags', [...this.props.values.tags, tag]);
  }

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

const WrappedForm: React.SFC<{}> = () => {
  const handleSubmit = async (values: InputValues) => {
    console.log(values);
  };
  return (
    <Mutation<AddWebsite_addWebsite, AddWebsiteVariables> mutation={ADD_WEBSITE}>
      {(mutate, { data, loading }) => (
        <React.Fragment>
          <Formik
            initialValues={{
              full: null,
              slug: '',
              tags: [],
              thumbnail: null,
              title: '',
              typefaces: [],
              url: '',
            }}
            validationSchema={validationSchema}
            onSubmit={async (values: InputValues) => {
              console.log(values);
              const response = await mutate({
                variables: {
                  input: {
                    ...values,
                    tags: values.tags.map(tag => tag.id),
                    typefaces: values.typefaces.map(typeface => typeface.id),
                  },
                },
              });
              console.log(response);
            }}
            component={SiteForm}
          />
        </React.Fragment>
      )}
    </Mutation>
  );
};

interface Response {
  id: string;
}

// const WrappedFormWithMutation = graphql<{}, Response, InputValues>(UPLOAD_IMAGE, {})(
//   WrappedForm
// );

export default WrappedForm;
