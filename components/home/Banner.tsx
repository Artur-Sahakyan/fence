"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import QuoteModal, { QuoteModalRef }  from "./QuoteModal";

const Banner = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showDesc, setShowDesc] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const quoteRef = useRef<QuoteModalRef>(null);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowTitle(true), 700),
      setTimeout(() => setShowDesc(true), 1400),
      setTimeout(() => setShowButton(true), 2500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative px-[106px] pt-48 pb-16 text-white flex flex-col justify-between bg-no-repeat bg-cover min-h-[500px] 3xl:min-h-[600px] xxl:px-[5%] md:pt-[150px] md:pb-6 md:px-6">
      {/* Background Image */}
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

      <div className="relative z-10 flex flex-col gap-4 max-w-2xl md:items-center md:text-center items-start text-left">
        {/* Title */}
        <h1
          className={`text-[80px] font-bold leading-[100px] drop-shadow-custom-shadow 3xl:text-5xl md:text-3xl transition-all duration-1000 ease-out ${
            showTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Quality Fence Installation
        </h1>

        {/* Description */}
        <p
          className={`text-xl md:text-base text-white/90 transition-all duration-1000 ease-out delay-100 ${
            showDesc ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Secure, stylish, and durable fencing solutions for homes & businesses across Los Angeles.
        </p>

        {/* Buttons */}
        {showButton && (
            <div className="flex flex-col  md:items-center gap-4 mt-4 w-full">

            <Link
              href="/portfolio"
              className="rounded-xl bg-white border-white text-primary font-semibold text-base md:text-lg transition-all duration-300
                        w-full max-w-[200px] h-[48px] flex items-center justify-center text-center"
            >
              View Our Work
            </Link>


            <button
                onClick={() => quoteRef.current?.open()}
                className="rounded-xl bg-white border-white text-primary font-semibold text-base md:text-lg transition-all duration-300
                          w-full max-w-[200px] h-[48px] flex items-center justify-center text-center"
              >
                Get Free Quote
          </button>

            </div>
          )}

      </div>

      <QuoteModal ref={quoteRef} />
    </div>
  );
};

export default Banner;
