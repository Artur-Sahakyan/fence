"use client";

import React from "react";
import IconApply1 from "@/components/icons/IconApply1";
import IconApply2 from "@/components/icons/IconApply2";
// import IconApply3 from "@/components/icons/IconApply3";
import IconApply4 from "@/components/icons/IconApply4";
import Title from "@/components/common/Title";

const Steps = () => {
  const steps = [
    {
      icon: <IconApply1 />,
      text: "Schedule a Free On-Site Consultation",
    },
    {
      icon: <IconApply2 />,
      text: "Choose Fence Style & Materials",
    },
    // {
    //   icon: <IconApply3 />,
    //   text: "Get Permits & Approvals (We Help!)",
    // },
    {
      icon: <IconApply4 />,
      text: "Professional Fence Installation",
    },
  ];

  return (
    <div
      className="bg-white px-7 py-4 rounded-2xl scrollTopMargin"
      id="how-it-works"
    >
      <Title>How It Works</Title>
      <div className="grid grid-cols-4 gap-8 mt-10 md:grid-cols-1 md:gap-12">
        {steps.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-3 relative">
            <div className="rounded-full border-2 border-primary flex justify-center items-center w-[66px] h-[66px] min-w-[66px]">
              {item.icon}
              {idx !== 0 && (
                <div className="h-1 w-2/3 bg-primary absolute top-auto right-[72%] md:h-9 md:w-1 md:-top-11 md:right-[unset]" />
              )}
            </div>
            <h3 className="text-xl text-center font-bold text-black xl:text-lg">
              {item.text}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
