"use client";

import { useState } from "react";

import { navigation } from "@/shared";

import { NavigationItem } from "./NavigationItem";
import { NavigationSubitem } from "./NavigationSubitem";

export const Navigation = ({}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <ul className="mx-[-8px] mx-auto flex h-full w-auto max-w-[1024px] items-center justify-between px-[22px]">
      {navigation.map((i, idx) => (
        <li
          key={i.id}
          onMouseEnter={() => setActiveIndex(idx)}
          onMouseLeave={() => setActiveIndex(null)}
          className="group h-full w-fit px-[8px] text-[12px] leading-[12px] font-normal text-[#cdcdcdfb] transition duration-400 hover:text-[#fffffffd]"
        >
          <NavigationItem i={i} />

          {i.submenu && activeIndex === idx && <NavigationSubitem i={i} />}
        </li>
      ))}
    </ul>
  );
};
