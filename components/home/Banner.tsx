"use client";

import {FenceLeadForm} from "@/components/home/Form";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="pt-48 pb-16 px-[106px] min-h-[940px] relative text-white flex flex-col justify-between bg-no-repeat bg-cover 3xl:min-h-[700px] xxl:px-[5%] md:min-h-max md:pt-20 md:pb-6">
      {/* <div className="relative"> */}
      <Image
        src="/images/banner.png"
        alt="Banner"
        fill
        priority
        style={{ objectFit: "cover" }}
      />
      {/* </div> */}

      <div className="bg-[#00000059] absolute top-0 left-0 w-full h-full"></div>

      <div className="grid grid-cols-2 gap-24 3xl:gap-6 3xl:grid-cols-5 relative">
        <h1 className="text-[80px] font-bold leading-[100px] drop-shadow-custom-shadow 3xl:col-span-2 xl:col-span-5 xl:text-center xl:text-5xl md:text-3xl">
          Quality Fence Installation
        </h1>
        <FenceLeadForm />
      </div>
    </div>
  );
};

export default Banner;
