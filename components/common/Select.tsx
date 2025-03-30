import Select, {components, GroupBase, InputProps, MultiValue, SingleValue, StylesConfig} from "react-select";
import InputError from "@/components/common/InputError";
import {Option, SelectCompProps} from "@/types/types";
import {Controller} from "react-hook-form";

const SelectComp: React.FC<SelectCompProps> = ({
                                                   control,
                                                   label,
                                                   placeholder,
                                                   options,
                                                   required,
                                                   name,
                                                   value,
                                                   errorMessage,
                                                   isDisabled,
                                                   isSearchable,
                                                   isMulti = false,
                                                   className,
                                                   handleChange
                                               }) => {
    const CustomInput = (props: InputProps<Option, false, GroupBase<Option>>) => <components.Input {...props} autoComplete="nope" />;
    const customStyles: StylesConfig<Option, false, GroupBase<Option>> = {
        control: (provided) => ({
            ...provided,
            fontSize: 16,
            color: '#344054',
            borderColor: '#D0D5DD',
            boxShadow: 'none',
            minHeight: '45px',
            height: '45px'
        }),

        valueContainer: (provided, state) => ({
            ...provided,
            height: '45px',
            padding: '0 10px',
            fontWeight: '400',
            color: '#344054',
            ...(isMulti && {
                top: state.getValue().length > 0 ? '-2px' : '50%',
                transform: state.getValue().length > 0 ? 'translateY(0)' : 'translateY(-50%)',
                flexWrap: 'unset'
            })
        }),

        input: (provided) => ({
            ...provided,
            margin: '0px',
            padding: 0,
            color: '#344054',
        }),

        indicatorSeparator: () => ({
            display: 'none'
        }),

        indicatorsContainer: (provided) => ({
            ...provided,
            height: '45px'
        }),

        option: (styles, state) => ({
            ...styles,
            color: '#000000',
            backgroundColor: state.isSelected ? "#2b7abf4d" : "white",

        }),
        menu: (base) => ({
            ...base,
            zIndex: '9'
        }),
        menuList: (base) => ({
            ...base,
            maxHeight: '250px'
        })
    };

    return (
        <div className={`${!!errorMessage ? '[&_.formError]:opacity-100' : ''} relative  ${className ? className : ''}`}>
            <div className="whitespace-nowrap font-semibold md:font-medium mb-[6px] text-[#344054] select-none selectLabel">
                {label}
                {required && <span className='text-error'> *</span>}
            </div>
            <Controller
                control={control}
                name={name}
                defaultValue={value || ''}
                render={({field}) => {
                    const selectedOption = isMulti ? options?.filter(option => field.value && field.value.includes(option.value))
                        : options?.find(option => field.value && option.value == field.value);
                    return (
                        <Select
                            {...field}
                            instanceId={name}
                            id={name}
                            placeholder={placeholder}
                            className="basic-single form-control"
                            classNamePrefix="select"
                            isSearchable={isSearchable || true}
                            isMulti={isMulti as false}
                            closeMenuOnSelect={!isMulti}
                            isDisabled={isDisabled}
                            hideSelectedOptions={false}
                            value={selectedOption || null}
                            options={options}
                            aria-label={placeholder}
                            components={{ Input: CustomInput }}
                            onChange={(val: SingleValue<Option> | MultiValue<Option>) => {
                                if (handleChange) {
                                    handleChange(val as SingleValue<Option>);
                                } else {
                                    if (isMulti) {
                                        if (Array.isArray(val)) {
                                            field.onChange(val.map(c => c.value));
                                        } else {
                                            field.onChange([]);
                                        }
                                    } else {
                                        if (val) {
                                            if ("value" in val) {
                                                field.onChange(val.value);
                                            }
                                        } else {
                                            field.onChange('');
                                        }
                                    }
                                }


                            }}
                            styles={customStyles}
                            theme={(theme) => ({
                                ...theme,
                                borderRadius: 8,
                                colors: {
                                    ...theme.colors,
                                    primary25: 'rgb(25 26 42 / 20%)',
                                    primary: 'rgb(25 26 42 / 40%)',
                                    neutral50: '#000000'
                                },
                            })}
                        />
                    );
                }}
            />
            <InputError error={errorMessage && errorMessage}/>
        </div>
    );
};

export default SelectComp;