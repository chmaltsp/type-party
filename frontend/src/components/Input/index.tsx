/**
 * Input
 */

import { em } from 'polished';
import * as React from 'react';
import styled from 'sc';

import { FieldProps, FormikErrors } from 'formik';

const InputBase = styled.input`
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-size: ${em(18)};
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  text-transform: uppercase;
  padding-bottom: 4px;
`;

interface ErrorProps {
  show?: string | FormikErrors<any>;
}

const Error = styled.label<ErrorProps>`
  color: red;
  padding-top: 4px;
  font-size: ${em(14)};
  height: 10px;
  padding-bottom: 0px;
  transition: opacity 0.2s linear, transform 0.2s linear;
  opacity: ${props => (props.show ? '1' : '0')};
  transform: translate3d(0, ${props => (props.show ? '0' : '-15px')}, 0);
`;

export interface InputProps {
  label?: string;
  placeholder?: string;
}

const Input: React.SFC<InputProps & FieldProps> = ({
  field,
  label,
  form,
  placeholder,
  ...props
}) => {
  const { name } = field;
  const { touched, errors } = form;
  return (
    <InputWrapper {...props}>
      {label && <Label>{label}</Label>}
      <InputBase placeholder={placeholder} value={field.value} {...field} />
      <Error show={errors[name]}>{errors[name]}</Error>
    </InputWrapper>
  );
};

export default Input;
