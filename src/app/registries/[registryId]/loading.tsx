import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingRegistryId() {
  return (
    <div className="relative h-full p-3 md:p-6 lg:p-10">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <Skeleton className="h-[32rem] w-full" />
        </div>
        <div className="max-w-md w-full space-y-4 ">
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="">Installation Command</h3>
              <div className="w-full">
                <Skeleton className="w-full h-10" />
              </div>
            </div>
            <div className="space-y-1.5">
              <h3 className="">Repository</h3>
              <div className="w-full">
                <Skeleton className="w-full h-10" />
              </div>
            </div>
            <div className="space-y-1.5">
              <h3 className="">Website</h3>
              <div className="w-full">
                <Skeleton className="w-full h-10" />
              </div>
            </div>
            <div className="space-y-1.5">
              <h3>Made by</h3>
              <div className="flex items-center flex-wrap gap-2">
                {[...Array(2)].map((item, idx) => (
                  <Skeleton key={idx} className="size-10" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
