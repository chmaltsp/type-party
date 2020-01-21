import * as Yup from 'yup';

export const validationSchema = (update: boolean) =>
  Yup.object().shape({
    description: Yup.string().required('Description field is required'),
    downloadUrl: Yup.string()
      .required('Url field is required')
      .url('Must be a valid URL'),
    fullTypeface: !update ? Yup.mixed().required('Full size image is required') : [],
    name: Yup.string().required('Name field is required'),
    slug: Yup.string()
      .required('Typeface Slug is required')
      .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Must be a valid slug eg.. my-slug'),
  });
