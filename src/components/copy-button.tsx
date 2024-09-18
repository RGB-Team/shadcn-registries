"use client";

import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useState } from "react";
import { toast } from "sonner";
import { Icons } from "./icons";
import { voteAction } from "@/actions/vote";

export function CopyButton({
  content,
  slug,
  className,
  icon,
  toastMessage,
}: {
  content: string;
  slug?: string;
  className?: string;
  icon?: keyof typeof Icons;
  toastMessage?: string;
}) {
  const [copied, setCopied] = useState(false);
  const { execute } = useAction(voteAction);

  const handleCopy = () => {
    if (slug) execute({ slug });
    navigator.clipboard.writeText(content);
    setCopied(true);
    toast(
      toastMessage ??
        "Copied to clipboard. Use the pkg manager command of your choice to install the registry.",
    );

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  const CustomCopy = Icons[icon ?? "Copy"];
  return (
    <button
      onClick={handleCopy}
      className={cn(
        "text-xs bg-black text-white dark:bg-white dark:text-black p-2 rounded-full size-9 flex items-center justify-center",
        className,
      )}
      type="button"
    >
      {copied ? (
        <Check className="w-4 h-4" />
      ) : (
        <CustomCopy className="w-4 h-4" />
      )}
    </button>
  );
}
