import { Card, CardContent, CardFooter, CardHeader } from "@ui/card";
import Link from "next/link";
import { cn } from "@lib/utils";
import { CardMarkdown } from "./markdown-reader";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";
import { badgeVariants } from "./ui/badge";
import { RegistriesType } from "@/db/registries/registries";

type RegistryCardProps = {
  registry: RegistriesType;
};

const render = 4;

export const RegistryCard = ({ registry }: RegistryCardProps) => {
  const length = registry.tags.length;

  return (
    <Card
      className={cn(
        "rounded-xl relative overflow-hidden col-span-2 py-3 px-3 space-y-3",
      )}
    >
      <Link
        href={`/registries/${registry.slug}`}
        className="absolute inset-0"
      ></Link>
      <div className="w-full flex items-center justify-between px-0 text-primary">
        <h3 className="text-xl font-bold capitalize truncate max-w-40 w-full">
          {registry.title}
        </h3>
        <p>3 days ago</p>
      </div>
      <CardContent className="relative bg-black rounded-2xl max-h-96 px-0 ">
        <CardMarkdown url={registry.registry.github_registry} />
      </CardContent>
      <CardFooter className="flex justify-between px-0 pb-0">
        <div className="flex items-center gap-2">
          {registry.tags.slice(0, render).map((item, idx) => (
            <Link
              key={idx}
              href={`?stack=badge${idx}`}
              className={cn(
                "cursor-pointer",
                badgeVariants({
                  variant: "secondary",
                }),
              )}
            >
              Badge {idx}
            </Link>
          ))}
          {length - render > 0 && (
            <Link href={`/registries/${registry.slug}`} className="text-sm">
              +{length - render} more
            </Link>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Link target="_blank" href={registry.authors[0].url}>
            <Avatar>
              <AvatarImage
                src={registry.authors[0].avatar}
                alt={registry.authors[0].name}
                height={40}
                width={40}
              />
              <AvatarFallback>
                {registry.authors[0].name.slice(0, 3)}
              </AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
