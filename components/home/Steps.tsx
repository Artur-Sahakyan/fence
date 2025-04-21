"use client";

import React from "react";
import Title from "@/components/common/Title";
import { CalendarDays, Boxes, Hammer, Wrench } from "lucide-react";

const Steps = () => {

  const steps = [
    {
      icon: <CalendarDays className="w-6 h-6 text-primary" />,
      text: "Schedule a Free On-Site Consultation",
    },
    {
      icon: <Boxes className="w-6 h-6 text-primary" />,
      text: "Choose Fence Style & Materials",
    },
    {
      icon: <Hammer className="w-6 h-6 text-primary" />,
      text: "Fabrication for your project",
    },
    {
      icon: <Wrench className="w-6 h-6 text-primary" />,
      text: "Professional Installation",
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
            <div className="rounded-full border-2 border-primary flex justify-center items-center w-[66px] h-[66px] min-w-[66px] text-2xl">
              <span className="text-primary">{item.icon}</span>
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
