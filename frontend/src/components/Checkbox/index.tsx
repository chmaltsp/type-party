import { FieldProps } from 'formik';
import * as React from 'react';
import styled from 'sc';
import Flex from '../Flex';

const CheckBoxBase = styled.input`
  margin-right: ${({ theme }) => theme.spacing.md}px;
`;

interface InputProps {
  label?: string;
}

const Wrapper = styled(Flex)`
  padding: ${({ theme }) => theme.spacing.md}px 0;
`;

const Label = styled.label``;

export const Checkbox: React.SFC<InputProps & FieldProps> = ({ field, label }) => {
  console.log('IN CHECKBOX: ', field.value);
  return (
    <Wrapper>
      <Label>
        <CheckBoxBase
          type="checkbox"
          checked={field.value}
          name={field.name}
          value={field.value}
          {...field}
        />
        <span>{label}</span>
      </Label>
    </Wrapper>
  );
};
