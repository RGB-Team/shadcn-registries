# Custom Shadcn Theme Registry

This project allows you to create, share, and discover custom themes for shadcn components. By submitting a pull request to our GitHub repository, you can add your theme to the Registries array, making it available for others to use and explore.

![hero](/public/og.png)

## How to Add Your Theme

1. Fork the repository
2. Create a new entry in the `Registries` array
3. Fill in the required fields (explained below)
4. Submit a pull request

## Registry Fields Explained

Each entry in the `Registries` array should be an object with the following fields:

### Basic Information

- `title`: A concise, descriptive name for your theme.
- `searchDescription`: A brief description of your theme, focusing on its key features or design philosophy.
- `tags`: An array of relevant keywords to help users find your theme.
- `slug`: A unique identifier for your theme, typically a lowercase, hyphenated version of the title.
- `createdAt`: The date your theme was created, in the format `new Date(YYYY, M-1, D)`.

### Registry Information

- `registry`: An object containing links and information about your theme:
  - `github_markdown`: A link to the markdown file with detailed documentation for your theme.
    - Note: In your markdown documentation, it's highly recommended to include a working GIF that demonstrates your custom theme in action. This visual representation helps users quickly understand the look and feel of your theme.
  - `github_registry`: A link to the JSON file containing your theme's configuration.
  - `github_repo`: A link to the GitHub repository where your theme is hosted.
  - `repo_website`: (Optional) A link to a demo website showcasing your theme.

### Author Information

- `authors`: An array of objects, each representing a contributor to the theme:
  - `name`: The author's name or username.
  - `url`: A link to the author's website or social media profile.
  - `avatar`: A link to the author's avatar image.

## Example Entry

```javascript
{
  title: "Neon Nights",
  searchDescription: "A vibrant, cyberpunk-inspired theme for shadcn components",
  tags: ["dark", "neon", "cyberpunk"],
  slug: "neon-nights",
  createdAt: new Date(2024, 7, 15),
  registry: {
    github_markdown: "https://raw.githubusercontent.com/username/repo/main/neon-nights.md",
    github_registry: "https://raw.githubusercontent.com/username/repo/main/neon-nights.json",
    github_repo: "https://github.com/username/neon-nights-theme",
    repo_website: "https://neon-nights-demo.vercel.app"
  },
  authors: [
    {
      name: "CyberDesigner",
      url: "https://github.com/CyberDesigner",
      avatar: "https://avatars.githubusercontent.com/u/12345678"
    }
  ]
}
```