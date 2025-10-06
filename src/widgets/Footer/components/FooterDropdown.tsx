"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/shared";
import * as Icon from "@/assets/svg";
import { FooterItem } from "@/shared/static/footer";

type FooterDropdownProp = {
  data: FooterItem;
};

export const FooterDropdown = ({ data }: FooterDropdownProp) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-full w-full border-b border-[#00000028] py-[10px]">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer items-center justify-between px-[5px] select-none"
      >
        <h3 className="text-[12px] leading-[16px] font-normal text-[#3a3a3b]">
          {data.label}
        </h3>

        <Icon.Arrow
          className={cn(
            "text-[#3a3a3b] transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="overflow-hidden"
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {data.links.map((link, idx) => (
              <li
                key={idx}
                className="px-[14px] py-[6px] text-[12px] text-[#3a3a3b] hover:underline"
              >
                {link.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
