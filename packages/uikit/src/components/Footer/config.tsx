import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, YoutubeIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.tankswap.finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://blog.tankswap.finance/",
      },
      {
        label: "Community",
        href: "https://docs.tankswap.finance/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.tankswap.finance/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://tankswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.tankswap.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.tankswap.finance/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.tankswap.finance/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/tankswap",
      },
      {
        label: "Documentation",
        href: "https://docs.tankswap.finance",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@tankswap-1/s/tankswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.tankswap.finance/help/faq#is-tankswap-safe-has-tankswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.tankswap.finance/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/tankswap",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "English",
        href: "https://t.me/tankswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/tankswapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/tankswap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/PancakeSwapVN",
      },
      {
        label: "русский",
        href: "https://t.me/tankswap_ru",
      },
      {
        label: "Português",
        href: "https://t.me/tankswapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/tankswapES",
      },
      {
        label: "日本語",
        href: "https://t.me/tankswapJP",
      },
      {
        label: "Filipino",
        href: "https://t.me/tankswap_PH",
      },
      {
        label: "हिन्दी",
        href: "https://t.me/tankswap_INDIA",
      },
      {
        label: "한국어",
        href: "https://t.me/PancakeSwapSouthKorea",
      },
      {
        label: "Announcements",
        href: "https://t.me/PancakeSwapAnn",
      },
    ],
  },
  {
    label: "Reddit",
    icon: RedditIcon,
    href: "https://reddit.com/r/tankswap",
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://instagram.com/tankswap_official",
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/tankswap/",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.gg/tankswap",
  },
  {
    label: "Youtube",
    icon: YoutubeIcon,
    href: "https://www.youtube.com/@tankswap_official",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
