"use client";

import React from "react";
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
  ];

  return (
    <div
      className="bg-white pt-4 pb-9 px-9 rounded-2xl shadow-compliance scrollTopMargin 3xl:!p-3"
      id="consequences"
    >
      <div className="grid grid-cols-2 gap-x-11 gap-y-6 3xl:gap-x-6 xl:grid-cols-1 xl:gap-3">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-2 gap-8 p-3 3xl:gap-5 md:grid-cols-1 md:p-0"
          >
          <div className="relative w-full h-[215px] lg:min-h-[215px]">
            <Image
              src={`/images/${item.image}`}
              alt={item.title}
              fill
              className="object-cover rounded-2xl"
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
