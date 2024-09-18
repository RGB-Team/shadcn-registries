import { Registries } from "./registries/registries";
import {
  format,
  isAfter,
  isBefore,
  isEqual,
  isWithinInterval,
  parseISO,
} from "date-fns";
import Fuse from "fuse.js";

export const getSingleRegistry = (registryId: string) => {
  const registry = Registries.find((registry) => registry.slug === registryId);
  if (!registry) return null;
  return registry;
};

export const getRecentlyAdded = () => {
  return Registries.reverse().slice(0, 5);
};

export const getAllRegistries = async () => {
  return Registries;
};

export const getPaginatedRegistries = (
  page: string,
  limit: string = "10",
  searchParams?: string[],
  dataParams?: {
    from?: string;
    to?: string;
  },
) => {
  const pageNumber = parseInt(page, 10);
  const limitNumber = parseInt(limit, 10);

  if (isNaN(pageNumber) || isNaN(limitNumber)) {
    throw new Error("Invalid page or limit parameter");
  }

  const startIndex = (pageNumber - 1) * limitNumber;
  const endIndex = startIndex + limitNumber;

  let targetRegistries = Registries;

  // Apply search params filter
  if (searchParams && searchParams.length > 0) {
    targetRegistries = targetRegistries.filter((reg) =>
      searchParams.every((param) => reg.tags.includes(param)),
    );
  }

  // Apply date range filter
  if (dataParams && Object.keys(dataParams).length >= 1) {
    const fromDate = dataParams.from ? parseISO(dataParams.from) : null;
    const toDate = dataParams.to ? parseISO(dataParams.to) : null;

    console.log(
      "From Date:",
      fromDate ? format(fromDate, "yyyy-MM-dd") : "Not set",
    );

    targetRegistries = targetRegistries.filter((reg) => {
      const createdAt =
        reg.createdAt instanceof Date ? reg.createdAt : parseISO(reg.createdAt);

      console.log("Item Created At:", format(createdAt, "yyyy-MM-dd"));

      let result = true;

      if (fromDate && toDate) {
        result = isWithinInterval(createdAt, { start: fromDate, end: toDate });
      } else if (fromDate) {
        result =
          isAfter(createdAt, fromDate) ||
          createdAt.getTime() === fromDate.getTime();
      } else if (toDate) {
        result =
          isBefore(createdAt, toDate) ||
          createdAt.getTime() === toDate.getTime();
      }

      return result;
    });
  }

  const paginatedRegistries = targetRegistries.slice(startIndex, endIndex);
  return {
    data: paginatedRegistries,
    currentPage: pageNumber,
    totalPages: Math.ceil(targetRegistries.length / limitNumber),
    totalItems: targetRegistries.length,
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

export const getAllTags = () => {
  const tagsSet = new Array();
  Registries.map((item) =>
    item.tags.map((tag) => {
      if (!tagsSet.includes(tag)) tagsSet.push(tag);
    }),
  );

  return tagsSet;
};
