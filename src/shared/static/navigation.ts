import { SVGProps, ComponentType } from "react";

import * as Icon from "@/assets/svg";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type SubmenuColumn = {
  big?: boolean;
  title?: string;
  links?: { size?: string; label?: string; href?: string }[];
};

export type NavItem = {
  id: number;
  href: string;
  text?: string;
  ariaLabel?: string;
  Icon?: IconComponent;
  submenu?: SubmenuColumn[];
};

export const navigation: NavItem[] = [
  { id: 1, Icon: Icon.Apple, ariaLabel: "Apple", href: "#" },
  {
    id: 2,
    href: "#",
    text: "Store",
    submenu: [
      {
        big: true,
        title: "Shop",
        links: [
          { label: "Shop the Latest", href: "#", size: "big" },
          { label: "Mac", href: "#", size: "big" },
          { label: "iPad", href: "#", size: "big" },
          { label: "iPhone", href: "#", size: "big" },
          { label: "Apple Watch", href: "#", size: "big" },
          { label: "Apple Vision Pro", href: "#", size: "big" },
          { label: "AirPods", href: "#", size: "big" },
          { label: "Accessories", href: "#", size: "big" },
        ],
      },
      {
        title: "Quick Links",
        links: [
          { label: "Find a Store", href: "#" },
          { label: "Order Status", href: "#" },
          { label: "Apple Trade In", href: "#" },
          { label: "Financing", href: "#" },
          { label: "Personal Setup", href: "#" },
        ],
      },
      {
        title: "Shop Special Stores",
        links: [
          { label: "Certified Refurbished", href: "#" },
          { label: "Education", href: "#" },
          { label: "Business", href: "#" },
          { label: "Veterans and Military", href: "#" },
          { label: "Government", href: "#" },
        ],
      },
    ],
  },
  {
    id: 3,
    text: "Mac",
    href: "#",
    submenu: [
      {
        big: true,
        title: "Explore Mac",
        links: [
          { label: "Explore All Mac", href: "#", size: "big" },
          { label: "MacBook Air", href: "#", size: "big" },
          { label: "MacBook Pro", href: "#", size: "big" },
          { label: "iMac", href: "#", size: "big" },
          { label: "Mac mini", href: "#", size: "big" },
          { label: "Mac Studio", href: "#", size: "big" },
          { label: "Mac Pro", href: "#", size: "big" },
          { label: "Displays", href: "#", size: "big" },
          { label: "Compare Mac", href: "#", size: "big" },
          { label: "Switch from PC to Mac", href: "#", size: "big" },
        ],
      },
      {
        title: "Shop Mac",
        links: [
          { label: "Shop Mac", href: "#" },
          { label: "Help Me Choose", href: "#" },
          { label: "Mac Accessories", href: "#" },
          { label: "Apple Trade In", href: "#" },
          { label: "Financing", href: "#" },
        ],
      },
      {
        title: "More from Mac",
        links: [
          { label: "Mac Support", href: "#" },
          { label: "AppleCare", href: "#" },
          { label: "macOS Tahoe", href: "#" },
          { label: "Apple Intelligence", href: "#" },
          { label: "Apps by Apple", href: "#" },
          { label: "Continuity", href: "#" },
          { label: "iCloud+", href: "#" },
          { label: "Mac for Business", href: "#" },
          { label: "Education", href: "#" },
          { label: "Accessibility", href: "#" },
        ],
      },
    ],
  },
  {
    id: 4,
    text: "iPad",
    href: "#",
    submenu: [
      {
        big: true,
        title: "Explore iPad",
        links: [
          { label: "Explore All iPad", href: "#", size: "big" },
          { label: "iPad Pro", href: "#", size: "big" },
          { label: "iPad Air", href: "#", size: "big" },
          { label: "iPad", href: "#", size: "big" },
          { label: "iPad mini", href: "#", size: "big" },
          { label: "Apple Pencil", href: "#", size: "big" },
          { label: "Keyboards", href: "#", size: "big" },
          { label: "Compare iPad", href: "#", size: "big" },
          { label: "Why iPad", href: "#", size: "big" },
        ],
      },
      {
        title: "Shop iPad",
        links: [
          { label: "Shop iPad", href: "#" },
          { label: "iPad Accessories", href: "#" },
          { label: "Apple Trade In", href: "#" },
          { label: "Financing", href: "#" },
        ],
      },
      {
        title: "More from iPad",
        links: [
          { label: "iPad Support", href: "#" },
          { label: "AppleCare", href: "#" },
          { label: "iPadOS 26", href: "#" },
          { label: "Apple Intelligence", href: "#" },
          { label: "Apps by Apple", href: "#" },
          { label: "iCloud+", href: "#" },
          { label: "Education", href: "#" },
          { label: "Accessibility", href: "#" },
        ],
      },
    ],
  },
  {
    id: 5,
    text: "iPhone",
    href: "#",
    submenu: [
      {
        big: true,
        title: "Explore iPhone",
        links: [
          { label: "Explore All iPhone", href: "#", size: "big" },
          { label: "iPhone 17 Pro", href: "#", size: "big" },
          { label: "iPhone Air", href: "#", size: "big" },
          { label: "iPhone 17", href: "#", size: "big" },
          { label: "iPhone 16", href: "#", size: "big" },
          { label: "iPhone 16e", href: "#", size: "big" },
          { label: "Compare iPhone", href: "#", size: "big" },
          { label: "Switch from Android", href: "#", size: "big" },
        ],
      },
      {
        title: "Shop iPhone",
        links: [
          { label: "Shop iPhone", href: "#" },
          { label: "iPhone Accessories", href: "#" },
          { label: "Apple Trade In", href: "#" },
          { label: "Carrier Deals at Apple", href: "#" },
          { label: "Financing", href: "#" },
        ],
      },
      {
        title: "More from iPhone",
        links: [
          { label: "iPhone Support", href: "#" },
          { label: "AppleCare", href: "#" },
          { label: "iOS 26", href: "#" },
          { label: "Apple Intelligence", href: "#" },
          { label: "Apps by Apple", href: "#" },
          { label: "iPhone Privacy", href: "#" },
          { label: "iCloud+", href: "#" },
          { label: "Wallet, Pay, Card", href: "#" },
          { label: "Siri", href: "#" },
          { label: "Accessibility", href: "#" },
        ],
      },
    ],
  },
  {
    id: 6,
    text: "Watch",
    href: "#",
    submenu: [
      {
        big: true,
        title: "Explore Watch",
        links: [
          { label: "Explore All Apple Watch", href: "#", size: "big" },
          { label: "Apple Watch Ultra 3", href: "#", size: "big" },
          { label: "Apple Watch Series 10", href: "#", size: "big" },
          { label: "Apple Watch SE", href: "#", size: "big" },
          { label: "Apple Watch Nike", href: "#", size: "big" },
          { label: "Apple Watch Hermès", href: "#", size: "big" },
          { label: "Compare Watch", href: "#", size: "big" },
          { label: "Why Apple Watch", href: "#", size: "big" },
        ],
      },
      {
        title: "Shop Watch",
        links: [
          { label: "Shop Apple Watch", href: "#" },
          { label: "Apple Watch Studio", href: "#" },
          { label: "Apple Watch Bands", href: "#" },
          { label: "Apple Watch Accessories", href: "#" },
          { label: "Apple Trade In", href: "#" },
          { label: "Financing", href: "#" },
        ],
      },
      {
        title: "More from Watch",
        links: [
          { label: "Apple Watch Support", href: "#" },
          { label: "AppleCare", href: "#" },
          { label: "watchOS 11", href: "#" },
          { label: "Apple Fitness+", href: "#" },
          { label: "Apple Intelligence", href: "#" },
          { label: "Apps by Apple", href: "#" },
          { label: "Bands", href: "#" },
          { label: "iCloud+", href: "#" },
          { label: "Education", href: "#" },
          { label: "Accessibility", href: "#" },
        ],
      },
    ],
  },
  {
    id: 7,
    text: "Vision",
    href: "#",
    submenu: [
      {
        big: true,
        title: "Explore Vision",
        links: [
          { label: "Explore All Apple Vision Pro", href: "#", size: "big" },
          { label: "Apple Vision Pro", href: "#", size: "big" },
          { label: "Guided Tour", href: "#", size: "big" },
          { label: "Tech Specs", href: "#", size: "big" },
        ],
      },
      {
        title: "Shop Vision",
        links: [
          { label: "Shop Apple Vision Pro", href: "#" },
          { label: "Apple Vision Pro Accessories", href: "#" },
          { label: "Apple Trade In", href: "#" },
          { label: "Financing", href: "#" },
        ],
      },
      {
        title: "More from Vision",
        links: [
          { label: "Apple Vision Pro Support", href: "#" },
          { label: "AppleCare", href: "#" },
          { label: "visionOS", href: "#" },
          { label: "Apps by Apple", href: "#" },
          { label: "iCloud+", href: "#" },
          { label: "Accessibility", href: "#" },
        ],
      },
    ],
  },
  {
    id: 8,
    text: "AirPods",
    href: "#",
    submenu: [
      {
        big: true,
        title: "Explore AirPods",
        links: [
          { label: "Explore All AirPods", href: "#", size: "big" },
          { label: "AirPods Pro 3rd generation", href: "#", size: "big" },
          { label: "AirPods 4th generation", href: "#", size: "big" },
          { label: "AirPods 2nd generation", href: "#", size: "big" },
          { label: "AirPods Max", href: "#", size: "big" },
          { label: "Compare AirPods", href: "#", size: "big" },
        ],
      },
      {
        title: "Shop AirPods",
        links: [
          { label: "Shop AirPods", href: "#" },
          { label: "AirPods Accessories", href: "#" },
          { label: "Apple Trade In", href: "#" },
          { label: "Financing", href: "#" },
        ],
      },
      {
        title: "More from AirPods",
        links: [
          { label: "AirPods Support", href: "#" },
          { label: "AppleCare", href: "#" },
          { label: "Apple Music", href: "#" },
          { label: "iCloud+", href: "#" },
          { label: "Accessibility", href: "#" },
        ],
      },
    ],
  },
  {
    id: 9,
    text: "TV & Home",
    href: "#",
    submenu: [
      {
        big: true,
        title: "Explore TV & Home",
        links: [
          { label: "Explore TV & Home", href: "#", size: "big" },
          { label: "Apple TV 4K", href: "#", size: "big" },
          { label: "HomePod", href: "#", size: "big" },
          { label: "HomePod mini", href: "#", size: "big" },
        ],
      },
      {
        title: "Shop TV & Home",
        links: [
          { label: "Shop Apple TV 4K", href: "#" },
          { label: "Shop HomePod", href: "#" },
          { label: "TV & Home Accessories", href: "#" },
        ],
      },
      {
        title: "More from TV & Home",
        links: [
          { label: "Apple TV Support", href: "#" },
          { label: "HomePod Support", href: "#" },
          { label: "AppleCare", href: "#" },
          { label: "Apple TV app", href: "#" },
          { label: "Apple Music", href: "#" },
          { label: "Siri", href: "#" },
          { label: "AirPlay", href: "#" },
          { label: "iCloud+", href: "#" },
          { label: "Home app", href: "#" },
          { label: "Accessories", href: "#" },
          { label: "Apple Store Account", href: "#" },
          { label: "Accessibility", href: "#" },
        ],
      },
    ],
  },
  {
    id: 10,
    text: "Entertainment",
    href: "#",
    submenu: [
      {
        big: true,
        title: "Explore Entertainment",
        links: [
          { label: "Explore Entertainment", href: "#", size: "big" },
          { label: "Apple One", href: "#", size: "big" },
          { label: "Apple TV+", href: "#", size: "big" },
          { label: "Apple Music", href: "#", size: "big" },
          { label: "Apple Arcade", href: "#", size: "big" },
          { label: "Apple Fitness+", href: "#", size: "big" },
          { label: "Apple News+", href: "#", size: "big" },
          { label: "Apple Podcasts", href: "#", size: "big" },
          { label: "Apple Books", href: "#", size: "big" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Apple TV+ Support", href: "#" },
          { label: "Apple Music Support", href: "#" },
          { label: "Apple Arcade Support", href: "#" },
          { label: "Apple Fitness+ Support", href: "#" },
          { label: "Apple News+ Support", href: "#" },
          { label: "Apple Podcasts Support", href: "#" },
          { label: "Apple Books Support", href: "#" },
        ],
      },
    ],
  },
  {
    id: 11,
    text: "Accessories",
    href: "#",
    submenu: [
      {
        big: true,
        title: "Shop Accessories",
        links: [
          { label: "Shop All Accessories", href: "#", size: "big" },
          { label: "Mac", href: "#", size: "big" },
          { label: "iPad", href: "#", size: "big" },
          { label: "iPhone", href: "#", size: "big" },
          { label: "Apple Watch", href: "#", size: "big" },
          { label: "Apple Vision Pro", href: "#", size: "big" },
          { label: "AirPods", href: "#", size: "big" },
          { label: "TV & Home", href: "#", size: "big" },
        ],
      },
      {
        title: "Explore Accessories",
        links: [
          { label: "Made by Apple", href: "#" },
          { label: "Beats by Dr. Dre", href: "#" },
          { label: "AirTag", href: "#" },
        ],
      },
      {
        title: "More from Accessories",
        links: [
          { label: "Accessories Support", href: "#" },
          { label: "AppleCare", href: "#" },
          { label: "Gift Cards", href: "#" },
        ],
      },
    ],
  },
  {
    id: 12,
    text: "Support",
    href: "#",
    submenu: [
      {
        big: true,
        title: "Get Help",
        links: [
          { label: "iPhone", href: "#", size: "big" },
          { label: "Mac", href: "#", size: "big" },
          { label: "iPad", href: "#", size: "big" },
          { label: "Watch", href: "#", size: "big" },
          { label: "AirPods", href: "#", size: "big" },
          { label: "Music", href: "#", size: "big" },
          { label: "TV", href: "#", size: "big" },
          { label: "Vision", href: "#", size: "big" },
          { label: "Support Site Map", href: "#", size: "big" },
        ],
      },
      {
        title: "Helpful Topics",
        links: [
          { label: "Get AppleCare+", href: "#" },
          { label: "Check Coverage", href: "#" },
          { label: "Find My", href: "#" },
          { label: "Accessibility", href: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Apple Support Community", href: "#" },
          { label: "Apple Support Videos", href: "#" },
          { label: "Contact Support", href: "#" },
        ],
      },
    ],
  },
  { id: 13, Icon: Icon.Search, ariaLabel: "Search", href: "#" },
  { id: 14, Icon: Icon.Bag, ariaLabel: "Bag", href: "#" },
];
