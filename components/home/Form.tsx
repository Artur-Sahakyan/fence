"use client";

import React, { useState, forwardRef, useImperativeHandle } from "react";
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

export type FenceLeadSectionRef = {
  openForm: () => void;
};

type FenceLeadSectionProps = {
  onToggleForm?: (open: boolean) => void;
};

const FenceLeadSection = forwardRef<FenceLeadSectionRef, FenceLeadSectionProps>(
  ({ onToggleForm }, ref) => {
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

    // External open form trigger
    useImperativeHandle(ref, () => ({
      openForm: () => {
        setShowForm(true);
        onToggleForm?.(true);
      },
    }));

    const closeForm = () => {
      setShowForm(false);
      onToggleForm?.(false);
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
        closeForm();
      } catch (err) {
        console.error("Email sending failed:", err);
        alert("Failed to send message. Please try again.");
      }
    };

    return (
      <>
        {showForm && (
          <FormProvider {...methods}>
            <div className="mt-8 mb-8 flex justify-center px-4">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="relative w-full max-w-[800px] bg-white text-black rounded-2xl shadow-lg p-8 grid grid-cols-2 gap-6 md:grid-cols-1"
              >
                <button
                  type="button"
                  onClick={closeForm}
                  className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl font-bold"
                >
                  ✕
                </button>

                {[{
                  name: "full_name", label: "Full Name", placeholder: "Enter your full name", type: "text"
                }, {
                  name: "email", label: "Email Address", placeholder: "Enter your email address", type: "text"
                }, {
                  name: "phone", label: "Phone Number", placeholder: "Enter your phone number", type: "phone"
                }].map((input, idx) => (
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
  }
);

FenceLeadSection.displayName = "FenceLeadSection";
export default FenceLeadSection;
