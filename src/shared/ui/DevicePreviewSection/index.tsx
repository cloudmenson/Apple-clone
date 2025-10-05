import Link from "next/link";
import { motion } from "framer-motion";

import { cn, CTAButton } from "@/shared";

type DevicePreviewProps = {
  href: string;
  size?: string;
  className?: string;
  imageClass?: string;
  titleClass?: string;
  leftLinkText?: string;
  img?: React.ReactNode;
  rightLinkHref?: string;
  rightLinkText?: string;
  subtitleClass?: string;
  animation?: object | false;
  title: string | (() => React.ReactNode);
  subtitle: string | (() => React.ReactNode);
};

export const DevicePreviewSection = ({
  img,
  href,
  title,
  subtitle,
  animation,
  className,
  titleClass,
  subtitleClass,
  rightLinkHref,
  size = "normal",
  rightLinkText = "Buy",
  leftLinkText = "Learn more",
}: DevicePreviewProps) => {
  const mainClass = cn("relative text-center bg-[#fff]", className);

  const mainTitleClass = cn(
    "mb-[4px] md:mb-[6px] text-[28.9px] leading-[36px] md:text-[51.3px] md:leading-[60px] font-semibold text-[#F5F5F7]",
    size === "normal" &&
      "leading-[36px] md:leading-[44px] text-[29.1px] md:text-[36.6px] mb-[4px] text-[#1d1d1f]",
    titleClass
  );

  const mainSubtitleClass = cn(
    "text-[16.9px] md:text-[28px] tracking-[0.2px] leading-[23px] md:leading-[32px] text-[#F5F5F7]",
    size === "normal" &&
      "md:leading-[20px] tracking-[0.2px] md:text-[19.5px] text-[#1d1d1f]",
    subtitleClass
  );

  const mainInnerWrapperClass = cn(
    "absolute inset-0 z-5 pt-[37px] md:pt-[60px]",
    size === "normal" && "pt-[37px] md:pt-[53px]"
  );

  const mainCTALinksClass = cn(
    "mt-[17px] md:mt-[20px] flex items-center justify-center gap-[17.4px]",
    size === "normal" && "mt-[13px] gap-[14.42px]"
  );

  return (
    <motion.section
      className={mainClass}
      {...(animation === false
        ? {}
        : {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.15 },
            transition: { duration: 0.6, ease: "easeOut" },
          })}
    >
      <Link className="absolute inset-0" href={href} />

      <>{img}</>

      <div className={mainInnerWrapperClass}>
        <motion.h2
          viewport={{ once: true }}
          className={mainTitleClass}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {typeof title === "string" ? title : title()}
        </motion.h2>

        <motion.p
          viewport={{ once: true }}
          className={mainSubtitleClass}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {typeof subtitle === "string" ? subtitle : subtitle()}
        </motion.p>

        <motion.div
          viewport={{ once: true }}
          className={mainCTALinksClass}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <CTAButton href={href}>{leftLinkText}</CTAButton>

          {rightLinkHref && (
            <CTAButton type="outline" href={rightLinkHref}>
              {rightLinkText}
            </CTAButton>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};
