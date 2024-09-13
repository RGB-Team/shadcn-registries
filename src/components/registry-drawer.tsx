"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { transform } from "next/dist/build/swc";

export const RegistryDrawer = ({
  children,
  cardId,
}: {
  children: React.ReactNode;
  cardId: number;
}) => {
  const [open, setOpen] = React.useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleOpen = () => {
    const currentPath = new URLSearchParams(searchParams?.toString());
    if (open) currentPath.delete("cardId");
    else currentPath.set("cardId", cardId.toString());
    router.push(`${pathname}?${currentPath.toString()}`, {
      scroll: false,
    });
  };

  React.useEffect(() => {
    const currentCard = searchParams?.get("cardId");
    if (currentCard) {
      console.log(cardId);
      if (currentCard !== cardId.toString()) setOpen(false);
      else {
        setOpen(true);
        return;
      }
    } else {
      setOpen(false);
      return;
    }
  }, [searchParams, setOpen, cardId]);

  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, fugit
          cum impedit minima quos omnis exercitationem aperiam voluptatum
          accusantium fugiat sequi repudiandae? Magnam numquam ab quas animi,
          dignissimos perferendis officiis? Necessitatibus iure et dolorem
          numquam fugiat in ullam dignissimos eveniet eum accusamus, debitis
          quibusdam enim sit tenetur mollitia eaque? Molestiae labore, voluptate
          hic maiores consectetur facilis reprehenderit minus ipsum soluta. Ut
          incidunt necessitatibus placeat cum ipsam voluptatum sunt repudiandae
          asperiores, voluptas deleniti? Nostrum aperiam iste in, dicta ut
          magnam ad natus atque iure laborum eligendi maiores placeat tempore
          optio inventore? Sit quidem voluptates nulla molestias pariatur,
          nesciunt similique eius minima sequi, expedita debitis, enim placeat
          repellat iste laborum tempore eaque? Mollitia autem cupiditate sequi
          dolores odio officiis eligendi corrupti voluptates? Repudiandae
          voluptatum optio dolor dolorem blanditiis eaque eos distinctio
          laborum? Quas alias nihil consequatur animi atque deleniti eaque culpa
          explicabo dolorum ducimus a ullam, non modi odit illum aliquid minima!
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
