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
    title: "breadcrumb",
    searchDescription: "A component for detecting the path to the current page using links",
    tags: [
     "shadcn" , "react" , "radix-ui"
    ],
    slug: "breadcrumb",
    createdAt: new Date(2024, 8, 26),
    registry: {
      github_markdown:
        "https://raw.githubusercontent.com/BelkacemYerfa/shadcn-registres/refs/heads/master/README.md",
      github_registry:
        "https://raw.githubusercontent.com/BelkacemYerfa/shadcn-extension/refs/heads/master/apps/extension/public/registry/breadcrumb.json",
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
        name: "Soham_Asm",
        url: "https://x.com/Soham_Asmi",
        avatar:
          "https://pbs.twimg.com/profile_images/1758898035617083393/Dj9pSWia_200x200.jpg",
      },
      {
        name: "dangling_hanma",
        url: "https://x.com/dangling_hanma",
        avatar:
          "https://pbs.twimg.com/profile_images/1787014305629519872/7-GAeKCm_200x200.jpg",
      },
    ],
  },
  {
    title: "tree view",
    searchDescription: "A tree view that assembles all the functionalities of the Accordion component to create a tree view",
    tags: [
     "shadcn" , "react" , "radix-ui" , "accordion"
    ],
    slug: "tree-view",
    createdAt: new Date(2024, 8, 26),
    registry: {
      github_markdown:
        "https://raw.githubusercontent.com/BelkacemYerfa/shadcn-registres/refs/heads/master/README.md",
      github_registry:
        "https://raw.githubusercontent.com/BelkacemYerfa/shadcn-extension/refs/heads/master/apps/extension/public/registry/tree-view.json",
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
        name: "Soham_Asm",
        url: "https://x.com/Soham_Asmi",
        avatar:
          "https://pbs.twimg.com/profile_images/1758898035617083393/Dj9pSWia_200x200.jpg",
      },
      {
        name: "dangling_hanma",
        url: "https://x.com/dangling_hanma",
        avatar:
          "https://pbs.twimg.com/profile_images/1787014305629519872/7-GAeKCm_200x200.jpg",
      },
    ],
  },
  {
    title: "carousel",
    searchDescription: "This is a carousel component support all embla carousel features",
    tags: [
     "shadcn" , "react" , "embla-carousel"
    ],
    slug: "carousel",
    createdAt: new Date(2024, 8, 26),
    registry: {
      github_markdown:
        "https://raw.githubusercontent.com/BelkacemYerfa/shadcn-registres/refs/heads/master/README.md",
      github_registry:
        "https://raw.githubusercontent.com/BelkacemYerfa/shadcn-extension/refs/heads/master/apps/extension/public/registry/carousel.json",
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
        name: "Soham_Asm",
        url: "https://x.com/Soham_Asmi",
        avatar:
          "https://pbs.twimg.com/profile_images/1758898035617083393/Dj9pSWia_200x200.jpg",
      },
      {
        name: "dangling_hanma",
        url: "https://x.com/dangling_hanma",
        avatar:
          "https://pbs.twimg.com/profile_images/1787014305629519872/7-GAeKCm_200x200.jpg",
      },
    ],
  },
  {
    title: "multi select",
    searchDescription: "A mulit select that lets you select multiple items from a list.",
    tags: [
     "shadcn" , "react" , "radix-ui"
    ],
    slug: "multi-select",
    createdAt: new Date(2024, 8, 26),
    registry: {
      github_markdown:
        "https://raw.githubusercontent.com/BelkacemYerfa/shadcn-registres/refs/heads/master/README.md",
      github_registry:
        "https://raw.githubusercontent.com/BelkacemYerfa/shadcn-extension/refs/heads/master/apps/extension/public/registry/multi-select.json",
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
        name: "Soham_Asm",
        url: "https://x.com/Soham_Asmi",
        avatar:
          "https://pbs.twimg.com/profile_images/1758898035617083393/Dj9pSWia_200x200.jpg",
      },
      {
        name: "dangling_hanma",
        url: "https://x.com/dangling_hanma",
        avatar:
          "https://pbs.twimg.com/profile_images/1787014305629519872/7-GAeKCm_200x200.jpg",
      },
    ],
  },
  {
    title: "otp input",
    searchDescription: "A simple validation input for OTP",
    tags: [
     "shadcn" , "react" , "react-otp-input"
    ],
    slug: "otp-input",
    createdAt: new Date(2024, 8, 26),
    registry: {
      github_markdown:
        "https://raw.githubusercontent.com/BelkacemYerfa/shadcn-registres/refs/heads/master/README.md",
      github_registry:
        "https://raw.githubusercontent.com/BelkacemYerfa/shadcn-extension/refs/heads/master/apps/extension/public/registry/otp-input.json",
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
        name: "Soham_Asm",
        url: "https://x.com/Soham_Asmi",
        avatar:
          "https://pbs.twimg.com/profile_images/1758898035617083393/Dj9pSWia_200x200.jpg",
      },
      {
        name: "dangling_hanma",
        url: "https://x.com/dangling_hanma",
        avatar:
          "https://pbs.twimg.com/profile_images/1787014305629519872/7-GAeKCm_200x200.jpg",
      },
    ],
  },
  {
    title: "smart date picker",
    searchDescription: "A natural language date and time input component",
    tags: [
     "shadcn" , "react" , "chrono-node"
    ],
    slug: "smart-date-picker",
    createdAt: new Date(2024, 8, 26),
    registry: {
      github_markdown:
        "https://raw.githubusercontent.com/BelkacemYerfa/shadcn-registres/refs/heads/master/README.md",
      github_registry:
        "https://raw.githubusercontent.com/BelkacemYerfa/shadcn-extension/refs/heads/master/apps/extension/public/registry/smart-date-picker.json",
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
        name: "Soham_Asm",
        url: "https://x.com/Soham_Asmi",
        avatar:
          "https://pbs.twimg.com/profile_images/1758898035617083393/Dj9pSWia_200x200.jpg",
      },
      {
        name: "dangling_hanma",
        url: "https://x.com/dangling_hanma",
        avatar:
          "https://pbs.twimg.com/profile_images/1787014305629519872/7-GAeKCm_200x200.jpg",
      },
    ],
  },
  {
    title: "datetime picker",
    searchDescription: "A customized datetime picker component",
    tags: [
     "shadcn" , "react" , "radix-ui"
    ],
    slug: "datetime-picker",
    createdAt: new Date(2024, 8, 26),
    registry: {
      github_markdown:
        "https://raw.githubusercontent.com/BelkacemYerfa/shadcn-registres/refs/heads/master/README.md",
      github_registry:
        "https://raw.githubusercontent.com/BelkacemYerfa/shadcn-extension/refs/heads/master/apps/extension/public/registry/datetime-picker.json",
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
        name: "Soham_Asm",
        url: "https://x.com/Soham_Asmi",
        avatar:
          "https://pbs.twimg.com/profile_images/1758898035617083393/Dj9pSWia_200x200.jpg",
      },
      {
        name: "dangling_hanma",
        url: "https://x.com/dangling_hanma",
        avatar:
          "https://pbs.twimg.com/profile_images/1787014305629519872/7-GAeKCm_200x200.jpg",
      },
    ],
  },
  {
    title: "tags input",
    searchDescription: "A tags input that lets you set multiple options",
    tags: [
     "shadcn" , "react"
    ],
    slug: "tags-input",
    createdAt: new Date(2024, 8, 26),
    registry: {
      github_markdown:
        "https://raw.githubusercontent.com/BelkacemYerfa/shadcn-registres/refs/heads/master/README.md",
      github_registry:
        "https://raw.githubusercontent.com/BelkacemYerfa/shadcn-extension/refs/heads/master/apps/extension/public/registry/tags-input.json",
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
        name: "Soham_Asm",
        url: "https://x.com/Soham_Asmi",
        avatar:
          "https://pbs.twimg.com/profile_images/1758898035617083393/Dj9pSWia_200x200.jpg",
      },
      {
        name: "dangling_hanma",
        url: "https://x.com/dangling_hanma",
        avatar:
          "https://pbs.twimg.com/profile_images/1787014305629519872/7-GAeKCm_200x200.jpg",
      },
    ],
  },
  {
    title: "file upload",
    searchDescription: "an input component that allows file uploading",
    tags: [
     "react" , "react-dropzone" , "sonner"
    ],
    slug: "file-upload",
    createdAt: new Date(2024, 8, 26),
    registry: {
      github_markdown:
        "https://raw.githubusercontent.com/BelkacemYerfa/shadcn-registres/refs/heads/master/README.md",
      github_registry:
        "https://raw.githubusercontent.com/BelkacemYerfa/shadcn-extension/refs/heads/master/apps/extension/public/registry/file-upload.json",
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
        name: "Soham_Asm",
        url: "https://x.com/Soham_Asmi",
        avatar:
          "https://pbs.twimg.com/profile_images/1758898035617083393/Dj9pSWia_200x200.jpg",
      },
      {
        name: "dangling_hanma",
        url: "https://x.com/dangling_hanma",
        avatar:
          "https://pbs.twimg.com/profile_images/1787014305629519872/7-GAeKCm_200x200.jpg",
      },
    ],
  },
] satisfies RegistriesType[];
