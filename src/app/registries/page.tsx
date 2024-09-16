import { MostUsed, RecentlyAdded } from "@components/featured-cards";
import { FilterBar } from "@components/filter-bar";
import { cn } from "@lib/utils";
import { Suspense } from "react";
import { MostUsedLoader } from "@components/loaders/most-used";
import { NavigateRegistries } from "@components/navigate-registries";
import { getPaginatedRegistries } from "@/db";
import { RegistryCardLoader } from "@components/loaders/registry-card-loader";

type RegistriesPageProps = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function RegistriesPage( { searchParams } : RegistriesPageProps ) {
  const tags = searchParams.stack as string | string[] | undefined;
  const tagsArray = typeof tags === 'string' ? [tags] : Array.isArray(tags) ? tags : undefined;

  const initialRegistries = await getPaginatedRegistries("1", "5" , tagsArray);

  return (
    <div className="space-y-4 py-3 px-6">
      <div className=" w-full rounded-lg">
        <FilterBar />
      </div>
      <div className={cn("flex gap-10")}>
        <div className="flex-1 space-y-4">
          <Suspense
            fallback={[...Array(2)].map((_, idx) => (
              <RegistryCardLoader key={idx + "fetch"} />
            ))}
          >
            <NavigateRegistries initialRegistries={initialRegistries.data} />
          </Suspense>
        </div>
        <div className="hidden lg:block max-w-lg w-full h-30 rounded-xl space-y-4">
          <Suspense fallback={<MostUsedLoader />}>
            <MostUsed />
          </Suspense>
          <Suspense fallback={<MostUsedLoader />}>
            <RecentlyAdded />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
