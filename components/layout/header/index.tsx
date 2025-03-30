"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { headerRoutes } from "@/utils/data/routes";
import { usePathname, useRouter } from "next/navigation";
import { contactInfo } from "@/utils/data/contactInfo";
import IconPhone from "@/components/icons/IconPhone";
import MenuBar from "@/components/layout/header/MenuBar";
import useHash from "@/utils/hooks/useHash";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [headerType, setHeaderType] = useState(
    pathname === "/" ? "transparent" : "sticky"
  );

  const scrollHandler = () => {
    if (pathname === "/") {
      if (window.pageYOffset >= 250) {
        setHeaderType("fixed");
      } else {
        setHeaderType("transparent");
      }
    }
  };
  /* eslint-disable */
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
  const currentHash = useHash();

  const [hash, setHash] = useState(currentHash);
  const handleLickClick = (href: string) => {
    setHash(href);
    router.push(href);
  };

  useEffect(() => {
    if (currentHash) {
      setHash("/" + currentHash);
    }
  }, [currentHash]);

  console.log(headerType, "headerType");
  return (
    <header
      className={`w-full flex items-center justify-between gap-3 px-[100px] py-5 z-30 xxl:px-[5%] md:!py-4 ${
        headerType || ""
      }`}
    >
      <Link
        href="/"
        className="3xl:[&>img]:!h-20 md:[&>img]:!h-12 md:[&>img]:!w-[120px]"
        onClick={() => {
          setHash("");
        }}
      >
        <Image
          src={`/images/logo.png`}
          alt="Truck and Bus"
          width={210}
          height={93}
          className="object-contain object-left"
        />
      </Link>
      <nav
        className={`flex items-center gap-5 bg-white py-2 px-4 rounded-[100px] box-shadow-nav 3xl:gap-2 xxl:hidden ${
          headerType === "transparent" ? "bg-white" : "!bg-primary"
        }`}
      >
        {headerRoutes.map((route, idx) => {
          const isActive = hash === route.href;
          return (
            <Link
              key={idx}
              href={route.href}
              onClick={() => handleLickClick(route.href)}
              className={`text-lg p-[10px]  font-medium 3xl:text-base  3xl:p-1 rounded-[100px]
                            ${isActive ? "" : "headerLink"}
                             ${
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
      <div className="flex items-center gap-8 md:gap-4">
        <a
          href={`tel: ${contactInfo.phone}`}
          className={`${
            headerType === "transparent" ? "text-white" : "text-black"
          }           } text-xl md:text-sm flex items-center gap-3 md:gap-2 max-w-fit [&_svg]:w-6 group text-black sm:gap-1`}
        >
          <IconPhone
            className={`${
              headerType === "transparent"
                ? "[&_path]:stroke-white "
                : "[&_path]:stroke-black"
            } `}
          />
          {contactInfo.phone}
        </a>

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
