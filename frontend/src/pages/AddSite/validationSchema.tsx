import * as Yup from 'yup';

export const validationSchema = (update: boolean) =>
  Yup.object().shape({
    full: !update ? Yup.mixed().required('Full size image is required') : [],
    slug: Yup.string()
      .required('Website Slug is required')
      .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Must be a valid slug eg.. my-slug'),
    thumbnail: !update ? Yup.mixed().required('Thumbnail is required') : [],
    title: Yup.string().required('Site name is required'),
    url: Yup.string()
      .required('Url field is required')
      .url('Must be a valid URL'),
  });
