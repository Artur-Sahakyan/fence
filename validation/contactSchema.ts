import * as yup from 'yup';
import {name, email} from "@/validation/common";

export const contactSchema = yup.object({
    full_name: name,
    email,
    company_name: yup.string().notRequired(),
    message: yup.string().required("Required field").trim().min(5, 'The message field must be at least 5 characters'),
    phone: yup.number().required("Required field").min(5, 'The message field must be at least 5 characters'),
});