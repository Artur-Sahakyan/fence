"use client";

import React from "react";
import Title from "@/components/common/Title";
// call now
const Requirements = () => {
  const requirements = [
    {
      title: "Material & Style Selection",
      text: "You’ll choose the style and materials (wood, vinyl, chain-link, etc.) that match your property and needs.",
      icon: "🪵",
    },
    {
      title: "Site Preparation",
      text: "Before installation, we make sure the worksite is clear, level, and ready. Old fencing is removed if necessary.",
      icon: "🛠️",
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
      <div className="grid grid-cols-2 gap-5 xl:grid-cols-2 md:grid-cols-1">
        {requirements.map((item, idx) => (
          <div
            key={idx}
            className={`rounded-2xl shadow-req p-3 flex flex-col items-start ${
              idx % 2
                ? "bg-primary text-white"
                : "border border-[#BEBEBE] bg-white text-black"
            }`}
          >
            <div className="text-4xl">{item.icon}</div>
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
