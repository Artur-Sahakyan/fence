"use client";

import React, { Fragment } from "react";
import {
  Control,
  FieldValues,
  FormProvider,
  Resolver,
  useForm,
} from "react-hook-form";
import Input from "@/components/common/Input";
import SelectComp from "@/components/common/Select";
import Button from "@/components/common/Button";
import { Option } from "@/types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { stepFirstSchema } from "@/validation/formSchema";
import emailjs from "@emailjs/browser";

type FenceFormValues = {
  full_name: string;
  email: string;
  phone: string;
  fence_type: string;
  property_type: string;
};

interface FenceFormProps {
  application?: Option[];
  entity?: Option[];
}

export const FenceLeadForm = ({}: { options?: FenceFormProps }) => {
  const methods = useForm<FenceFormValues>({
    resolver: yupResolver(
      stepFirstSchema
    ) as unknown as Resolver<FenceFormValues>,
  });

  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  const inputsArr = [
    {
      name: "full_name",
      label: "Full Name",
      placeholder: "Enter your full name",
      type: "text",
      isSelect: false,
    },
    {
      name: "email",
     label: "Email Address",
      placeholder: "Enter your email address",
      type: "text",
      isSelect: false,
    },
    {
      name: "phone",
      label: "Phone Number",
      placeholder: "Enter your phone number",
      type: "phone",
      isSelect: false,
    },
  ];

  const onSubmit = async (data: FenceFormValues) => {
    try {
      await emailjs.send(
        "service_t2ayhrs",
        "template_ln8ex89",
        {
          full_name: data.full_name,
          email: data.email,
          phone: data.phone,
          fence_type: data.fence_type,
          property_type: data.property_type,
        },
        "MwDTu1ZXAHxAn7Tmk"
      );

      reset();
    } catch (err) {
      console.error("Email sending failed:", err);
      alert("Failed to send message. Please try again.");
    }
  };

  console.log(errors, ' errors')

  return (
    <FormProvider {...methods}>
      <div className="flex justify-center 3xl:col-span-3 xl:col-span-5">
        <form
          className="grid grid-cols-2 w-full md:grid-cols-1 gap-7 rounded-3xl bg-white p-6 max-w-[805px] 3xl:gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          {inputsArr.map((item, idx) => {
            const name = item.name as keyof FenceFormValues;
            return (
              <Fragment key={idx}>
                {item.isSelect ? (
                  <SelectComp
                    control={control as unknown as Control<FieldValues>}
                    label={item.label}
                    placeholder={item.placeholder}
                    name={name}
                    value={watch(name) as string}
                    required={true}
                    errorMessage={errors[name]?.message}
                  />
                ) : (
                  <Input
                    label={item.label}
                    name={name}
                    value={watch(name) as string}
                    placeholder={item.placeholder}
                    type={item.type}
                    required={true}
                    register={register}
                    errorMessage={errors[name]?.message}
                  />
                )}
              </Fragment>
            );
          })}

          <Button
            className="col-span-2 contained md:col-span-1"
            isLoading={false}
            type="submit"
          >
            Contact Us
          </Button>
        </form>
      </div>
    </FormProvider>
  );
};
