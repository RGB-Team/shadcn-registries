import { Skeleton } from "../ui/skeleton";

export const MostUsedLoader = () => {
  return (
    <div className="space-y-1.5">
      <Skeleton className="h-8" />
      <div className="flex flex-col gap-y-2">
        {[...Array(2)].map((item, idx) => (
          <Skeleton key={idx} className="h-20 w-full rounded-xl" />
        ))}
      </div>
    </div>
  );
};
