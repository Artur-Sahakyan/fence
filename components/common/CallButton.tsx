"use client";

import React, { useState } from "react";
import { Phone } from "lucide-react";
import { contactInfo } from "@/utils/data/contactInfo";

const CallButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-primary text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center hover:bg-green-600 transition-all"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6" />
      </button>

      {/* Phone Options Dropdown */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 bg-white border shadow-xl rounded-lg p-4 w-64">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Call Us</h3>
          <div className="flex flex-col gap-2">
            {contactInfo.phones.map((phone, idx) => (
              <a
                key={idx}
                href={`tel:${phone.tel}`}
                className="text-green-700 font-medium hover:underline"
              >
                {phone.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CallButton;
