"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Title from "@/components/common/Title";

const portfolioItems = [
  {
    title: "Vinyl Fence Installation",
    image: "/images/fence-vinyl.jpg",
    description: "A durable white vinyl fence designed for privacy and low maintenance.",
  },
  {
    title: "Wooden Fence Project",
    image: "/images/fence-wood.jpg",
    description: "A rustic wood fence for a warm, natural look around your home.",
  },
  {
    title: "Fence Summary Showcase",
    image: "/images/fence-summary.jpg",
    description: "Various types of fences installed on different properties.",
  },
  {
    title: "Modern Vinyl Build",
    image: "/images/ence-vinyl.jpg",
    description: "Modern vinyl fence that complements a contemporary home.",
  },
  {
    title: "Premium Backyard Fence",
    image: "/images/fance1.jpeg",
    description: "Premium backyard wood fence providing privacy and beauty.",
  },
  {
    title: "Clean White Fence Finish",
    image: "/images/engine.png",
    description: "Sleek white vinyl fence surrounding a home garden.",
  },
];

export default function PortfolioPage() {
  const [selectedItem, setSelectedItem] = useState<null | typeof portfolioItems[0]>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setSelectedItem(null);
      }
    }

    if (selectedItem) {
      document.body.style.overflow = "hidden"; // prevent background scroll
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedItem]);

  return (
    <div className="min-h-screen bg-[#FCFCFC] padding-m padding-vertical">
      <Title>Our Portfolio</Title>
      <p className="text-center text-lg mb-12 text-primary-grey">
        Explore some of our completed fence installation projects.
      </p>

      <div className="grid grid-cols-3 gap-8 md:grid-cols-2 sm:grid-cols-1">
        {portfolioItems.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedItem(item)}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={400}
              className="w-full h-[250px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
  <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4">
    <div
      ref={modalRef}
      className="relative bg-white rounded-xl shadow-xl w-full max-w-6xl h-auto max-h-[95vh] overflow-auto flex flex-col"
    >
      {/* Close Button */}
      <button
        onClick={() => setSelectedItem(null)}
        className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2 hover:bg-opacity-100 transition-colors z-10"
        aria-label="Close Modal"
      >
        <span className="text-black text-xl font-bold">✕</span>
      </button>

      {/* Fullscreen Image */}
      <div className="w-full h-[60vh] sm:h-[70vh] relative">
        <Image
          src={selectedItem.image}
          alt={selectedItem.title}
          fill
          className="object-cover rounded-t-xl"
        />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-4">
        <h3 className="text-2xl font-bold mb-3 sm:text-xl">{selectedItem.title}</h3>
        <p className="text-gray-700 text-base sm:text-sm">{selectedItem.description}</p>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
