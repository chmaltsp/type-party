import * as React from 'react';

import ButtonBase from '../../components/Button';
import Flex from '../../components/Flex';
import Input from '../../components/Input';
import MediaUpload from '../../components/MediaUpload';

import styled from 'sc';
import * as Yup from 'yup';

import { ChildMutateProps, MutateProps, Mutation } from 'react-apollo';
import { ADD_WEBSITE, UPLOAD_IMAGE } from './mutation';

import {
  Field,
  FieldProps,
  Form as FormBase,
  Formik,
  FormikActions,
  FormikProps,
} from 'formik';

import { AddTypeface_addTypeface } from '../AddTypeface/__generated__/AddTypeface';
import TypefaceForm from '../AddTypeface/Form';
import { AddWebsite_addWebsite, AddWebsiteVariables } from './__generated__/AddWebsite';
import TypefaceTypeahead from './TypefaceTypeahead';

export interface InputValues {
  thumbnail: File | null;
  full: File | null;
  slug: string;
  title: string;
  url: string;
  typefaces: AddTypeface_addTypeface[];
}

export interface Typeface {
  value: string;
}
const LeftColumn = styled(Flex)`
  flex: 1;
  max-width: 469px;
  flex-direction: column;
`;

const AddTypefaceButton = styled(ButtonBase)`
  /* width: 200px; */
`;

const RightColumn = styled(Flex)`
  margin-left: ${({ theme }) => theme.baseSpacing * 13 + 'px'};
  max-width: 569px;
  flex-direction: column;
  flex: 1;
`;

const Form = styled(FormBase)`
  margin: ${props => props.theme.baseSpacing * 2}px auto;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background-color: transparent;
  border: 2px ${({ theme }) => theme.colors.black} solid;
  margin: ${({ theme }) => theme.baseSpacing * 2}px 0;
  border-radius: ${({ theme }) => theme.baseSpacing / 2}px;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  padding: ${({ theme }) => theme.baseSpacing}px ${({ theme }) => theme.baseSpacing * 2}px;
`;

const validationSchema = Yup.object().shape({
  full: Yup.mixed().required('Full size image is required'),
  slug: Yup.string()
    .required('Website Slug is required')
    .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Must be a valid slug eg.. my-slug'),
  thumbnail: Yup.mixed().required('Thumbnail is required'),
  title: Yup.string().required('Site name is required'),
  url: Yup.string()
    .required('Url field is required')
    .url('Must be a valid URL'),
});

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
              thumbnail: null,
              title: '',
              typefaces: [],
              url: '',
            }}
            validationSchema={validationSchema}
            onSubmit={async (values: InputValues) => {
              console.log(values);
              // const response = await mutate({
              //   variables: {
              //     input: {
              //       ...values,
              //     },
              //   },
              // });
              // console.log(response);
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
