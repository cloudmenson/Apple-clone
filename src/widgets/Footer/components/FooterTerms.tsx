"use client";

import { cn, useIsMobile } from "@/shared";

export const FooterTerms = () => {
  const { isMobile } = useIsMobile();

  return (
    <section
      className={cn(
        "flex flex-row items-center justify-between gap-[12px] border-t border-[rgba(0,0,0,0.16)] py-[12px] text-[12px] text-[rgba(0,0,0,0.56)]",
        isMobile && "flex flex-col-reverse items-start"
      )}
    >
      <div
        className={cn(
          "flex flex-col flex-row items-center gap-[8px] gap-[25px]",
          isMobile && "flex-col items-start gap-[12px]"
        )}
      >
        <p>Copyright © 2025 Apple Inc. All rights reserved.</p>

        <div className="flex items-center gap-[8px] text-[12px] leading-[16px]">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>

          <span>|</span>

          <a href="#" className="hover:underline">
            Terms of Use
          </a>

          <span>|</span>

          <a href="#" className="hover:underline">
            Sales and Refunds
          </a>

          <span>|</span>

          <a href="#" className="hover:underline">
            Legal
          </a>

          <span>|</span>

          <a href="#" className="hover:underline">
            Site Map
          </a>
        </div>
      </div>

      <div className="cursor-pointer text-[12px] hover:underline">
        United States
      </div>
    </section>
  );
};
