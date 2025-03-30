"use client";

import React from "react";
import Title from "@/components/common/Title";
import Image from "next/image";

const DoYouNeedAFence = () => {
  const data = [
    {
      title: "Apartment or Condo Residents",
      text: "If you live in a multi-unit building or don’t own your land, fencing may not be allowed or necessary.",
    },
    {
      title: "HOA Restrictions",
      text: "Some neighborhoods have HOA rules that limit fence height, color, or completely prohibit fencing.",
    },
    {
      title: "Open-Concept Yards",
      text: "If you prefer open landscapes or have no need for privacy or boundaries, a fence might not be needed.",
    },
    {
      title: "Rural or Uninhabited Land",
      text: "Large rural lots without neighbors or public traffic may not need fencing at all.",
    },
    {
      title: "Temporary Usage",
      text: "For short-term security or events, temporary fencing may be more suitable than a permanent structure.",
    },
  ];

  return (
    <div
      className="bg-white pt-4 pb-9 px-9 rounded-2xl shadow-compliance scrollTopMargin xl:px-3 xl:pb-3"
      id="who-is-exempt"
    >
      <Title>Do You Actually Need a Fence?</Title>
      <p className="text-xl text-center font-medium mb-7 xl:text-xl xl:text-center md:text-sm">
        Not everyone needs a fence — here are some scenarios where you might not
        need to install one.
      </p>
      <div className="grid grid-cols-2 gap-11 xl:grid-cols-1 xl:gap-4">
        <div className="flex flex-col gap-5">
          {data.map((item, idx) => (
            <p
              key={idx}
              className="text-xl md:text-sm xl:flex xl:flex-col xl:items-center xl:text-center xl:gap-2"
            >
              <strong className="mr-2 md:mr-0 md:text-base">
                {item.title}
                <span className="xl:hidden">:</span>
              </strong>
              {item.text}
            </p>
          ))}
        </div>
        <div className="relative h-full xl:min-h-[400px] xl:rounded-lg md:min-h-40">
          <Image
            src="/images/no-fence.png"
            alt="Do You Need a Fence?"
            fill
            className="object-contain xl:rounded-lg xl:object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default DoYouNeedAFence;
