"use client";

import { useState } from "react";

import { navigation } from "@/shared";

import { NavigationItem } from "./NavigationItem";
import { NavigationSubitem } from "./NavigationSubitem";
import { NavItem } from "@/shared/static/navigation";

type Navigation = {
  headerRef: React.RefObject<HTMLDivElement | null>;
};

export const Navigation = ({ headerRef }: Navigation) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseLeave = (e: React.MouseEvent<HTMLUListElement>) => {
    const next = e.relatedTarget as Node | null;

    if (next && headerRef?.current?.contains(next)) return;

    setActiveIndex(null);
  };

  return (
    <ul
      onMouseLeave={handleMouseLeave}
      className="mx-[-8px] mx-auto flex h-full w-auto max-w-[1024px] items-center justify-between px-[22px]"
    >
      {navigation.map((i: NavItem, idx) => (
        <li
          key={i.id}
          onMouseEnter={() => setActiveIndex(idx)}
          className="group h-full w-fit px-[8px] text-[12px] leading-[12px] font-normal text-[#cdcdcdfb] transition duration-400 hover:text-[#fffffffd]"
        >
          <NavigationItem i={i} />

          {i.submenu && activeIndex === idx && <NavigationSubitem i={i} />}
        </li>
      ))}
    </ul>
  );
};
