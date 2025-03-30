"use client";

import React from "react";
import Title from "@/components/common/Title";
import Image from "next/image";

const MaintenanceTips = () => {
  const data = [
    {
      text: "Wood fences provide a natural, warm look, but require regular maintenance. To preserve your wood fence, apply sealant or stain every 2–3 years and check for rot, insects, or warping. Prompt repairs prevent bigger issues.",
      image: "fence-wood.jpg",
    },
    {
      text: "Vinyl fences are low-maintenance and weather-resistant. Simply hose them off or wipe with mild soap and water to keep them looking new. No painting, staining, or sealing required — ideal for busy homeowners.",
      image: "fence-vinyl.jpg",
    },
  ];

  return (
    <div
      className="bg-white py-4 px-16 rounded-2xl shadow-compliance xxl:px-4 scrollTopMargin"
      id="maintenance"
    >
      <Title>Fence Maintenance Tips</Title>
      <p className="text-xl text-center font-medium mb-7 xl:text-xl xl:text-center md:text-sm">
        Keep your fence strong and looking great by following proper maintenance
        for your chosen material.
      </p>
      <div className="grid grid-cols-2 gap-11 min-h-[615px] xl:gap-4 lg:grid-cols-1 lg:min-h-max">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl border border-[#DCDCDC] flex flex-col gap-5 md:gap-3"
          >
            <p className="text-xl font-medium lg:text-lg md:text-sm">
              {item.text}
            </p>
            <div className="relative h-full lg:min-h-[215px]">
              <Image
                src={`/images/${item.image}`}
                alt="Fence Maintenance"
                fill
                className="object-contain rounded-2xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaintenanceTips;
