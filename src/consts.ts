import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "PACMAN",
  EMAIL: "hustavojhon@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Blog minimalista.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/hustavojhon/",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/hustavojhon/"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/hustavojhon/",
  }
];