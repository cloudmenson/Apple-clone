import { footerInfo } from "@/shared";

export const FooterInfo = () => {
  return (
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
  );
};
