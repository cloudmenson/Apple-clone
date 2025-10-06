export type FooterColumn = {
  href: string;
  label: string;
};

export type FooterItem = {
  id: number;
  label: string;
  column?: number;
  links: FooterColumn[];
};

export const footerNav: FooterItem[] = [
  {
    id: 1,
    label: "Shop and Learn",
    links: [
      { label: "Store", href: "#" },
      { label: "Mac", href: "#" },
      { label: "iPad", href: "#" },
      { label: "iPhone", href: "#" },
      { label: "Watch", href: "#" },
      { label: "Vision", href: "#" },
      { label: "AirPods", href: "#" },
      { label: "TV & Home", href: "#" },
      { label: "AirTag", href: "#" },
      { label: "Accessories", href: "#" },
      { label: "Gift Cards", href: "#" },
    ],
  },
  {
    id: 2,
    label: "Apple Wallet",
    links: [
      { label: "Wallet", href: "#" },
      { label: "Apple Card", href: "#" },
      { label: "Apple Pay", href: "#" },
      { label: "Apple Cash", href: "#" },
    ],
  },
  {
    id: 3,
    label: "Account",
    links: [
      { label: "Manage Your Apple Account", href: "#" },
      { label: "Apple Store Account", href: "#" },
      { label: "iCloud.com", href: "#" },
    ],
  },
  {
    id: 4,
    label: "Entertainment",
    links: [
      { label: "Apple One", href: "#" },
      { label: "Apple TV+", href: "#" },
      { label: "Apple Music", href: "#" },
      { label: "Apple Arcade", href: "#" },
      { label: "Apple Fitness+", href: "#" },
      { label: "Apple News+", href: "#" },
      { label: "Apple Podcasts", href: "#" },
      { label: "Apple Books", href: "#" },
      { label: "App Store", href: "#" },
    ],
  },
  {
    id: 5,
    label: "Apple Store",
    links: [
      { label: "Find a Store", href: "#" },
      { label: "Genius Bar", href: "#" },
      { label: "Today at Apple", href: "#" },
      { label: "Group Reservations", href: "#" },
      { label: "Apple Camp", href: "#" },
      { label: "Apple Store App", href: "#" },
      { label: "Certified Refurbished", href: "#" },
      { label: "Apple Trade In", href: "#" },
      { label: "Financing", href: "#" },
      { label: "Carrier Deals at Apple", href: "#" },
      { label: "Order Status", href: "#" },
      { label: "Shopping Help", href: "#" },
    ],
  },
  {
    id: 6,
    label: "For Business",
    links: [
      { label: "Apple and Business", href: "#" },
      { label: "Shop for Business", href: "#" },
    ],
  },
  {
    id: 7,
    label: "For Education",
    links: [
      { label: "Apple and Education", href: "#" },
      { label: "Shop for K-12", href: "#" },
      { label: "Shop for College", href: "#" },
    ],
  },
  {
    id: 8,
    label: "For Healthcare",
    links: [{ label: "Apple and Healthcare", href: "#" }],
  },
  {
    id: 9,
    label: "For Government",
    links: [
      { label: "Apple and Government", href: "#" },
      { label: "Shop for Veterans and Military", href: "#" },
      { label: "Shop for State and Local Employees", href: "#" },
      { label: "Shop for Federal Employees", href: "#" },
    ],
  },
  {
    id: 10,
    label: "Apple Values",
    links: [
      { label: "Accessibility", href: "#" },
      { label: "Education", href: "#" },
      { label: "Environment", href: "#" },
      { label: "Inclusion and Diversity", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Racial Equity and Justice", href: "#" },
      { label: "Supply Chain Innovation", href: "#" },
    ],
  },
  {
    id: 11,
    label: "About Apple ",
    links: [
      { label: "Newsroom", href: "#" },
      { label: "Apple Leadership", href: "#" },
      { label: "Career Opportunities", href: "#" },
      { label: "Investors", href: "#" },
      { label: "Ethics & Compliance", href: "#" },
      { label: "Events", href: "#" },
      { label: "Contact Apple", href: "#" },
    ],
  },
];
export const footerInfo = [
  {
    id: 1,
    text: "1. Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade‑in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In‑store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores and may vary between in‑store and online trade‑in. Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel, or limit quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade-in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.",
  },
  {
    id: 2,
    text: "To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.",
  },
  {
    id: 3,
    text: "Apple Payments Services LLC, a subsidiary of Apple Inc., is a service provider of Goldman Sachs Bank USA for Apple Card and Savings accounts. Neither Apple Inc. nor Apple Payments Services LLC is a bank.",
  },
  {
    id: 4,
    text: "If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.",
  },
  {
    id: 5,
    text: "Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.",
  },
  {
    id: 6,
    text: "A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV+.",
  },
  {
    id: 7,
    text: "Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.",
  },
];
