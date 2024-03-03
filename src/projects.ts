import type { Project } from "./types";

const projects: Project[] = [
  {
    title: "Open Source Projects",
    repo: "otofuda/otofuda.github.io",
    href: "https://otofuda.github.io/"
  },
  {
    title: "Chart Editor V2",
    repo: "otofuda/chart-editor",
    href: "https://otofuda.github.io/chart-editor/"
  },
  {
    title: "Otofuda Portal",
    repo: "otofuda/portal",
    href: "https://otofuda.com"
  },
  {
    title: "StoryBuilder",
    repo: "otofuda/story-builder",
    href: "https://otofuda.github.io/story-builder/"
  },
  {
    title: "Chart Types",
    repo: "otofuda/chart-types",
    href: "https://github.com/otofuda/chart-types/blob/master/README.md"
  }
] as const;

export default projects;
