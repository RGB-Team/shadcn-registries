type Author = {
  name: string;
  url: string;
  avatar: string;
};

type Registry = {
  github_markdown: string;
  github_registry: string;
  github_repo: string;
  repo_website: string;
};

export type RegistriesType = {
  title: string;
  tags: string[];
  slug: string;
  registry: Registry;
  authors: Author[];
};

export const Registries = [
  {
    title: "otp input",
    tags: ["shadcn ui", "nextjs", "react"],
    slug: "Otp-input-component",
    registry: {
      github_markdown:
        "https://raw.githubusercontent.com/BelkacemYerfa/test-shadcn-registres/refs/heads/dev/README.md",
      github_registry:
        "https://raw.githubusercontent.com/BelkacemYerfa/test-shadcn-registres/refs/heads/dev/public/registry.json",
      github_repo: "https://github.com/BelkacemYerfa/shadcn-extension",
      repo_website: "https://shadcn-extension.vercel.app",
    },
    authors: [
      {
        name: "BylkaYf",
        url: "https://x.com/BylkaYf",
        avatar:
          "https://pbs.twimg.com/profile_images/1574177524254384129/nMQ3eP2n_400x400.jpg",
      },
    ],
  },
  {
    title: "calendar",
    tags: ["shadcn ui", "react", "date"],
    slug: "calendar-component",
    registry: {
      github_markdown:
        "https://raw.githubusercontent.com/BelkacemYerfa/test-shadcn-registres/refs/heads/dev/README.md",
      github_registry:
        "https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/www/public/r/styles/new-york/calendar.json",
      github_repo: "https://github.com/shadcn-ui/ui",
      repo_website: "https://ui.shadcn.com",
    },
    authors: [
      {
        name: "shadcn",
        url: "https://twitter.com/shadcn",
        avatar:
          "https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg",
      },
    ],
  },
  {
    title: "calendar",
    tags: ["shadcn ui", "react", "date"],
    slug: "calendar-component",
    registry: {
      github_markdown:
        "https://raw.githubusercontent.com/BelkacemYerfa/test-shadcn-registres/refs/heads/dev/README.md",
      github_registry:
        "https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/www/public/r/styles/new-york/calendar.json",
      github_repo: "https://github.com/shadcn-ui/ui",
      repo_website: "https://ui.shadcn.com",
    },
    authors: [
      {
        name: "shadcn",
        url: "https://twitter.com/shadcn",
        avatar:
          "https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg",
      },
    ],
  },
  {
    title: "calendar",
    tags: ["shadcn ui", "react", "date"],
    slug: "calendar-component",
    registry: {
      github_markdown:
        "https://raw.githubusercontent.com/BelkacemYerfa/test-shadcn-registres/refs/heads/dev/README.md",
      github_registry:
        "https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/www/public/r/styles/new-york/calendar.json",
      github_repo: "https://github.com/shadcn-ui/ui",
      repo_website: "https://ui.shadcn.com",
    },
    authors: [
      {
        name: "shadcn",
        url: "https://twitter.com/shadcn",
        avatar:
          "https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg",
      },
    ],
  },
] satisfies RegistriesType[];
