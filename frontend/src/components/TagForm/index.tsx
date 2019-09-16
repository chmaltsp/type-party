import { Field, FieldProps, Formik, FormikActions, FormikProps } from 'formik';
import * as React from 'react';
import { ChildMutateProps, graphql } from 'react-apollo';
import styled from 'sc';
import Button from '../Button';
import Flex from '../Flex';
import Input from '../Input';
import { AddTag, AddTagVariables } from './__generated__/AddTag';
import { ADD_TAG } from './mutation';

import * as Yup from 'yup';

export interface TagFormProps {
  handleSubmit: (tag: any) => void;
}

interface InputValues {
  name: string;
}

const Wrapper = styled(Flex)`
  flex-grow: 1;
`;
const ButtonWrapper = styled(Flex)`
  position: relative;
  height: max-content;
  align-self: flex-end;
  top: -15px;
  padding-left: ${({ theme }) => theme.spacing.md}px;
`;

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Tag name is required'),
});
export class TagForm extends React.PureComponent<
  ChildMutateProps<TagFormProps, AddTag, AddTagVariables>,
  any
> {
  private handleOnSubmit = async (
    values: InputValues,
    actions: FormikActions<InputValues>
  ) => {
    try {
      const response = await this.props.mutate({
        variables: {
          input: {
            ...values,
          },
        },
      });

      if (response && response.data) {
        console.log(response.data);
        console.log(this.props.handleSubmit);
        this.props.handleSubmit(response.data.addTag);
      }
    } catch (error) {
      if (error && error.graphQLErrors) {
        actions.setFieldError('name', error.graphQLErrors[0].message);
      }
    }
  };

  public render() {
    return (
      <Formik
        initialValues={{
          name: '',
        }}
        onSubmit={this.handleOnSubmit}
        validationSchema={validationSchema}
      >
        {(props: FormikProps<InputValues>) => {
          return (
            <Flex>
              <Wrapper>
                <Field
                  name="name"
                  render={(fieldProps: FieldProps<InputValues>) => {
                    return <Input label="Tag" {...fieldProps} />;
                  }}
                />
              </Wrapper>
              <ButtonWrapper>
                <Button black={true} type="button" onClick={props.submitForm}>
                  Add Tag
                </Button>
              </ButtonWrapper>
            </Flex>
          );
        }}
      </Formik>
    );
  }
}

export default graphql<TagFormProps, AddTag, AddTagVariables, any>(ADD_TAG)(TagForm);
