"use client";

import React from "react";
import Image from "next/image";

const DoYouNeedAFence = () => {

  return (
    <div
      className="bg-white pt-4 pb-9 px-9 rounded-2xl shadow-compliance scrollTopMargin xl:px-3 xl:pb-3"
      id="who-is-exempt"
    >
      {/* <Title>Do You Actually Need a Fence?</Title> */}
      <p className="text-xl text-center font-medium mb-7 xl:text-xl xl:text-center md:text-sm">
        Not everyone needs a fence — here are some scenarios where you might not
        need to install one.
      </p>
      <div className="grid grid-cols-2 gap-11 xl:grid-cols-1 xl:gap-4">
        <div className="flex flex-col gap-5">
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
