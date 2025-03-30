'use client';
import React, {forwardRef} from 'react';
import DatePicker from 'react-datepicker';
import IconCalendar from "@/components/icons/IconCalendar";
import {Control, Controller, FieldValues, Path} from "react-hook-form";

interface DatePickerProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    minDate?: Date;
    maxDate?: Date;
    isDisabled?: boolean;
}


const DatePickerInput = forwardRef<HTMLButtonElement, {
    value?: string;
    onClick?: () => void;
    onChange?: () => void;
    isDisabled?: boolean;
}>(
    ({value, onClick, onChange, isDisabled}, ref) => (
        <button
            type="button"
            className={`pickerBtn w-full bg-white rounded-lg border border-[#D0D5DD] px-3 h-[45px] flex items-center justify-between ${value ? 'text-[#344054]' : 'text-[#667085]'} ${isDisabled ? 'bg-[#E0E0E0]!' : ''}`}
            onClick={onClick}
            onChange={onChange}
            disabled={isDisabled}
            ref={ref}
        >
            {value || `Select a date`}
            <IconCalendar/>
        </button>
    )
);
DatePickerInput.displayName = "DatePickerInput";

function DatePickerComp<T extends FieldValues>({
                                                   control,
                                                   name,
                                                   minDate,
                                                   maxDate,
                                                   isDisabled,
                                               }: DatePickerProps<T>) {

    return (
        <div className='w-full'>
            <Controller
                name={name}
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <DatePicker
                        selected={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        minDate={minDate}
                        maxDate={maxDate}
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        dateFormat="MM/dd/yyyy"
                        placeholderText="Select Date"
                        customInput={<DatePickerInput isDisabled={isDisabled}
                        />}
                    />
                )}
            />
        </div>
    );
};

export default DatePickerComp;