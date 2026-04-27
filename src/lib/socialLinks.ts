import { SiFacebook, SiInstagram, SiTiktok } from "react-icons/si";
import type { IconType } from "react-icons";

interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

export const SocialLinks = {
  Instagram: {
    name: "Instagram",
    url: "https://instagram.com",
    icon: SiInstagram,
  },
  TikTok: {
    name: "TikTok",
    url: "https://tiktok.com",
    icon: SiTiktok,
  },
  Facebook: {
    name: "Facebook",
    url: "https://facebook.com",
    icon: SiFacebook,
  },
} satisfies Record<string, SocialLink>;

export const SocialLinksArray = Object.values(SocialLinks);