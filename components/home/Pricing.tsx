"use client";

import React from "react";
import Title from "@/components/common/Title";
import Button from "@/components/common/Button";
import Link from "next/link";

const Pricing = () => {
  const list = [
    "Free on-site consultation & measurements",
    "Transparent quotes based on fence type & length",
    "Includes permitting, materials, and expert installation",
  ];

  return (
    <div
      className="bg-white p-[68px] rounded-2xl shadow-engine scrollTopMargin xxl:p-3"
      id="pricing"
    >
      <div className="flex gap-8 px-2 xl:flex-col xl:gap-3">
        <div>
          <Title className="text-start md:!mb-2">Pricing</Title>
          <p className="text-[36px] text-black font-bold xl:text-3xl">
            Custom Pricing Based on Your Property
          </p>
        </div>
        <div>
          <h3 className="text-[24px] font-semibold text-black mb-6 md:text-sm">
            Every project is unique — we provide personalized quotes based on
            your layout, material, and style.
          </h3>
          <ul className="list-disc pl-10 text-[#717680] text-[22px] font-medium md:text-xs">
            {list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <Link href="/form" className="flex justify-center w-full mt-12 xl:mt-6">
        <Button
          className="contained w-full max-w-[600px] !text-2xl !h-[65px] !rounded-[14px] xxl:!h-12 xxl:!text-lg"
          aria-label="Get Your Free Fence Quote"
        >
          Request a Free Quote
        </Button>
      </Link>
    </div>
  );
};

export default Pricing;
