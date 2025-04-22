"use client";

import React from "react";
import { motion } from "framer-motion";
import Title from "@/components/common/Title";
import { CalendarDays, Boxes, Hammer, Wrench } from "lucide-react";

const steps = [
  {
    icon: <CalendarDays className="w-8 h-8 text-primary" />,
    text: "Schedule a Free On-Site Consultation",
  },
  {
    icon: <Boxes className="w-8 h-8 text-primary" />,
    text: "Choose Fence Style & Materials",
  },
  {
    icon: <Hammer className="w-8 h-8 text-primary" />,
    text: "Fabrication for your project",
  },
  {
    icon: <Wrench className="w-8 h-8 text-primary" />,
    text: "Professional Installation",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.9, ease: "easeOut" },
  }),
};

const Steps = () => {
  return (
    <div
      className="bg-white px-7 py-10 rounded-2xl scrollTopMargin"
      id="how-it-works"
    >
      <Title>How It Works</Title>

      <div className="grid grid-cols-4 gap-10 mt-12 md:grid-cols-1 md:gap-12">
        {steps.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center gap-4 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={idx}
            variants={fadeUp}
          >
            <div className="rounded-full border-2 border-primary flex justify-center items-center w-[76px] h-[76px] min-w-[76px]">
              {item.icon}
              {idx !== 0 && (
                <div className="h-1 w-2/3 bg-primary absolute top-auto right-[72%] md:h-9 md:w-1 md:-top-11 md:right-[unset]" />
              )}
            </div>
            <h3 className="text-2xl text-primary text-center font-bold xl:text-xl">
              {item.text}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
