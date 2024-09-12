import { Card, CardHeader } from "@ui/card";
import Link from "next/link";
import { AspectRatio } from "@ui/aspect-ratio";
import Image from "next/image";
import { cn } from "@/lib/utils";

type RegistryCardProps = {
  id: number;
};

export const RegistryCard = ({ id }: RegistryCardProps) => {
  const chosen = id % 2 !== 0;
  return (
    <Card
      className={cn(
        "rounded-xl relative overflow-hidden",
        chosen ? "row-span-2" : "row-span-1",
      )}
    >
      <Link
        href={`?cardId=${id}`}
        className="absolute z-[2] top-0 bottom-0 left-0 right-0"
      />
      <CardHeader className="p-0 ">
        {chosen ? (
          <AspectRatio ratio={1.56395 / 1}>
            <Image
              src="https://picsum.photos/seed/picsum/1000/1000"
              alt="registry"
              sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
              fill
              loading="lazy"
              className="object-cover"
            />
          </AspectRatio>
        ) : (
          <div className=" bg-blue size-20"></div>
        )}
      </CardHeader>
      <div className="absolute bottom-1 w-full flex items-center justify-between px-2 text-white">
        <p>Jared Palmer</p>
        <p>15 May 2024</p>
      </div>
    </Card>
  );
};
