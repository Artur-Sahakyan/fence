"use client";

import React from "react";
import IconReq1 from "@/components/icons/IconReq1";
import IconReq2 from "@/components/icons/IconReq2";
import IconReq3 from "@/components/icons/IconReq3";
import IconReq4 from "@/components/icons/IconReq4";
import Title from "@/components/common/Title";

const Requirements = () => {
  const requirements = [
    {
      title: "Property Line & Utility Check",
      text: "Before installation, we verify the exact boundaries of your property and ensure there are no buried utility lines in the work zone.",
      icon: <IconReq1 />,
    },
    {
      title: "Permit Approval",
      text: "Most cities and HOAs require a permit before a fence can be built. We assist with the process to ensure full compliance.",
      icon: <IconReq2 />,
    },
    {
      title: "Material & Style Selection",
      text: "You’ll choose the style and materials (wood, vinyl, chain-link, etc.) that match your property and needs.",
      icon: <IconReq3 />,
    },
    {
      title: "Site Preparation",
      text: "Before installation, we make sure the worksite is clear, level, and ready. Old fencing is removed if necessary.",
      icon: <IconReq4 />,
    },
  ];

  return (
    <div
      className="bg-white p-4 pb-8 rounded-2xl shadow-section scrollTopMargin"
      id="get-certified"
    >
      <Title>Requirements for Fence Installation</Title>
      <p className="text-xl text-center font-medium mb-7 xl:text-xl xl:text-center md:text-sm">
        We follow all local regulations and prep requirements to ensure your
        fence is safe, secure, and built to last.
      </p>
      <div className="grid grid-cols-4 gap-5 xl:grid-cols-2 md:grid-cols-1 lg:[&_svg]:max-h-[68px]">
        {requirements.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-2xl shadow-req p-3 ${
              idx % 2
                ? "bg-primary text-white"
                : "border border-[#BEBEBE] bg-white text-black"
            }`}
          >
            {item.icon}
            <h3 className="text-xl font-bold min-h-14 my-8 xl:my-3 md:min-h-max md:text-base">
              {item.title}
            </h3>
            <p className="font-medium md:text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requirements;
