"use client";

import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useState } from "react";
import { toast } from "sonner";

export function CopyButton({
  content,
  slug,
  className,
}: {
  content: string;
  slug?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    toast(
      "Copied to clipboard. Use the pkg manager command of your choice to install the registry.",
    );

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "text-xs bg-black text-white dark:bg-white dark:text-black p-2 rounded-full size-9 flex items-center justify-center",
        className,
      )}
      type="button"
    >
      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
    </button>
  );
}
