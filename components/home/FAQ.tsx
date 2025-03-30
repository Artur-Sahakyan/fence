"use client";

import React, { useState } from "react";
import Title from "@/components/common/Title";
import IconAcc from "@/components/icons/IconAcc";

const Faq = () => {
  const faqData = [
    {
      question: "Do I need a permit to build a fence?",
      answer:
        "In most cases, yes. Local building codes often require permits depending on the height, location, and type of fence. We handle this process for you to ensure compliance.",
    },
    {
      question: "How long does fence installation take?",
      answer:
        "Most residential fence installations take 1–3 days depending on the length, terrain, and weather. We provide a timeline estimate during your quote.",
    },
    {
      question: "What materials do you offer?",
      answer:
        "We offer wood, vinyl, chain-link, aluminum, and composite fencing options. Each has its own strengths — we’ll help you choose what fits your goals and budget.",
    },
    {
      question: "Can you replace or remove an old fence?",
      answer:
        "Yes! We can remove your existing fence before installing the new one. We also offer post removal and site cleanup as part of the job.",
    },
    {
      question: "How much does a fence cost?",
      answer:
        "Cost depends on fence type, length, height, and site conditions. We offer free on-site quotes so you get an accurate price with no surprises.",
    },
    {
      question: "Do you install gates or automatic openers?",
      answer:
        "Absolutely. We can install walk gates, double gates, and motorized driveway gates with remotes or keypads.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="bg-white pt-4 pb-9 px-9 rounded-2xl shadow-compliance scrollTopMargin xl:!p-3"
      id="faq"
    >
      <Title className="!mb-0">Frequently Asked Questions</Title>
      <Title>(FAQs)</Title>

      {faqData.map((faq, index) => (
        <div key={index} className="border-b py-3 px-6 xl:p-3">
          <div
            className="flex justify-between items-center gap-2 cursor-pointer md:text-sm"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-semibold text-[21px] xxl:text-base md:text-sm">
              {faq.question}
            </span>
            <IconAcc
              className={`transform transition-transform duration-200 min-w-10 md:!w-8 md:!h-8 md:!min-w-8 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out transform ${
              openIndex === index
                ? "scale-y-100 opacity-100"
                : "scale-y-0 opacity-0 h-0"
            }`}
          >
            <p className="text-gray-700 px-4 pt-2 md:text-sm md:px-2">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
