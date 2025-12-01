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
    href: "https://www.instagram.com/otfdpr/",
    icon: "mdi:instagram"
  },
  {
    href: "https://www.facebook.com/profile.php?id=61578734092510",
    icon: "mdi:facebook"
  },
  {
    href: "https://x.com/otofuda",
    icon: "mdi:twitter"
  }
] as const;

export default links;
