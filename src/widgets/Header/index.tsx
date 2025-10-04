import Link from "next/link";
// import Image from "next/image";

// import { Apple } from "@/assets";
import { navigation } from "@/shared";

export const Header = ({}) => {
  return (
    <header className="fixed top-0 left-0 z-[9999] w-full max-w-full bg-[rgba(24,24,24,0.8)] px-[22px] backdrop-blur-[20px] backdrop-saturate-180 select-none">
      <h1 className="visuallyhidden">Apple</h1>

      <ul className="mx-[-8px] mx-auto flex h-[44px] w-auto max-w-[1024px] items-center justify-between">
        {/* <Image src={Apple} alt="Apple" /> */}

        {navigation.map((i) => (
          <li
            key={i.id}
            className="px-[8px] text-[12px] leading-[12px] font-normal text-[#ffffffcc]"
          >
            <Link href={i.href}>{i.text}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};
