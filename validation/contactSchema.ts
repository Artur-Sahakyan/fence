import * as yup from 'yup';

export const contactSchema = yup.object().shape({
  full_name: yup.string().required('Full name is required'),
  company_name: yup.string().optional(),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  message: yup.string().required('Message is required')
});
