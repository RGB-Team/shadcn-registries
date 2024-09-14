import { FeaturedCards } from "@components/featured-cards";
import { FilterBar } from "@components/filter-bar";
import { cn } from "@lib/utils";
import { RegistryCard } from "@components/registry-card";

export default function Registries() {
  return (
    <div className="space-y-4 mt-10">
      <div className=" w-full rounded-xl p-3">
        <FilterBar />
      </div>
      <div className={cn("flex flex-col md:flex-row gap-10 p-3")}>
        <div className="flex-1 space-y-4">
          {[...Array(30)].map((item, idx) => (
            <RegistryCard key={idx} id={idx} />
          ))}
        </div>
        <div className="max-w-lg w-full h-30 rounded-xl space-y-4">
          <div className="space-y-1.5">
            <h3 className="text-lg font-semibold">Most Used</h3>
            <div className="flex flex-col gap-y-2">
              {[...Array(5)].map((item, idx) => (
                <FeaturedCards key={idx * 20} />
              ))}
            </div>
          </div>
          <div className="space-y-1.5">
            <h3 className="text-lg font-semibold">Recently Added</h3>
            <div className="flex flex-col gap-y-2">
              {[...Array(5)].map((item, idx) => (
                <FeaturedCards key={idx * 20} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
