'use client';

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import IconBar from "@/components/icons/IconBar";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  headerRoutes: { title: string; href: string }[];
};

const MenuBar = ({ headerRoutes }: Props) => {
  const [openBar, setOpenBar] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpenBar(false);
  }, [pathname]);

  return (
    <>
      <div className="relative z-[60]">
        <IconBar onClick={() => setOpenBar(true)} />

        <AnimatePresence>
          {openBar && (
            <>
              {/* Backdrop */}
              <motion.div
                key="backdrop"
                className="fixed inset-0 z-40 bg-black/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpenBar(false)}
              />

              {/* Menu Panel */}
              <motion.div
                key="menu"
                className="absolute top-10 right-0 z-50 w-[260px] bg-white rounded-xl shadow-2xl p-5"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <div className="flex flex-col gap-4 text-center">
                  {headerRoutes.map((link, idx) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={idx}
                        href={link.href}
                        onClick={() => setOpenBar(false)}
                        className={`text-base font-semibold px-4 py-2 rounded-lg transition-all duration-200 ${
                          isActive
                            ? 'bg-primary text-white pointer-events-none'
                            : 'text-primary hover:bg-primary hover:text-white'
                        }`}
                      >
                        {link.title}
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default MenuBar;
