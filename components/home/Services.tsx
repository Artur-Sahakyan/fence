"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import {
  PanelTopClose,
  Boxes,
  TreePine,
  Link as LinkIcon,
  Layers,
  Cog,
} from "lucide-react";
import Title from "@/components/common/Title";

const materials = [
  { label: "Vinyl", icon: PanelTopClose },
  { label: "Aluminum", icon: Boxes },
  { label: "Wood", icon: TreePine },
  { label: "Chain Link", icon: LinkIcon },
  { label: "Composite", icon: Layers },
  { label: "Metal Powder Coated", icon: Cog },
];

const Services = () => {
  return (
    <section
      id="services"
      className="scrollTopMargin relative z-10 px-4  bg-gradient-to-b from-[#f7f9fb] to-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <Title>Material Options</Title>
        <p className="text-[22px] mb-12 xl:text-lg md:text-base text-primary-grey">
          Choose from a wide variety of durable and stylish fencing materials.
        </p>

        <div className="relative overflow-hidden px-6 md:px-0">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            loop={false}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
                centeredSlides: true,
              },
              640: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                centeredSlides: false,
              },
            }}
            className="!overflow-visible"
          >
            {materials.map(({ label, icon: Icon }) => (
              <SwiperSlide key={label}>
                <div className="mb-[8px] mt-[8px] bg-white border border-gray-100 rounded-3xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 ease-out flex flex-col items-center text-center h-full">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className=" w-10 h-10 text-primary" />
                  </div>
                  <p className="text-lg font-semibold text-gray-800">
                    {label}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

{/* Left Arrow */}
<button
  className="lg:hidden ml-[25px] swiper-next absolute -left-6 top-1/2 -translate-y-1/2 z-[50] w-10 h-10 rounded-full bg-white border border-primary text-primary shadow flex items-center justify-center hover:bg-primary hover:text-white transition pointer-events-auto"
  >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
</button>



{/* Right Arrow */}
<button
  className="lg:hidden mr-[25px] swiper-next absolute -right-6 top-1/2 -translate-y-1/2 z-[50] w-10 h-10 rounded-full bg-white border border-primary text-primary shadow flex items-center justify-center hover:bg-primary hover:text-white transition pointer-events-auto"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
</button>


        </div>
      </div>
    </section>
  );
};

export default Services;
