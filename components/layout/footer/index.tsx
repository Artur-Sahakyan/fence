"use client";

import React from "react";
import Image from "next/image";
import IconLocation from "@/components/icons/IconLocation";
import IconEmail from "@/components/icons/IconEmail";
import IconPhone from "@/components/icons/IconPhone";
import { contactInfo } from "@/utils/data/contactInfo";
import ContactForm from "@/components/contact/ContactForm";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const linksData = [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms and Conditions", href: "/terms-and-conditions" },
  ];

  return (
    <footer className="bg-[#161616] rounded-t-[67px] p-8 pb-5 xl:rounded-none xl:px-0 xl:pt-2">
      <div className="relative w-full h-96 rounded-[67px] xl:h-[217px] xl:rounded-none">
        <Image
          src="/images/footer-fence.jpg"
          alt="Fence Company"
          fill
          className="object-cover rounded-[67px] xl:rounded-none"
        />
      </div>

      <div className="flex justify-between gap-7 px-8 mt-8 xl:flex-col-reverse xl:items-center xl:mt-3 md:px-[5%]">
        <div
          className="text-white flex flex-col gap-9 xl:gap-6 scrollTopMargin"
          id="contact-us"
        >
          <h3 className="text-[64px] font-bold xl:text-center xl:text-[40px]">
            Contact Us!
          </h3>
          <p className="text-[22px] font-medium max-w-xl xl:max-w-max xl:text-lg md:text-sm">
            Ready to secure your property with a custom fence? Whether you need
            privacy, safety, or a style upgrade — we’re here to help.
          </p>
          <div className="flex flex-col gap-5 text-[22px] font-medium xl:text-lg md:text-sm md:[&_svg]:w-5 md:[&_svg]:h-5 md:gap-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-2 max-w-fit group"
            >
              <IconEmail />
              {contactInfo.email}
            </a>

            {contactInfo.phones.map((phone, idx) => (
              <a
                key={idx}
                href={`tel:${phone.tel}`}
                className="flex items-center gap-2 max-w-fit group"
              >
                <IconPhone />
                {phone.label}
              </a>
            ))}

            <a
              href="https://www.google.com/maps?q=34.1804104,-118.3325323"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 max-w-fit group"
            >
              <IconLocation />
              <p>{contactInfo.address}</p>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-7 max-w-2xl xl:gap-4">
          <h4 className="text-5xl text-white font-bold xl:text-4xl md:text-2xl">
            Get in Touch
          </h4>
          <ContactForm />
        </div>
      </div>

      <div className="w-full px-[60px] mt-12 flex items-start md:items-center justify-between gap-3 xl:flex-col lg:justify-center text-xl text-white md:px-[5%] md:mt-[65px]">
        <div className="flex flex-col gap-3 lg:items-center">
          <p className="lg:text-sm lg:text-center">
            © {currentYear} - SecureFence Solutions. All rights reserved.
          </p>
          <p className="lg:text-[13px] text-lg opacity-75 leading-5 lg:text-center">
            This website is owned and operated by SecureFence Installations LLC
          </p>
        </div>
        <div className="flex items-center gap-3 lg:text-base md:flex-col md:gap-2">
          {linksData.map((link, i) => (
            <Link href={link.href} key={i} className="lg:text-sm font-semibold">
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
