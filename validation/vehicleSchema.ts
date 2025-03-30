import {licensePlate, make, required, vin} from "@/validation/common";
import * as yup from "yup";

export const vehicleSchema = yup.object({
    truck_id: yup.string().notRequired(),
    vin,
    year: required,
    make,
    model: yup.string().required('Please enter Model').min(2).max(50, "Model too long"),
    fuel_type: required,
    license_plate: licensePlate,
    country_id: required,
    state_id: required,
    vehicle_class: required,
    vehicle_reg_type: required,
    owned_flag: required,
    purchased_date: required,
    engine_info: yup.string().notRequired(),
    engine_manufacturer: required,
    engine_year: required,

});