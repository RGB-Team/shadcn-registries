type Author = {
  name: string;
  url: string;
  avatar: string;
};

export type Registry = {
  github_markdown: string;
  github_registry: string;
  github_repo: string;
  repo_website: string;
};

export type RegistriesType = {
  title: string;
  searchDescription: string;
  tags: string[];
  slug: string;
  registry: Registry;
  authors: Author[];
  createdAt: Date;
};

export const Registries = [
  {
    title: "otp input",
    searchDescription: "this is a ui element made for testing by me",
    tags: [
      "Material-UI",
      "MUI",
      "Chakra UI",
      "Ant Design",
      "Semantic UI",
      "Blueprint",
      "React Bootstrap",
      "Evergreen",
      "Grommet",
      "Fluent UI",
      "Mantine",
      "Headless UI",
      "Tailwind UI",
      "Reactstrap",
      "Styled Components",
      "Emotion",
      "Radix UI",
      "Theme UI",
      "Rebass",
      "Polaris",
      "Onsen UI",
      "React Suite",
      "React Toolbox",
      "Baseweb",
      "NextUI",
      "PrimeReact",

      // Design Systems
      "Design Systems",
      "Storybook",
      "Atomic Design",
      "Figma",
      "Sketch",
      "InVision",
      "Zeplin",
      "Framer",
      "Adobe XD",
      "Component Libraries",
      "Themeable Components",
      "Styled System",
      "Lona",
      "Design Tokens",
      "UXPin",
      "DesignOps",
      "Accessibility",
      "ARIA",
      "A11y",
      "Responsive Design",
      "Dark Mode",
      "Color Systems",
      "Typography",
      "UI Patterns",
      "Grid Systems",
      "Icon Libraries",
      "Heroicons",
      "FontAwesome",
      "Feather Icons",
      "Material Icons",
    ],
    slug: "Otp-input-component",
    createdAt: new Date(2024, 8, 9),
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
    searchDescription:
      "this is a ui element made by shadcn and it is used as a testing resource",
    tags: [
      "Material-UI",
      "MUI",
      "Chakra UI",
      "Ant Design",
      "Semantic UI",
      "Blueprint",
      "React Bootstrap",
      "Evergreen",
      "Grommet",
      "Fluent UI",
      "Mantine",
      "Headless UI",
      "Tailwind UI",
      "Reactstrap",
      "Styled Components",
      "Emotion",
      "Radix UI",
      "Theme UI",
      "Rebass",
      "Polaris",
      "Onsen UI",
      "React Suite",
      "React Toolbox",
      "Baseweb",
      "NextUI",
      "PrimeReact",

      // Design Systems
      "Design Systems",
      "Storybook",
      "Atomic Design",
      "Figma",
      "Sketch",
      "InVision",
      "Zeplin",
      "Framer",
      "Adobe XD",
      "Component Libraries",
      "Themeable Components",
      "Styled System",
      "Lona",
      "Design Tokens",
      "UXPin",
      "DesignOps",
      "Accessibility",
      "ARIA",
      "A11y",
      "Responsive Design",
      "Dark Mode",
      "Color Systems",
      "Typography",
      "UI Patterns",
      "Grid Systems",
      "Icon Libraries",
      "Heroicons",
      "FontAwesome",
      "Feather Icons",
      "Material Icons",
    ],
    slug: "calendar-component",
    registry: {
      github_markdown:
        "https://raw.githubusercontent.com/BelkacemYerfa/test-shadcn-registres/refs/heads/dev/README.md",
      github_registry:
        "https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/www/public/r/styles/new-york/calendar.json",
      github_repo: "https://github.com/shadcn-ui/ui",
      repo_website: "https://ui.shadcn.com",
    },
    createdAt: new Date(2024, 8, 14),
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
    tags: [
      "Material-UI",
      "MUI",
      "Chakra UI",
      "Ant Design",
      "Semantic UI",
      "Blueprint",
      "React Bootstrap",
      "Evergreen",
      "Grommet",
      "Fluent UI",
      "Mantine",
      "Headless UI",
      "Tailwind UI",
      "Reactstrap",
      "Styled Components",
      "Emotion",
      "Radix UI",
      "Theme UI",
      "Rebass",
      "Polaris",
      "Onsen UI",
      "React Suite",
      "React Toolbox",
      "Baseweb",
      "NextUI",
      "PrimeReact",

      // Design Systems
      "Design Systems",
      "Storybook",
      "Atomic Design",
      "Figma",
      "Sketch",
      "InVision",
      "Zeplin",
      "Framer",
      "Adobe XD",
      "Component Libraries",
      "Themeable Components",
      "Styled System",
      "Lona",
      "Design Tokens",
      "UXPin",
      "DesignOps",
      "Accessibility",
      "ARIA",
      "A11y",
      "Responsive Design",
      "Dark Mode",
      "Color Systems",
      "Typography",
      "UI Patterns",
      "Grid Systems",
      "Icon Libraries",
      "Heroicons",
      "FontAwesome",
      "Feather Icons",
      "Material Icons",
    ],
    createdAt: new Date(2024, 8, 11),
    searchDescription:
      "this is a ui element made by shadcn and it is used as a testing resource",

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
