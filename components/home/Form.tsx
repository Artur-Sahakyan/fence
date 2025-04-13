"use client";

import React, { useState } from "react";
import { FormProvider, useForm, Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { stepFirstSchema } from "@/validation/formSchema";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import emailjs from "@emailjs/browser";
import SuccessModal from "../common/SuccessModal";

type FenceFormValues = {
  full_name: string;
  email: string;
  phone: string;
  fence_type: string;
  property_type: string;
};

interface FenceLeadSectionProps {
  onToggleForm?: (open: boolean) => void;
}

const FenceLeadSection = ({ onToggleForm }: FenceLeadSectionProps) => {
  const [showForm, setShowForm] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const methods = useForm<FenceFormValues>({
    resolver: yupResolver(stepFirstSchema) as unknown as Resolver<FenceFormValues>,
  });

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  const toggleForm = (state: boolean) => {
    setShowForm(state);
    onToggleForm?.(state);
  };

  const onSubmit = async (data: FenceFormValues) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          full_name: data.full_name,
          email: data.email,
          phone: data.phone,
          fence_type: data.fence_type,
          property_type: data.property_type,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );
      setIsModalOpen(true);
      reset();
      toggleForm(false);
    } catch (err) {
      console.error("Email sending failed:", err);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center">
        {!showForm && (
          <div className="w-[200px] md:w-full">
            <Button
              onClick={() => toggleForm(true)}
              className="w-full contained"
              type="button"
            >
               Quote
            </Button>
          </div>
        )}
        <a href="tel:+1234567890" className="w-[200px] md:w-full">
          <Button type="button" className="w-full contained">
            Call Now
          </Button>
        </a>
      </div>

      {showForm && (
        <FormProvider {...methods}>
          <div className="mt-8 flex justify-center px-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative w-full max-w-[800px] bg-white text-black rounded-2xl shadow-lg p-8 grid grid-cols-2 gap-6 md:grid-cols-1"
            >
              <button
                type="button"
                onClick={() => toggleForm(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl font-bold"
              >
                ✕
              </button>

              {[
                {
                  name: "full_name",
                  label: "Full Name",
                  placeholder: "Enter your full name",
                  type: "text",
                },
                {
                  name: "email",
                  label: "Email Address",
                  placeholder: "Enter your email address",
                  type: "text",
                },
                {
                  name: "phone",
                  label: "Phone Number",
                  placeholder: "Enter your phone number",
                  type: "phone",
                },
              ].map((input, idx) => (
                <Input
                  key={idx}
                  label={input.label}
                  name={input.name as keyof FenceFormValues}
                  value={watch(input.name as keyof FenceFormValues) || ""}
                  placeholder={input.placeholder}
                  type={input.type}
                  register={register}
                  required
                  errorMessage={errors[input.name as keyof FenceFormValues]?.message}
                />
              ))}

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
      )}

      <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default FenceLeadSection;
