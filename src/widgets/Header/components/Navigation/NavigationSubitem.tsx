"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/shared";
import { NavItem } from "@/shared/static/navigation";

type NavigationSubitemProps = {
  i: NavItem;
};

export const NavigationSubitem = ({ i }: NavigationSubitemProps) => {
  return (
    <AnimatePresence>
      <motion.div
        exit={{ scaleY: 0 }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.15, 0.85, 0.35, 1],
        }}
        className="absolute top-[44px] left-0 w-screen origin-top bg-[rgba(24,24,24,0.95)] text-white backdrop-saturate-180"
      >
        <div className="mx-auto flex max-w-[1024px] px-[22px] pt-[40px] pb-[84px]">
          {i.submenu?.map((col, idx: number) => (
            <motion.div
              key={idx}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              className="flex flex-col gap-2 pr-[44px] nth-1:pr-[88px]"
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.3 + idx * 0.1,
              }}
            >
              <h4 className="text-[12px] leading-[16px] text-[#86868b]">
                {col.title}
              </h4>

              <ul
                className={cn(
                  "flex flex-col gap-2.5",
                  col.big === true && "gap-3.5"
                )}
              >
                {col.links?.map((link, idx: number) => (
                  <li
                    key={idx}
                    className={cn(
                      "text-[12px] leading-[16px] font-semibold text-[#cdcdcdfb] transition duration-400 hover:text-[#fffffffd]",
                      link.size === "big" &&
                        "text-[24px] leading-[24px] text-[#cdcdcdfb]"
                    )}
                  >
                    <Link href={link.href || "#"}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
