import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email')
    .required(),
  password: Yup.string().required(),
});
