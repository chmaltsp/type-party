import * as React from 'react';

import { FieldProps } from 'formik';
import styled from 'sc';

export interface MediaUploadProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: any;
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
  margin: ${({ theme }) => theme.baseSpacing * 3}px 0;
`;

const Label = styled.label<LabelProps>`
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  display: block;
  text-align: center;
  padding: ${({ theme }) => theme.baseSpacing * 2}px;
  border: 2px dashed ${({ theme }) => theme.colors.white};
`;

export function MediaUpload({
  children,
  field,
  onChange,
}: MediaUploadProps & FieldProps) {
  return (
    <FieldSet>
      <FileUpload id={field.name} onChange={onChange} />
      <Label htmlFor={field.name}>{children}</Label>
    </FieldSet>
  );
}

export default MediaUpload;
