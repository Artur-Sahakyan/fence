"use client";

import React from "react";
import Title from "@/components/common/Title";
import IconService1 from "@/components/icons/IconService1";
import IconService2 from "@/components/icons/IconService2";
import IconService3 from "@/components/icons/IconService3";

const Services = () => {
  const services = [
    {
      icon: <IconService1 />,
      text: "Custom fence design and planning tailored to your home or business needs.",
    },
    {
      icon: <IconService2 />,
      text: "Permit handling and city code compliance to ensure smooth approvals.",
    },
    {
      icon: <IconService3 />,
      text: "Professional installation with top-grade materials and workmanship.",
    },
  ];

  return (
    <div id="services" className="scrollTopMargin">
      <Title>Our Services</Title>
      <p className="text-[28px] mb-7 xl:text-xl xl:text-center md:text-sm">
        We provide complete residential and commercial fence installation — from
        planning to final build.
      </p>
      <div className="grid grid-cols-3 gap-8 xl:gap-3 md:[&_svg]:w-12 md:grid-cols-1">
        {services.map((item, idx) => (
          <div
            key={idx}
            className="shadow-service rounded-3xl p-4 bg-white text-black text-2xl xl:text-lg md:text-sm"
          >
            {item.icon}
            <p className="mt-7">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
