"use client";

import React from "react";
import { IconNeeds1 } from "../icons/IconNeeds1";
import IconNeeds2 from "@/components/icons/IconNeeds2";
import IconNeeds3 from "@/components/icons/IconNeeds3";
import Title from "@/components/common/Title";

const WhoNeeds = () => {
  const data = [
    {
      title: "Homeowners Seeking Privacy or Safety",
      text: "If you want to secure your backyard, protect children or pets, or create a private outdoor space — fencing is an excellent solution.",
      icon: <IconNeeds1 />,
    },
    {
      title: "Businesses & Commercial Properties",
      text: "From warehouses to storefronts, a quality fence helps define property lines, improve security, and enhance appearance.",
      icon: <IconNeeds2 />,
    },
    {
      title: "HOAs, Schools & Government Properties",
      text: "Fencing is often required around playgrounds, parks, pools, and community areas — we help handle bulk and regulated installs.",
      icon: <IconNeeds3 />,
    },
  ];

  return (
    <div className="bg-white pt-4 px-9 pb-14 rounded-2xl shadow-need-apply md:px-3 md:pb-3 scrollTopMargin">
      <Title>Who Needs a Fence?</Title>
      <div className="grid grid-cols-3 gap-6 mt-[67px] xl:grid-cols-2 xl:gap-4 xl:mt-0 md:grid-cols-1 md:[&_svg]:scale-90">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-4 border border-[#BEBEBE] bg-white text-black"
          >
            <div className="h-[92px]">{item.icon}</div>
            <h3 className="text-2xl font-bold min-h-14 mt-4 mb-8 md:text-base md:my-3 md:min-h-max">
              {item.title}
            </h3>
            <p className="font-medium md:text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoNeeds;
