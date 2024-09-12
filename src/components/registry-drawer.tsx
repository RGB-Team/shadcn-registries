"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@ui/resizable";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

export const RegistryDrawer = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  React.useEffect(() => {
    if (!searchParams) return;
    const currentCard = searchParams?.get("cardId");
    console.log(currentCard);
    if (currentCard) {
      setOpen(true);
      return;
    }
    setOpen(false)
  }, [searchParams, setOpen]);
   const currentCard = searchParams?.get("cardId");
  return open ? (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel minSize={50} maxSize={100} className="min-h-screen">
        {children}
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel minSize={0} maxSize={50}>
        <button type="button" onClick={()=> router.push("/")} >
          close
        </button>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Card id is {currentCard}</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ) : (
    children
  );
};
