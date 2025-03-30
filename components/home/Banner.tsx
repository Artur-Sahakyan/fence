/* eslint-disable @next/next/no-async-client-component */
"use client";

import Form from "@/components/home/Form"; // Keep or rename to FenceForm
import Image from "next/image";
import React from "react";

const Banner = async () => {
  return (
    <div className="pt-48 pb-16 px-[106px] min-h-[940px] relative text-white flex flex-col justify-between bg-no-repeat bg-cover 3xl:min-h-[700px] xxl:px-[5%] md:min-h-max md:pt-20 md:pb-6">
      <Image
        src="/images/banner.png"
        alt="Fence Banner"
        fill
        style={{ objectFit: "cover" }}
        quality={80}
        priority
      />
      <div className="bg-[#00000059] absolute top-0 left-0 w-full h-full"></div>

      <div className="grid grid-cols-2 gap-24 3xl:gap-6 3xl:grid-cols-5 relative">
        <h1 className="text-[80px] font-bold leading-[100px] drop-shadow-custom-shadow 3xl:col-span-2 xl:col-span-5 xl:text-center xl:text-5xl md:text-3xl">
          Quality Fence Installation You Can Trust
        </h1>
        <Form /> {/* Optional: Rename to FenceForm if needed */}
      </div>
    </div>
  );
};

export default Banner;
