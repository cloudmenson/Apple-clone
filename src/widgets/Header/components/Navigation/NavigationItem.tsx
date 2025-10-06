"use client";

import Link from "next/link";

import { NavItem } from "@/shared/static/navigation";

type NavigationItem = {
  i: NavItem;
};

export const NavigationItem = ({ i }: NavigationItem) => {
  return (
    <Link
      href={i.href}
      aria-label={i.ariaLabel || i.text}
      className="flex h-full w-fit items-center justify-center whitespace-nowrap"
    >
      <span className="text-[#a2a2a3]">{i.text && <span>{i.text}</span>}</span>

      {i.Icon && (
        <i.Icon
          focusable="false"
          className="h-auto w-[14px] text-[#a2a2a3]"
          aria-hidden={!(i.ariaLabel && i.ariaLabel.length > 0)}
        />
      )}
    </Link>
  );
};
