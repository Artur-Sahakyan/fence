"use client";

import React, { useState } from "react";
import {
  Control,
  Controller,
  FieldValues,
  UseFormSetValue,
} from "react-hook-form";

type Props = {
  initialsArr: { value: string }[];
  setValue: UseFormSetValue<FieldValues>;
  control: Control<FieldValues>;
};

const TermsSection = ({ initialsArr, setValue, control }: Props) => {
  const [termIdx, setTermIdx] = useState<number | null>(null);

  const termsData = [
    "I certify that I am the authorized signer for this project request and that the details I’ve provided are accurate to the best of my knowledge.",
    "I understand that inaccurate information may delay scheduling, permitting, or result in cost adjustments after project review.",
    "I hereby authorize SecureFence Installations LLC to contact me regarding this fencing project and provide a formal quote or agreement based on the information I’ve submitted.",
    "I acknowledge that any payment made (deposit or full) toward materials or labor is subject to our cancellation policy, outlined in our Terms and Conditions.",
    "I agree that once materials are ordered and labor is scheduled, SecureFence Installations LLC may begin the project and payments may be non-refundable unless otherwise agreed in writing.",
  ];

  const onInitialsValueChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const { value } = e.target;
    const upperValue = value?.toUpperCase();
    const isFillFirstTime = initialsArr?.every(
      (item) => !item.value || item.value.length === 1
    );

    if (isFillFirstTime) {
      initialsArr.forEach((_, index) => {
        setValue(`initials.${index}.value`, upperValue);
      });
    } else {
      setValue(`initials.${idx}.value`, upperValue);
    }
  };

  return (
    <>
      {termsData.map((term, idx) => (
        <div key={idx} className="flex items-start gap-2">
          <div className="form_block input_block !w-fit [&_input]:placeholder:!text-xs">
            <Controller
              name={`initials.${idx}.value`}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  autoComplete="off"
                  placeholder="Initials"
                  maxLength={2}
                  onChange={(e) => onInitialsValueChange(e, idx)}
                  className="!w-[50px] !h-9 !p-[2px] text-center"
                />
              )}
            />
          </div>
          <ul className="color-p">
            <li
              onClick={() => setTermIdx(termIdx === idx ? null : idx)}
              className={termIdx === idx ? "active" : ""}
            >
              <div className="flex items-center gap-1 container">
                <span
                  className={`text ${
                    termIdx === idx ? "md:line-clamp-0" : "md:line-clamp-2"
                  }`}
                >
                  {term}
                </span>
                <span
                  className={`hidden arrow md:block ${
                    termIdx === idx ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default TermsSection;
