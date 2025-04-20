"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { headerRoutes } from "@/utils/data/routes";
import { usePathname, useRouter } from "next/navigation";
import { contactInfo } from "@/utils/data/contactInfo";
import IconPhone from "@/components/icons/IconPhone";
import MenuBar from "@/components/layout/header/MenuBar";
import useHash from "@/utils/hooks/useHash";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [headerType, setHeaderType] = useState(pathname === "/" ? "transparent" : "sticky");
  const [hash, setHash] = useState("");
  const currentHash = useHash();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll for transparent header
  const scrollHandler = () => {
    if (pathname === "/") {
      setHeaderType(window.pageYOffset >= 250 ? "fixed" : "transparent");
    }
  };

  useEffect(() => {
    if (pathname === "/") {
      setHeaderType("transparent");
      window.addEventListener("scroll", scrollHandler);
      return () => window.removeEventListener("scroll", scrollHandler);
    } else {
      setHash("");
      setHeaderType("sticky");
    }
  }, [pathname]);

  useEffect(() => {
    if (currentHash) setHash("/" + currentHash);
  }, [currentHash]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDropdown]);

  const handleLinkClick = (href: string) => {
    setHash(href);
    router.push(href);
  };

  return (
    <header
      className={`w-full flex items-center justify-between gap-3 px-[100px] z-30 xxl:px-[5%] md:!py-4 ${
        headerType || ""
      }`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="3xl:[&>img]:!h-20 md:[&>img]:!h-12 md:[&>img]:!w-[120px]"
        onClick={() => setHash("")}
      >
        <Image
          src={`/images/logo.png`}
          alt="SecureFence"
          width={210}
          height={93}
          className="object-contain object-left"
        />
      </Link>

      {/* Nav Links */}
      <nav
        className={`flex items-center gap-5 py-2 px-4 rounded-[100px] box-shadow-nav 3xl:gap-2 xxl:hidden ${
          headerType === "transparent" ? "bg-white" : "!bg-primary"
        }`}
      >
        {headerRoutes.map((route, idx) => {
          const isHashRoute = route.href.startsWith("/#");
          const isActive = isHashRoute ? hash === route.href : pathname === route.href;

          return (
            <Link
              key={idx}
              href={route.href}
              onClick={() => handleLinkClick(route.href)}
              className={`text-lg p-[10px] font-medium 3xl:text-base 3xl:p-1 rounded-[100px] ${
                isActive ? "" : "headerLink"
              } ${
                headerType === "transparent"
                  ? isActive
                    ? "bg-primary text-white"
                    : "bg-white text-black"
                  : isActive
                  ? "bg-white text-black"
                  : "bg-primary text-white"
              }`}
            >
              {route.title}
            </Link>
          );
        })}
      </nav>

      {/* Phone Dropdown */}
      <div className="flex items-center gap-8 md:gap-4 relative" ref={dropdownRef}>
        <button
          onClick={() => setShowDropdown((prev) => !prev)}
          className={`flex items-center gap-2 text-xl md:text-sm font-medium ${
            headerType === "transparent" ? "text-white" : "text-black"
          }`}
        >
          <IconPhone
            className={`w-5 h-5 ${
              headerType === "transparent"
                ? "[&_path]:stroke-white"
                : "[&_path]:stroke-black"
            }`}
          />
          {contactInfo.phones[0].label}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              showDropdown ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown List */}
        {showDropdown && (
          <div className="absolute top-[calc(100%+8px)] right-0 bg-white border shadow-md rounded-md z-50 min-w-[180px]">
            {contactInfo.phones.map((phone, idx) => (
              <a
                key={idx}
                href={`tel:${phone.tel}`}
                className="block px-4 py-2 text-sm text-black hover:bg-gray-100 whitespace-nowrap"
              >
                {phone.label}
              </a>
            ))}
          </div>
        )}

        {/* Mobile Menu Icon */}
        <div
          className={`min-xxl:hidden ${
            headerType === "transparent" ? "[&_svg>path]:fill-white" : ""
          }`}
        >
          <MenuBar headerRoutes={headerRoutes} />
        </div>
      </div>
    </header>
  );
};

export default Header;
