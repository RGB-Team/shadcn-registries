import { MostUsed, RecentlyAdded } from "@components/featured-cards";
import { FilterBar } from "@components/filter-bar";
import { cn } from "@lib/utils";
import { Suspense } from "react";
import { MostUsedLoader } from "@components/loaders/most-used";
import { NavigateRegistries } from "@/components/navigate-registries";
import { getPaginatedRegistries } from "@/db";

export default async function RegistriesPage() {
  const initialRegistries = await getPaginatedRegistries("1", "5");
  return (
    <div className="space-y-4 mt-10">
      <div className=" w-full rounded-xl p-3">
        <FilterBar />
      </div>
      <div className={cn("flex gap-10 p-3")}>
        <div className="flex-1 space-y-4">
          <NavigateRegistries initialRegistries={initialRegistries.data} />
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
