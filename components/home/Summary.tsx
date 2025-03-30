"use client";

import React from "react";
import IconSummary1 from "@/components/icons/IconSummary1";
import IconSummary2 from "@/components/icons/IconSummary2";
import IconSummary3 from "@/components/icons/IconSummary3";
import IconSummary4 from "@/components/icons/IconSummary4";
import Title from "@/components/common/Title";
import Image from "next/image";

const Summary = () => {
  const data = [
    {
      title: "Professional Fence Installation",
      text: "From the initial consultation to final build, we handle everything — planning, materials, permits, and expert construction.",
      icon: <IconSummary1 />,
    },
    {
      title: "Requirements & Planning",
      text: "We verify your property lines, help with permits, and help you choose materials that meet local codes and personal goals.",
      icon: <IconSummary2 />,
    },
    {
      title: "Who It's For",
      text: "Homeowners, business owners, HOAs, and public spaces — anyone looking for privacy, security, or curb appeal.",
      icon: <IconSummary3 />,
    },
    {
      title: "Why It Matters",
      text: "Without a fence, your property can be vulnerable to trespassing, unclear boundaries, and safety concerns for kids or pets.",
      icon: <IconSummary4 />,
    },
  ];

  return (
    <div className="bg-white p-6 pb-9 rounded-2xl shadow-compliance flex gap-7 xl:!p-3 md:flex-col">
      <div>
        <Title className="text-start md:text-center">
          Fence Project Summary
        </Title>
        <div className="flex flex-col gap-10 mt-12 md:gap-3">
          {data.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 sm:flex-col">
              <div className="w-[66px] h-[66px] min-w-[66px] rounded-lg bg-primary flex items-center justify-center">
                {item.icon}
              </div>
              <div className="sm:text-center">
                <h3 className="text-xl font-semibold mb-3 md:text-lg">
                  {item.title}
                </h3>
                <p className="text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full xl:hidden">
        <Image
          src="/images/fence-summary.jpg"
          alt="Fence Project Summary"
          fill
          className="object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Summary;
