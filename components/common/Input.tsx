import React from 'react';
import {InputMask} from '@react-input/mask';
import IconLoader from "@/components/icons/IconLoader";
import InputError from "@/components/common/InputError";
import {FieldValues, UseFormRegister, Path} from "react-hook-form";

export interface InputProps<TFieldValues extends FieldValues> {
    label: string;
    name: Path<TFieldValues>;
    required?: boolean;
    value: string;
    register: UseFormRegister<TFieldValues>;
    onChange?: (value: string) => void;
    placeholder: string;
    maxLength?: number;
    errorMessage?: string;
    isDisabled?: boolean;
    isLoading?: boolean;
    className?: string;
    type?: string;
}

const Input = <TFieldValues extends FieldValues>(props: InputProps<TFieldValues>) => {
    const {
        label,
        name,
        required,
        value,
        register,
        onChange,
        placeholder,
        maxLength,
        errorMessage,
        isDisabled,
        isLoading,
        className,
        type } = props;



    return (
        <div className={`${!!errorMessage ? 'has_error' : ''} form_block input_block ${className ? className : ''}`}>
            <div className="whitespace-nowrap font-semibold md:font-medium mb-[6px] text-[#344054] select-none selectLabel">
                {label}
                {required && <span className='text-error'> *</span>}
            </div>
            {type === 'phone' ?
                <InputMask
                    mask="(___) ___-____"
                    replacement={{_: /\d/}}
                    placeholder="Enter Your Phone Number"
                    type="tel"
                    autoComplete="on"
                    className="form-control"
                    disabled={isDisabled}
                    {...register(name)}
                />
                :
                <input
                    placeholder={placeholder}
                    autoComplete="new-password"
                    className="form-control"
                    maxLength={maxLength || 254}
                    disabled={isDisabled}
                    value={value || ''}
                    {...register(name)}
                    onChange={(e) => {
                        if (onChange) {
                            onChange(e.target.value);
                        }
                        register(name).onChange(e);
                    }}
                />
            }
            {isLoading && <IconLoader className='absolute right-2 bottom-[10px]'/>}
            <InputError error={errorMessage && errorMessage}/>
        </div>
    );
};

export default Input;