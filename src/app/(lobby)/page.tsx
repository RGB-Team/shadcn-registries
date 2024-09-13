import { cn } from "@/lib/utils";
import { RegistryCard } from "@components/registry-card";
import { RegistryDrawer } from "@components/registry-drawer";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<p>loading ....</p>}>
        <div
          className={cn(
            "p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-2 transition-all",
          )}
        >
          {[...Array(30)].map((item, idx) => (
            <RegistryCard key={idx} id={idx} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}
