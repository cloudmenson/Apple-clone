"use client";

import { footerNav, footerInfo } from "@/shared";

import { FooterColumn } from "./components/FooterColumn";

export const Footer = () => {
  const columns = [
    [1, 2], // Shop and Learn + Wallet
    [3, 4], // Account + Entertainment
    [5], // Apple Store
    [6, 7, 8, 9], // For Business / Education / Healthcare / Government
    [10, 11], // Apple Values + About Apple
  ];

  return (
    <footer className="mx-auto h-full w-full max-w-[980px] bg-[#f5f5f7] px-[22px] pt-[56px]">
      <section className="border-b border-[#00000028] pt-[17px] pb-[11px]">
        <ul>
          {footerInfo.map((i) => (
            <li
              className="text-[gba(0, 0, 0, 0.56)] pb-[9.6px] text-[12px] leading-[16px] font-normal tracking-[-0.12px] text-[rgba(0,0,0,0.56)]"
              key={i.id}
            >
              {i.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="grid grid-cols-2 gap-[20px] pt-[32px] pb-[24px] md:grid-cols-5">
        {columns.map((ids, idx) => (
          <div key={idx}>
            {footerNav
              .filter((item) => ids.includes(item.id))
              .map((col) => (
                <FooterColumn
                  key={col.id}
                  title={col.label}
                  links={col.links}
                />
              ))}
          </div>
        ))}
      </section>
    </footer>
  );
};
