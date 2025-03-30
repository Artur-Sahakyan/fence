"use client";

import React from "react";
import Title from "@/components/common/Title";
import Image from "next/image";

const MaterialImportance = () => {
  return (
    <div
      className="bg-white p-4 rounded-2xl shadow-engine scrollTopMargin"
      id="materials"
    >
      <Title>Why Does Fence Material Matter?</Title>
      <div className="grid grid-cols-2 gap-12 px-[72px] mt-7 lg:grid-cols-1 lg:px-4">
        <p className="text-2xl font-medium lg:text-lg lg:text-center md:text-sm">
          The fence material you choose affects more than just the appearance —
          it impacts cost, durability, maintenance, privacy, and security. For
          example, wood offers a natural look but requires upkeep, while vinyl
          is low-maintenance and lasts longer. Chain-link is affordable and
          strong, ideal for security-focused areas. Choosing the right material
          ensures your fence meets your goals and budget for the long term.
        </p>
        <div className="relative min-h-[430px] lg:hidden">
          <Image
            src="/images/engine.png"
            alt="Fence Material Types"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default MaterialImportance;
