import * as React from 'react';

import Flex from '../../components/Flex';
import Input from '../../components/Input';
import MediaUpload from '../../components/MediaUpload';

import styled from 'sc';
import * as Yup from 'yup';

import { MutateProps, Mutation } from 'react-apollo';
import { UPLOAD_IMAGE } from './mutation';

import { Field, FieldProps, Form as FormBase, Formik, FormikActions } from 'formik';

export interface InputValues {
  thumbnail: File | null;
}

const LeftColumn = styled(Flex)`
  flex: 1;
  max-width: 469px;
  flex-direction: column;
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
  border: 2px ${({ theme }) => theme.colors.white} solid;
  margin: ${({ theme }) => theme.baseSpacing * 2}px 0;
  border-radius: ${({ theme }) => theme.baseSpacing / 2}px;
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.baseSpacing}px ${({ theme }) => theme.baseSpacing * 2}px;
`;

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Site name is required'),
});

const handleUpload = (event: React.SyntheticEvent<HTMLInputElement>) => {
  console.log(event.currentTarget.files);
};
const SiteForm = () => {
  return (
    <Form>
      <LeftColumn>
        <Field
          name="large-image"
          render={(props: FieldProps<InputValues>) => {
            return (
              <MediaUpload
                label="Large Asset"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  const file = event.currentTarget.files && event.currentTarget.files[0];
                  const { setFieldValue } = props.form;
                  setFieldValue('large-image', file);
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
                  const file = event.currentTarget.files && event.currentTarget.files[0];
                  const { setFieldValue } = props.form;
                  setFieldValue('thumbnail', file);
                }}
                {...props}
              />
            );
          }}
        />
      </LeftColumn>
      <RightColumn>
        <Field
          name="name"
          render={(props: FieldProps<InputValues>) => {
            return <Input label="Site Name" {...props} />;
          }}
        />
        <Field
          name="websiteUrl"
          render={(props: FieldProps<InputValues>) => {
            return <Input label="Website Url" placeholder="http://" {...props} />;
          }}
        />
      </RightColumn>

      <SubmitButton>Publish</SubmitButton>
    </Form>
  );
};

const WrappedForm: React.SFC<{}> = () => {
  // const handleSubmit = async (values: InputValues) => {
  //   console.log(values);
  // };
  return (
    <Mutation mutation={UPLOAD_IMAGE}>
      {(mutate, { data, loading }) => (
        <React.Fragment>
          <Formik
            initialValues={{
              name: '',
              thumbnail: null,
            }}
            validationSchema={validationSchema}
            onSubmit={async ({ thumbnail }) => {
              const response = await mutate({
                variables: {
                  file: thumbnail,
                },
              });
              console.log(response);
            }}
            component={SiteForm}
          />
          {!loading && data && <img src={data.uploadImage.url} />}
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
