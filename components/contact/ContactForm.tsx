'use client';
import React from 'react';
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {contactSchema} from "@/validation/contactSchema";
import Input from "@/components/common/Input";
import InputError from "@/components/common/InputError";
import Button from "@/components/common/Button";

const ContactForm = () => {
    // const {data, loading, errorMessage, errors: resErrors, fetchData} = useFetch();
    const methods = useForm({
        resolver: yupResolver(contactSchema)
    })

    const {register, watch, handleSubmit, formState: {errors}} = methods;

    function onSubmit() {

    }

    return (
        <FormProvider {...methods}>
            <form
                className='grid grid-cols-2 gap-x-2 gap-y-6 sm:gap-x-3 [&_input]:!pl-5 [&_input]:!rounded-2xl [&_input]:!text-[22px] [&_input]:!h-[59px]
                md:[&_input]:!text-sm md:[&_input]:!h-[45px] md:[&_input]:!rounded-lg md:gap-y-4'
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input name='full_name'
                       label=''
                       value={watch('full_name')} 
                       placeholder='Full Name'
                       register={register}
                       errorMessage={errors.full_name?.message || ''}
                       className='col-span-1 [&_input]:capitalize'/>
                <Input name='company_name'
                       label='' 
                       value={watch('company_name') || ''}
                       placeholder='Company Name'
                       register={register}
                       className='col-span-1 [&_input]:capitalize'/>
                <Input name='email'
                       label=''
                       value={watch('email') || ''}
                       placeholder='Your Email'
                       register={register}
                       errorMessage={errors.email?.message || ''}
                       className='col-span-2'/>
                <Input  name='full_name'
                type='phone'
                        label=''
                        value={watch('email') || ''}
                        placeholder='Your Email'
                        register={register}
                        errorMessage={errors.email?.message || ''}
                        className='col-span-2'/>
                <div className={`${errors.message?.message && 'has_error'} form_block col-span-2 [&_.formError]:bottom-[-10px]`}>
                    <textarea
                        placeholder='How Can We Help?'
                        {...register('message')}
                        className='w-full min-h-[184px] outline-0 p-[10px] pl-5 rounded-2xl text-[22px] text-[#344054] form-control md:text-sm md:rounded-lg md:min-h-[104px]'
                    />
                    <InputError error={errors.message?.message || ''}/>
                </div>
                <Button className='contained col-span-2 !rounded-2xl !h-[59px] !text-xl md:!rounded-lg md:!h-11 md:!text-base' type='submit'
                        arial-label='Send Your Message'>Submit</Button>
            </form>
        </FormProvider>
    );
};

export default ContactForm;