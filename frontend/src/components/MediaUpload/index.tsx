import * as React from 'react';

import { FieldProps } from 'formik';
import styled from 'sc';

import { Label as FieldNameBase } from '../Input';
export interface MediaUploadProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: any;
  label: string;
}

interface LabelProps {
  htmlFor: string;
}
const FileUpload = styled.input.attrs({
  accept: 'image/*',
  type: 'file',
})`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const FieldSet = styled.div`
  width: 100%;
  height: 326px;
  background-color: ${({ theme }) => theme.colors.greyC4C};
  margin: ${({ theme }) => theme.baseSpacing * 3}px 0;
`;

const Label = styled.label<LabelProps>`
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  display: block;
  text-align: center;
  padding: ${({ theme }) => theme.baseSpacing * 2}px;
  border: 2px solid ${({ theme }) => theme.colors.greyC4C};
`;

const FieldName = styled(FieldNameBase)`
  position: relative;
  top: -20px;
`.withComponent('span');

export function MediaUpload({ field, onChange, label }: MediaUploadProps & FieldProps) {
  return (
    <FieldSet>
      <FieldName>{label}</FieldName>
      <FileUpload id={field.name} onChange={onChange} />
      <Label htmlFor={field.name} />
    </FieldSet>
  );
}

export default MediaUpload;
