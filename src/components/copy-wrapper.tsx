"use client";

import React from "react";
import { toast } from "sonner";



export const CopyWrapper = ({content , children} : {content : string , children : React.ReactNode}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    toast(
      "Copied to clipboard. Paste it, run it and enjoy.",
    );

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <div onClick={handleCopy} >
      {children}
    </div>
  )
}