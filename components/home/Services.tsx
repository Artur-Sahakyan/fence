"use client";

import React, { useRef, useState } from "react";
import Title from "@/components/common/Title";
import FenceLeadSection, { FenceLeadSectionRef } from "./Form";
import Button from "@/components/common/Button";
import Link from "next/link";
import {
  PanelTopClose,
  Boxes,
  TreePine,
  Link as LinkIcon,
  Layers,
  Cog,
} from "lucide-react";

const Services = () => {
  const materials = [
    { label: "Vinyl", icon: <PanelTopClose className="text-primary w-10 h-10" /> },
    { label: "Aluminum", icon: <Boxes className="text-primary w-10 h-10" /> },
    { label: "Wood", icon: <TreePine className="text-primary w-10 h-10" /> },
    { label: "Chain Link", icon: <LinkIcon className="text-primary w-10 h-10" /> },
    { label: "Composite", icon: <Layers className="text-primary w-10 h-10" /> },
    { label: "Metal Powder Coated", icon: <Cog className="text-primary w-10 h-10" /> },
  ];

  const fenceRef = useRef<FenceLeadSectionRef>(null);
  const [formOpen, setFormOpen] = useState(false);

  const handleOpenQuote = () => {
    fenceRef.current?.openForm();
    setFormOpen(true);
  };

  return (
    <div id="services" className="scrollTopMargin">
      {/* Modal Form */}
      <FenceLeadSection
        ref={fenceRef}
        onToggleForm={(open) => setFormOpen(open)}
      />

      {/* Buttons Section */}
      {!formOpen && (
        <div className="flex flex-col items-center gap-4 mb-10">
          <Title>Ready to get started? Request a quote</Title>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              type="button"
              onClick={handleOpenQuote}
              className="contained px-8 py-3 text-lg rounded-full"
            >
              Quote
            </Button>
            <Link href="/portfolio">
              <Button className="contained px-8 py-3 text-lg rounded-full">
                Portfolio
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Material Options */}
      <Title>Material Options</Title>
      <p className="text-[22px] mb-7 xl:text-lg xl:text-center md:text-sm text-primary-grey text-center">
        Choose from a wide variety of durable and stylish fencing materials.
      </p>
      <div className="grid grid-cols-3 gap-6 xl:gap-4 md:grid-cols-2 sm:grid-cols-1">
        {materials.map((material, idx) => (
          <div
            key={idx}
            className="shadow-service rounded-2xl p-6 bg-white text-black text-xl xl:text-base text-center flex flex-col items-center gap-4"
          >
            <span>{material.icon}</span>
            <p>{material.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
