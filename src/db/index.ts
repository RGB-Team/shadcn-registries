import { Registries } from "./registries/registries";
import Fuse, { FuseOptionKey } from "fuse.js";

export const getSingleRegistry = (registryId: string) => {
  const registry = Registries.find((registry) => registry.slug === registryId);
  if (!registry) return null;
  return registry;
};

export const getRecentlyAdded = () => {
  return Registries.reverse().slice(0, 5);
};

export const getPaginatedRegistries = (
  page: string,
  limit: string = "10",
  searchParams?: string[],
) => {
  const pageNumber = parseInt(page, 10);
  const limitNumber = parseInt(limit, 10);

  if (isNaN(pageNumber) || isNaN(limitNumber)) {
    throw new Error("Invalid page or limit parameter");
  }

  const startIndex = (pageNumber - 1) * limitNumber;
  const endIndex = startIndex + limitNumber;

  const targetRegistries =
    searchParams && searchParams?.length > 0
      ? Registries.filter((reg) =>
          searchParams.every((param) => reg.tags.includes(param)),
        )
      : Registries;

  const paginatedRegistries = targetRegistries.slice(startIndex, endIndex);

  return {
    data: paginatedRegistries,
    currentPage: pageNumber,
    totalPages: Math.ceil(Registries.length / limitNumber),
    totalItems: Registries.length,
    itemsPerPage: limitNumber,
  };
};

const fuseConfig = {
  findAllMatches: true,
  useExtendedSearch: true,
  keys: ["title", "authors.name", "searchDescription", "tags"],
};

const fuseInstance = new Fuse(Registries, fuseConfig);

export const getPaginatedSearch = (searchKeyword: string) => {
  return fuseInstance.search(searchKeyword);
};
