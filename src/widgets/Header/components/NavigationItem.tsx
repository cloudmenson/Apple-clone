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
      {i.text && <span>{i.text}</span>}

      {i.Icon && (
        <i.Icon
          focusable="false"
          aria-hidden={!(i.ariaLabel && i.ariaLabel.length > 0)}
          className="h-auto w-[14px] text-[#cdcdcdfb] transition duration-400 group-hover:text-[#fffffffd]"
        />
      )}
    </Link>
  );
};
