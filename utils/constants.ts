export const WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL;
export const REQUEST_URL = process.env.NEXT_PUBLIC_REQUEST_URI + "/api/";
export const VEHICLE_PRICE: string =
  process.env.NEXT_PUBLIC_VEHICLE_PRICE || "";
export const yesOrNoOptions = [
  { label: "Yes", value: "1" },
  { label: "No", value: "0" },
];
