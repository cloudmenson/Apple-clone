import Link from "next/link";

export const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => (
  <div className="mb-[24px]">
    <h3 className="mb-[8px] text-[12px] font-semibold text-[rgba(0,0,0,0.88)]">
      {title}
    </h3>

    <ul className="flex flex-col gap-[9.6px]">
      {links.map((link, idx) => (
        <li
          key={idx}
          className="cursor-pointer text-[12px] leading-[16px] text-[rgba(0,0,0,0.72)] hover:underline"
        >
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  </div>
);
