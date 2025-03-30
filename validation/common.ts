import * as yup from "yup";

export const required = yup.string().required("Required field").trim();

export const name = yup.string().matches(/[^\s*].*[^\s*]/g, 'Name is required.').required('Name is required.').matches(/^[A-Za-z\s]+$/, 'Enter an existing Name');
export const email = yup.string().required("Please enter email address")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}[A-Z]*$/i, "Please provide a valid email address!")
    .trim();
export const phone = yup.string().required('Please enter your phone number').min(7, 'Enter valid phone number')
    .test('startsWith000', 'Invalid phone number', value => {
        return !(value && (value.startsWith('(000') || value.startsWith('000')));
    });

// export const city = yup.string().required('Enter city').matches(/[^\s*].*[^\s*]/g,  'Please enter a valid city name.').matches(/^[a-zA-Z\s'-]+$/, 'Please enter a valid city name.');
export const city = yup
    .string()
    .required('Enter city')
    .matches(/[^\s*].*[^\s*]/g, 'Please enter a valid city name.')
    .matches(/^[\p{L}\s'-]+$/u, 'Please enter a valid city name.')
export const address = yup.string().required('Please enter address').matches(/[^\s*].*[^\s*]/g, 'Please enter a valid address.')
    .matches(/^(?=.*[a-zA-Z0-9])[a-zA-Z0-9\s.,'#/@%&-]+$/, 'Please enter a valid address.').min(3, 'Please enter a valid address.').max(70, 'Please enter a valid address.');
export const zip = yup.string().typeError('Enter an existing Zip Code').required('Enter Zip Code').min(4, 'Enter valid Zip Code');
export const vin = yup.string().required('Please enter VIN number').matches(/^[a-zA-Z0-9]+$/, 'Please enter a valid VIN number')
    .min(10, 'Please enter a valid VIN number');
export const licensePlate = yup.string().required('Please enter license plate number').matches(/^[a-zA-Z0-9]+$/, 'Please enter a valid license plate').max(10, "License plate too long");
export const make = yup.string()
    .required('Please enter Make')
    .matches(/^[^\d]+$/, 'Make cannot contain numbers')
    .min(2, 'Enter valid Make')
    .max(50, 'Make too long');
