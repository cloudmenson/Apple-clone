import Link from "next/link";

import { cn } from "@/shared/lib";

type CTAButtonType = "filled" | "outline";

type CTAButtonProps = {
  href: string;
  className?: string;
  type?: CTAButtonType;
  children: React.ReactNode;
};

export const CTAButton = ({
  href,
  children,
  className,
  type = "filled",
}: CTAButtonProps) => {
  const mainClass = cn(
    "text-[14px] md:text-[17px] leading-[20px] w-full h-full max-w-fit transition duration-200 py-[8px] px-[16px] md:px-[20px] md:py-[11px] rounded-[35px] hover:bg-[#0068d1] active:bg-[#0051a2]",
    type === "outline" &&
      "bg-unset border border-[#0066CC] text-[#0066CC] hover:text-[#fff]",
    type === "filled" && "bg-[#0071E3] text-[#FFFFFF]",
    className
  );

  return (
    <Link className={mainClass} href={href}>
      {children}
    </Link>
  );
};
