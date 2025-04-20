"use client";

import React from "react";
import Title from "@/components/common/Title";


const Services = () => {
  const materials = [
    { label: "Vinyl", icon: "🧱" },
    { label: "Aluminum", icon: "🪙" },
    { label: "Wood", icon: "🪵" },
    { label: "Chain Link", icon: "⛓️" },
    { label: "Composite", icon: "🧩" },
    { label: "Metal Powder Coated", icon: "⚙️" },
  ];

  return (
    <div id="services" className="scrollTopMargin">


      {/* Material Options */}
      <Title>Material Options</Title>
      <p className="text-[22px] mb-7 xl:text-lg xl:text-center md:text-sm text-primary-grey text-center">
        Choose from a wide variety of durable and stylish fencing materials.
      </p>
      <div className="grid grid-cols-3 gap-6 xl:gap-4 md:grid-cols-2 sm:grid-cols-1">
        {materials.map((material, idx) => (
          <div
            key={idx}
            className="shadow-service rounded-2xl p-6 bg-white text-black text-xl xl:text-base text-center flex flex-col items-center gap-4"
          >
            <span className="text-4xl">{material.icon}</span>
            <p>{material.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
