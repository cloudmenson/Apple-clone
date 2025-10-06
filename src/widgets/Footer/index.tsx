"use client";

import Link from "next/link";

import { cn, useIsMobile } from "@/shared";

import { FooterInfo } from "./components/FooterInfo";
import { FooterTerms } from "./components/FooterTerms";
import { FooterNavigation } from "./components/FooterNavigation";

export const Footer = () => {
  const { isMobile } = useIsMobile(833);

  return (
    <footer
      className={cn(
        "mx-auto h-full w-full max-w-[980px] bg-[#f5f5f7] pt-[56px]",
        isMobile ? "px-[16px]" : "px-[22px]"
      )}
    >
      <FooterInfo />

      <FooterNavigation />

      <p className="mb-[12px] text-center text-left text-[12px] leading-[16px] text-[rgba(0,0,0,0.56)]">
        More ways to shop:&nbsp;
        <Link href="#" className="text-[#06c] hover:underline">
          Find an Apple Store
        </Link>
        &nbsp;or&nbsp;
        <Link href="#" className="text-[#06c] hover:underline">
          other retailer
        </Link>
        &nbsp;near you.&nbsp; Or call&nbsp;
        <Link href="tel:18006927753" className="text-[#06c] hover:underline">
          1-800-MY-APPLE
        </Link>
        &nbsp;(1-800-692-7753).
      </p>

      <FooterTerms />
    </footer>
  );
};
