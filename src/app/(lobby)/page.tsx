import { RegistryCard } from "@components/registry-card";
import { RegistryDrawer } from "@components/registry-drawer";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<p>loading ....</p>} >
      <RegistryDrawer>
        <div className="p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-2 ">
          {[...Array(20)].map((item, idx) => (
            <RegistryCard key={idx} id={idx} />
          ))}
        </div>
      </RegistryDrawer>
    </Suspense>
  );
}
