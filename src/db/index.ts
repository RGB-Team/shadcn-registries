import { Registries } from "./registries/registries";
import Fuse from "fuse.js";

export const getSingleRegistry = (registryId: string) => {
  const registry = Registries.find((registry) => registry.slug === registryId);
  if (!registry) return null;
  return registry;
};

export const getPaginatedRegistries = (page: string, limit: string = "10") => {
  const pageNumber = parseInt(page, 10);
  const limitNumber = parseInt(limit, 10);

  if (isNaN(pageNumber) || isNaN(limitNumber)) {
    throw new Error("Invalid page or limit parameter");
  }

  const startIndex = (pageNumber - 1) * limitNumber;
  const endIndex = startIndex + limitNumber;

  const paginatedRegistries = Registries.slice(startIndex, endIndex);

  return {
    data: paginatedRegistries,
    currentPage: pageNumber,
    totalPages: Math.ceil(Registries.length / limitNumber),
    totalItems: Registries.length,
    itemsPerPage: limitNumber,
  };
};

const fuseConfig = {
  keys: ["title", "authors.name"],
};

const fuseInstance = new Fuse(Registries, fuseConfig);

export const getPaginatedSearch = (searchKeyword: string) => {
  return fuseInstance.search(searchKeyword);
};
