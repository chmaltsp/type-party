import * as React from 'react';

import { FieldProps } from 'formik';
import styled from 'sc';

import { Error as ErrorBase, Label as FieldNameBase } from '../Input';
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
  position: relative;
  width: 100%;
  height: 326px;
  background-color: ${({ theme }) => theme.colors.greyC4C};
  margin: ${({ theme }) => theme.baseSpacing * 3}px 0;
`;

const Label = styled.label<LabelProps>`
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: center;
  // padding: ${({ theme }) => theme.baseSpacing * 2}px;
  border: 2px solid ${({ theme }) => theme.colors.greyC4C};
  // height: 100%;
`;

const Error = styled(ErrorBase)`
  bottom: -15px;
  left: 0;
  position: absolute;
`;

const FieldName = styled(FieldNameBase)`
  position: relative;
  top: -20px;
`.withComponent('span');

const ImagePreview = styled.img`
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

export function MediaUpload({
  field,
  onChange,
  label,
  form,
}: MediaUploadProps & FieldProps) {
  return (
    <FieldSet>
      <FieldName>{label}</FieldName>
      <FileUpload id={field.name} onChange={onChange} />
      <ImagePreview src={field.value && URL.createObjectURL(field.value)} />
      <Label htmlFor={field.name} />
      <Error show={form.touched[field.name] && form.errors[field.name]}>
        {form.errors[field.name]}
      </Error>
    </FieldSet>
  );
}

export default MediaUpload;
