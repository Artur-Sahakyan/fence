"use client";

import React from "react";
import Title from "@/components/common/Title";
import Image from "next/image";

const Consequences = () => {
  const data = [
    {
      title: "Privacy Loss",
      text: "Without a fence, your outdoor space is fully visible to neighbors and passersby — reducing comfort and privacy for your family.",
      image: "fance1.jpeg",
    },
    {
      title: "Security Risks",
      text: "Open properties are more vulnerable to trespassers, theft, or animals entering your yard — especially at night.",
      image: "fance2.jpeg",
    },
    {
      title: "Pets & Children at Risk",
      text: "Without a proper fence, kids and pets can easily wander off, creating safety hazards and neighborhood concerns.",
      image: "no-fence.png",
    },
    {
      title: "Property Line Disputes",
      text: "A clearly installed fence defines ownership lines and helps avoid future issues with neighbors over shared land.",
      image: "ence-vinyl.jpg",
    },
  ];

  return (
    <div
      className="bg-white pt-4 pb-9 px-9 rounded-2xl shadow-compliance scrollTopMargin 3xl:!p-3"
      id="consequences"
    >
      <Title>Why You Shouldn’t Delay Installing a Fence</Title>
      <p className="text-xl text-center font-medium mb-12 xl:text-xl xl:mb-7 xl:text-center md:text-sm">
        Waiting too long to install a fence can lead to real issues with safety,
        security, and peace of mind. Here’s what can happen if you hold off:
      </p>
      <div className="grid grid-cols-2 gap-x-11 gap-y-6 3xl:gap-x-6 xl:grid-cols-1 xl:gap-3">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-2 gap-8 p-3 3xl:gap-5 md:grid-cols-1 md:p-0"
          >
            <div className="relative xl:min-h-[234px] md:order-2">
              <Image
                src={`/images/${item.image}`}
                alt={item.title}
                fill
                className="object-cover rounded-2xl md:object-bottom"
              />
            </div>
            <div className="flex flex-col gap-2 md:order-1 md:gap-[6px]">
              <h3 className="text-lg font-bold min-h-14 xl:min-h-max">
                {item.title}
              </h3>
              <p className="md:text-sm">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Consequences;
