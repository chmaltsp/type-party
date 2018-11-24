import * as React from 'react';

import styled from 'sc';

import { Field, FieldProps, Formik, FormikProps } from 'formik';

import Button from '../Button';
import Flex from '../Flex';
import Input from '../Input';
import LinkBase from '../Link';

export interface FoundryProps {
  handleSubmit?: () => void;
  onCancel: () => void;
}

const Link = styled.a`
  padding-left: ${({ theme }) => theme.spacing.sm}px;
  cursor: pointer;
`;

export const ButtonContainer = styled(Flex)`
  margin: ${({ theme }) => theme.spacing.sm} 0;
  align-items: center;
`;

interface InputValues {
  name: string;
  url: string;
}
export default class Foundry extends React.PureComponent<FoundryProps, any> {
  private handleOnSubmit = (values: InputValues) => {
    console.log('FOUNDRY FORM: ', values);
  }
  public render() {
    return (
      <Formik
        initialValues={{
          name: '',
          url: '',
        }}
        onSubmit={this.handleOnSubmit}
        render={(props: FormikProps<InputValues>) => {
          return (
            <div>
              <Field
                name="name"
                render={(fieldProps: FieldProps<InputValues>) => {
                  return <Input label="Foundry Name" {...fieldProps} />;
                }}
              />
              <Field
                name="url"
                render={(fieldProps: FieldProps<InputValues>) => {
                  return <Input label="Foundry Url" {...fieldProps} />;
                }}
              />
              <ButtonContainer>
                <Button black={true} onClick={props.submitForm}>
                  Submit Foundry
                </Button>
                <Link onClick={this.props.onCancel}>Cancel</Link>
              </ButtonContainer>
            </div>
          );
        }}
      />
    );
  }
}
