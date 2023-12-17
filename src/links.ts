import type { Link } from "./types";

const links: Link[] = [
  {
    href: "https://otofuda.com",
    icon: "web"
  },
  {
    href: "https://github.com/otofuda",
    icon: "github"
  },
  {
    href: "https://www.youtube.com/@otofuda",
    icon: "youtube"
  },
  {
    href: "https://twitter.com/otofuda",
    icon: "twitter"
  }
] as const;

export default links;
