"use client";

// import React, { useRef } from "react";
// import FenceLeadSection, { FenceLeadSectionRef } from "./Form";
// import Button from "@/components/common/Button";
import Image from "next/image";

const Banner = () => {
  // const formRef = useRef<FenceLeadSectionRef>(null);

  return (
    <div
      className="relative px-[106px] pt-48 pb-16 text-white flex flex-col justify-between bg-no-repeat bg-cover min-h-[500px] 3xl:min-h-[600px] xxl:px-[5%] md:pt-[150px] md:pb-6 md:px-6"
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

      <div className="relative z-10 flex flex-col gap-6 items-center">
        <h1 className="text-[80px] text-center font-bold leading-[100px] drop-shadow-custom-shadow 3xl:text-5xl xl:text-center md:text-3xl">
          Quality Fence Installation
        </h1>

        {/* <Button
          className="contained px-10 py-3 text-lg rounded-full"
          onClick={() => formRef.current?.openForm()}
        >
          Quote
        </Button> */}

        {/* Hidden form (opens when ref triggers it) */}
        {/* <FenceLeadSection ref={formRef} /> */}
      </div>
    </div>
  );
};

export default Banner;
