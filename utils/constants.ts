

export const WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL;
export const REQUEST_URL = process.env.NEXT_PUBLIC_REQUEST_URI + '/api/';
export const VEHICLE_PRICE: string = process.env.NEXT_PUBLIC_VEHICLE_PRICE || '';
export const CHAT_URL  = process.env.NEXT_PUBLIC_CHAT_URL;
const currentYear = new Date().getFullYear() + 1;
export const yearsOptions = Array.from({length: currentYear - 1960 + 1}, (_, index) => {
    const year = currentYear - index;
    return {label: year, value: year};
});
export const yesOrNoOptions = [
    {label: 'Yes', value: '1'},
    {label: 'No', value: '0'},
]