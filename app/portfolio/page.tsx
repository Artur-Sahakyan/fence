"use client";

import React from "react";
import Image from "next/image";
import Title from "@/components/common/Title";
import { useRouter } from "next/navigation";

const portfolioItems = [
  {
    id: 1,
    title: "Vinyl Fence Installation",
    image: "/images/fence-vinyl.jpg",
    description: "A durable white vinyl fence designed for privacy and low maintenance.",
  },
  {
    id: 2,
    title: "Wooden Fence Project",
    image: "/images/fence-wood.jpg",
    description: "A rustic wood fence for a warm, natural look around your home.",
  },
  {
    id: 3,
    title: "Fence Summary Showcase",
    image: "/images/fence-summary.jpg",
    description: "Various types of fences installed on different properties.",
  },
  {
    id: 4,
    title: "Modern Vinyl Build",
    image: "/images/ence-vinyl.jpg",
    description: "Modern vinyl fence that complements a contemporary home.",
  },
  {
    id: 5,
    title: "Premium Backyard Fence",
    image: "/images/fance1.jpeg",
    description: "Premium backyard wood fence providing privacy and beauty.",
  },
  {
    id: 6,
    title: "Clean White Fence Finish",
    image: "/images/engine.png",
    description: "Sleek white vinyl fence surrounding a home garden.",
  },
  {
    id: 7,
    title: "Classic Fence Style",
    image: "/images/fence.png",
    description: "Traditional fence design with sturdy materials and clean finish.",
  },
  {
    id: 8,
    title: "Next-Gen Vinyl Fence",
    image: "/images/newFence.png",
    description: "Modern, durable fence design with next-gen materials.",
  },
  {
    id: 9,
    title: "Stylish Privacy Fence",
    image: "/images/fance2.jpeg",
    description: "Elegant privacy fencing with natural wood aesthetics.",
  },
  {
    id: 10,
    title: "Engineered Fence Concept",
    image: "/images/engine.png",
    description: "A showcase of engineered fencing used in various installations.",
  },
];

export default function PortfolioPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#FCFCFC] padding-m padding-vertical">
      <Title>Our Portfolio</Title>
      <p className="text-center text-lg mb-12 text-primary-grey">
        Explore some of our completed fence installation projects.
      </p>

      <div className="grid grid-cols-3 gap-8 md:grid-cols-2 sm:grid-cols-1">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform flex flex-col"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={400}
              className="w-full h-[250px] object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 flex-grow">{item.description}</p>
              <button
                onClick={() => router.push(`/portfolio/${item.id}`)}
                className="mt-4 text-white font-medium py-2 px-4 rounded-md transition-colors bg-primary"
              >
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
