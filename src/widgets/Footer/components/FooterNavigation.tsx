import { cn, footerNav, useIsMobile } from "@/shared";

import { FooterColumn } from "./FooterColumn";
import { FooterDropdown } from "./FooterDropdown";

const columns = [
  [1, 2], // Shop and Learn + Wallet
  [3, 4], // Account + Entertainment
  [5], // Apple Store
  [6, 7, 8, 9], // For Business / Education / Healthcare / Government
  [10, 11], // Apple Values + About Apple
];

export const FooterNavigation = ({}) => {
  const { isMobile } = useIsMobile(833);

  return (
    <section
      className={cn(
        "grid grid-cols-2 gap-[20px] pt-[32px] pb-[24px] md:grid-cols-5",
        isMobile && "flex flex-col gap-2"
      )}
    >
      {!isMobile && (
        <>
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
        </>
      )}

      {isMobile && (
        <>
          {footerNav.map((item) => (
            <FooterDropdown data={item} key={item.id} />
          ))}
        </>
      )}
    </section>
  );
};
