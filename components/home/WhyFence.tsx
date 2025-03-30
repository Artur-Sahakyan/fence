"use client";

import React from "react";
import Title from "@/components/common/Title";

const FenceOverview = () => {
  const content = [
    {
      title: "What is a Fence Permit and Why Is It Needed?",
      details:
        "A fence permit is typically required by local municipalities to ensure that any fencing installed on residential or commercial property complies with safety, height, material, and zoning regulations. It helps maintain consistent aesthetics in neighborhoods, prevents disputes, and ensures safe construction.",
    },
    {
      title: "Purpose",
      details:
        "Installing a fence provides privacy, security, and property boundary definition. It can also enhance curb appeal and increase the overall value of a home or business.",
    },
    {
      title: "How We Help",
      details:
        "Our team handles the full fence installation process—from helping you choose the right material and design, to obtaining any required permits, and completing professional installation. We ensure your fence is code-compliant and built to last.",
    },
  ];

  return (
    <div id="why-fence" className="scrollTopMargin">
      <Title>Why Install a Fence?</Title>
      <div className="grid grid-cols-2 gap-3 text-xl [&_.box]:p-4 [&_.box]:rounded-2xl xl:text-base md:grid-cols-1 sm:text-sm">
        <div className="box border border-pale-red bg-white shadow-compliance">
          <h4 className="font-bold mb-5">{content[0].title}</h4>
          <p>{content[0].details}</p>
        </div>
        <div className="flex flex-col gap-1">
          {content.slice(1).map((item, idx) => (
            <div
              key={idx}
              className={`box shadow-compliance ${
                idx === 0
                  ? "bg-white border border-pale-red"
                  : "bg-primary text-white"
              }`}
            >
              <h4 className="font-bold mb-5">{item.title}</h4>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FenceOverview;
