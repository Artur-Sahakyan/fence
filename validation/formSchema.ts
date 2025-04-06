import * as yup from "yup";
import {name, email, phone, required, address, city, zip} from "@/validation/common";
import {isValidLuhnAlgorithm} from "@/utils/helpers";

const card_number = yup.string().required('Please enter Card Number')
    .min(8, 'Enter a valid Card Number').test(
        'luhnAlgorithm',
        'Invalid card number',
        value => isValidLuhnAlgorithm(value.replace(/\s/g, '')) // Remove spaces before validation
    );

const card_holder = yup.string()
    .required('Please enter Name on Card').matches(/[^\s*].*[^\s*]/g, 'Card Name is required.')
    .matches(/^[^@#$%]*$/, 'Enter valid Card Name');

const card_expiration_date = yup.string().required('Please enter Card date')
    .min(5, 'Enter valid date').test(
        'is-not-valid',
        'Enter valid date',
        function (value) {
            if (!value) return false; // If no value is provided, it's invalid
            const month = value.split('/')[0];
            return +month <= 12;

        }).test(
        'is-not-expired',
        'Expiration date must be in the future',
        function (value) {
            const [month, year] = value.split('/').map(str => parseInt(str, 10));

            // Adjust for two-digit year
            const fullYear = year >= 0 && year < 100 ? 2000 + year : year;

            // Create a Date object for the provided month and year
            const inputDate = new Date(fullYear, month); // Month is 0-based index

            // Get the current date
            const currentDate = new Date();

            // Check if the input date is in the future
            return inputDate >= currentDate;
        }
    )

const card_cvc = yup.string().typeError('Enter valid CVC').required('Please enter CVC').min(3,
    'Enter valid CVC');

export const stepFirstSchema = yup.object({
    full_name: name,
    email,
    phone,
    // application_type_id: required,
    // entity_type_id: required,
});



export const formSchema = yup.object({
    full_name: name,
    email,
    phone,
    // application_type_id: required,
    // entity_type_id: required,
    // motor_carrier_id: required,
    // motor_carrier_value: required,
    company_name: yup.string().when('needCompanyInfo', {
        is: (val: string) => val,
        then: () => yup.string().required('Name is required.'),
        otherwise: () => yup.string().nullable()
    }),
    tax_id: yup.string().when('needCompanyInfo', {
        is: (val: string) => val,
        then: () => yup.string().required('Tax ID is required.').min(10, 'Enter valid EIN'),
        otherwise: () => yup.string().nullable()
    }),
    responsive_official_name: yup.string().when('needCompanyInfo', {
        is: (val: string) => val,
        then: () => yup.string().required('Name is required.'),
        otherwise: () => yup.string().nullable()
    }),
    responsive_official_title: yup.string().when('needCompanyInfo', {
        is: (val: string) => val,
        then: () => yup.string().required('Title is required.'),
        otherwise: () => yup.string().nullable()
    }),
    ssn: yup.string().when('needCompanyInfo', {
        is: (val: string) => !val,
        then: () => yup.string().required('SSN is required.').min(10, 'Enter valid SSN'),
        otherwise: () => yup.string().nullable()
    }),

    physical_address: address,
    physical_city: city,
    physical_country_id: required,
    physical_state_id: required,
    physical_postal_code: zip,
    mailing_address: yup.string().when('same_as_physical', {
        is: (val: string) => !val,
        then: () => address,
        otherwise: () => yup.string().nullable()
    }),
    mailing_city: yup.string().when('same_as_physical', {
        is: (val: string) => !val,
        then: () => city,
        otherwise: () => yup.string().nullable()
    }),
    mailing_country_id: yup.string().when('same_as_physical', {
        is: (val: string) => !val,
        then: () => required,
        otherwise: () => yup.string().nullable()
    }),
    mailing_state_id: yup.string().when('same_as_physical', {
        is: (val: string) => !val,
        then: () => required,
        otherwise: () => yup.string().nullable()
    }),
    mailing_postal_code: yup.string().when('same_as_physical', {
        is: (val: string) => !val,
        then: () => zip,
        otherwise: () => yup.string().nullable()
    }),
    card_number,
    card_holder,
    card_expiration_date,
    card_cvc,
    signature: yup.string().required('Signature is required')
        .matches(/^data:image\/(?:gif|png|jpeg|bmp|webp|svg\+xml)(?:;charset=utf-8)?;base64,(?:[A-Za-z0-9]|[+/])+={0,2}/,
            "Signature must be png"
        ),
    initials: yup.array()
        .of(
            yup.object().shape({
                value: yup.string()
                    .required('Initials are required')
                    .length(2, 'Initials must be exactly 2 characters long')
                    .matches(/^[A-Za-z]+$/, 'Initials must contain only letters')
            })
        )
        .test('same-initials', 'Initials must be the same', function (values) {
            if (values && values.length > 1) {
                const firstInitial = values[0]?.value;
                return values.every((item) => item.value === firstInitial);
            }
            return true;
        })
});


