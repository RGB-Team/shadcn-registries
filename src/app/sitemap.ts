import { MetadataRoute } from "next";
import { getAllRegistries } from "../db";
import { siteConfig } from "../config/site-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const registry_pages = await getAllRegistries();

  const registries: MetadataRoute.Sitemap = registry_pages.map((registry) => ({
    url: `${siteConfig.url}/registries/${registry.slug}`,
  }));

  return [
    ...registries,
    {
      url: `${siteConfig.url}/`,
    },
    {
      url: `${siteConfig.url}/registries`,
    },
  ];
}
