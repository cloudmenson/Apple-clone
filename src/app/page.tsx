"use client";

import Image from "next/image";

import { Footer, Header, Slider } from "@/widgets";
import { useIsMobile, DevicePreviewSection } from "@/shared";
import {
  card,
  ipadAir,
  tradeIn,
  cardMob,
  airpods3,
  iPhone17,
  macBookAir,
  ipadAirMob,
  tradeInMob,
  iPhone17Air,
  iPhone17Pro,
  iPhone17Mob,
  airpods3Mob,
  appleWatch11,
  ipadAirTitle,
  macBookAirMob,
  iPhone17ProMob,
  iPhone17AirMob,
  appleWatch11Mob,
} from "@/assets";

export default function Home() {
  const { isMobile } = useIsMobile();

  return (
    <section>
      <Header />

      <main className="mt-[44px] flex flex-col gap-[12px] bg-[#fff]">
        <DevicePreviewSection
          href="#"
          size="large"
          animation={false}
          rightLinkHref="#"
          rightLinkText="Buy"
          title="iPhone 17 Pro"
          className="bg-[#000]"
          subtitle="All out Pro."
          leftLinkText="Learn more"
          img={
            <Image
              alt="iPhone 17 Pro"
              src={isMobile ? iPhone17ProMob : iPhone17Pro}
              className="relative h-[500px] w-full object-cover md:h-[692px]"
            />
          }
        />

        <DevicePreviewSection
          href="#"
          size="large"
          rightLinkHref="#"
          title="iPhone Air"
          titleClass="text-[#1d1d1f]"
          subtitleClass="text-[#1d1d1f] max-w-[390px] mx-auto"
          subtitle={() => (
            <span className="flex flex-col">
              <span>The thinnest iPhone ever.</span>
              <span>With the power of pro inside.</span>
            </span>
          )}
          img={
            <Image
              alt="iPhone 17 Air"
              src={isMobile ? iPhone17AirMob : iPhone17Air}
              className="relative h-[500px] w-full object-cover md:h-[692px]"
            />
          }
        />

        <DevicePreviewSection
          href="#"
          size="large"
          rightLinkHref="#"
          title="iPhone 17"
          subtitle="Magichromatic."
          titleClass="text-[#1d1d1f]"
          subtitleClass="text-[#1d1d1f]"
          img={
            <Image
              alt="iPhone 17"
              src={isMobile ? iPhone17Mob : iPhone17}
              className="relative h-[500px] w-full object-cover md:h-[692px]"
            />
          }
        />

        <div className="grid grid-cols-1 gap-[12px] px-[12px] md:grid-cols-2">
          <DevicePreviewSection
            href="#"
            rightLinkHref="#"
            subtitleClass="text-[#1d1d1f]"
            titleClass="text-[#1d1d1f] uppercase"
            subtitle="The ultimate way to watch your health."
            img={
              <Image
                alt="Watch Series 11"
                src={isMobile ? appleWatch11Mob : appleWatch11}
                className="relative h-[500px] w-full object-cover md:h-[580px]"
              />
            }
            title={() => (
              <span>
                Watch <span className="font-normal">Series 11</span>
              </span>
            )}
          />

          <DevicePreviewSection
            href="#"
            rightLinkHref="#"
            title="AirPods Pro 3"
            img={
              <Image
                alt="AirPods Pro 3"
                src={isMobile ? airpods3Mob : airpods3}
                className="relative h-[500px] w-full object-cover md:h-[580px]"
              />
            }
            subtitle={() => (
              <span className="flex flex-col">
                <span>The world’s best in-ear</span>
                <span>Active Noise Cancellation.</span>
              </span>
            )}
          />

          <DevicePreviewSection
            href="#"
            rightLinkHref="#"
            title="MacBook Air"
            img={
              <Image
                alt="MacBook Air"
                src={isMobile ? macBookAirMob : macBookAir}
                className="relative h-[500px] w-full object-cover md:h-[580px]"
              />
            }
            subtitle={() => (
              <span className="flex flex-col">
                <span>Sky blue color.</span>
                <span>Sky high performance with M4.</span>
              </span>
            )}
          />

          <DevicePreviewSection
            href="#"
            rightLinkHref="#"
            titleClass="mb-[10px]"
            subtitle="Now supercharged by the M3 chip."
            img={
              <Image
                alt="iPad air"
                src={isMobile ? ipadAirMob : ipadAir}
                className="relative h-[500px] w-full object-cover md:h-[580px]"
              />
            }
            title={() => (
              <Image
                alt="iPad air"
                src={ipadAirTitle}
                className="mx-auto h-[33px] w-auto"
              />
            )}
          />

          <DevicePreviewSection
            href="#"
            leftLinkText="Get your estimate"
            title={() => <span>Trade In</span>}
            img={
              <Image
                alt="Trade In"
                src={isMobile ? tradeInMob : tradeIn}
                className="relative h-[500px] w-full object-cover md:h-[580px]"
              />
            }
            subtitle={() => (
              <span className="flex flex-col">
                <span>Get up to $200–$700</span>
                <span>in credit when you trade in</span>
                <span>iPhone 13 or higher.</span>
              </span>
            )}
          />

          <DevicePreviewSection
            href="#"
            rightLinkHref="#"
            rightLinkText="Apply now"
            title={() => <span>Card</span>}
            img={
              <Image
                alt="Card"
                src={isMobile ? cardMob : card}
                className="relative h-[500px] w-full object-cover md:h-[580px]"
              />
            }
            subtitle={() => (
              <span className="flex flex-col">
                <span>Get up to 3% Daily Cash back</span>
                <span>with every purchase.</span>
              </span>
            )}
          />
        </div>
      </main>

      <Slider />

      <Footer />
    </section>
  );
}
