import type { Link } from "./types";

const links: Link[] = [
  {
    href: "https://otofuda.com",
    icon: "mdi:web"
  },
  {
    href: "https://github.com/otofuda",
    icon: "mdi:github"
  },
  {
    href: "https://www.youtube.com/@otofuda",
    icon: "mdi:youtube"
  },
  {
    href: "https://twitter.com/otofuda",
    icon: "mdi:twitter"
  }
] as const;

export default links;
