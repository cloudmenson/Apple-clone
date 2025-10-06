"use client";

import { useState } from "react";

import { NavItem } from "@/shared/static/navigation";
import { cn, navigation, useIsMobile } from "@/shared";

import { NavigationItem } from "./NavigationItem";
import { NavigationSubitem } from "./NavigationSubitem";

type Navigation = {
  headerRef: React.RefObject<HTMLDivElement | null>;
};

export const Navigation = ({ headerRef }: Navigation) => {
  const { isMobile } = useIsMobile(833);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseLeave = (e: React.MouseEvent<HTMLUListElement>) => {
    const next = e.relatedTarget as Node | null;

    if (next && headerRef?.current?.contains(next)) return;

    if (next && e.currentTarget.contains(next)) return;

    setActiveIndex(null);
  };

  return (
    <ul
      onMouseLeave={handleMouseLeave}
      className={cn(
        "mx-[-8px] mx-auto flex h-full w-auto max-w-[1024px] items-center px-[22px]",
        isMobile ? "justify-end gap-2 px-[16px]" : "justify-between"
      )}
    >
      {navigation
        .filter((i) => (isMobile ? !i.mobileHidden : !i.desktopHidden))
        .map((i: NavItem, idx) => (
          <li
            key={i.id}
            onMouseEnter={() => setActiveIndex(idx)}
            className={cn(
              "group h-full w-fit px-[8px] text-[12px] leading-[12px] font-normal",
              isMobile && idx === 0 ? "mr-auto" : ""
            )}
          >
            <NavigationItem i={i} />

            {i.submenu && activeIndex === idx && <NavigationSubitem i={i} />}
          </li>
        ))}
    </ul>
  );
};
