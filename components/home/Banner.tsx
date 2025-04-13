"use client";

import React, { useState } from "react";
import FenceLeadSection from "./Form";
import Image from "next/image";

const Banner = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div
      className={`relative px-[106px] pt-48 pb-16 text-white flex flex-col justify-between bg-no-repeat bg-cover transition-all duration-500 ease-in-out
        ${formOpen ? "min-h-[940px]" : "min-h-[500px] md:min-h-[300px]"}
        3xl:min-h-[700px] xxl:px-[5%] md:pt-20 md:pb-6 md:px-6`}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner.png"
          alt="Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 flex flex-col gap-1">
        <h1 className="text-[80px] text-center font-bold leading-[100px] drop-shadow-custom-shadow 3xl:text-5xl xl:text-center md:text-3xl">
          Quality Fence Installation
        </h1>

        <FenceLeadSection onToggleForm={setFormOpen} />
      </div>
    </div>
  );
};

export default Banner;
