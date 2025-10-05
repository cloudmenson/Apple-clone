"use client";

import { useRef } from "react";

import { Navigation } from "./components/Navigation";

export const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <header className="fixed top-0 left-0 z-[9999] w-full max-w-full bg-[rgba(24,24,24,0.8)] backdrop-saturate-180 select-none">
      <div className="h-[44px] w-full">
        <h1 className="visuallyhidden">Apple</h1>

        <Navigation headerRef={headerRef} />
      </div>
    </header>
  );
};
