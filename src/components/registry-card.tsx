import { Card, CardContent, CardFooter, CardHeader } from "@ui/card";
import Link from "next/link";
import { cn } from "@lib/utils";
import { CardMarkdown } from "./markdown-reader";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";
import { badgeVariants } from "./ui/badge";

type RegistryCardProps = {
  id: number;
};

export const RegistryCard = ({ id }: RegistryCardProps) => {
  const length = 10;
  const render = 8;
  return (
    <Card
      className={cn(
        "rounded-xl relative overflow-hidden col-span-2 py-3 px-3 space-y-3",
      )}
    >
      <Link href={`/registries/${id}`} className="absolute inset-0" ></Link>
      <div className="w-full flex items-center justify-between px-2 text-primary">
        <div className="flex items-center gap-2" >
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="shadcn"
              height={40}
              width={40}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h4>
            Shadcn
          </h4>
        </div>
        <p>3 days ago</p>
      </div>
      <CardContent className="relative bg-background rounded-2xl max-h-96 ">
        <CardMarkdown />
      </CardContent>
      <CardFooter className="px-0 pb-0" >
        <div className="flex items-center gap-2" >
          {
            [...Array(render)].map((item, idx)=>(
              <Link key={idx} href={`?stack=badge${idx}`} className={cn("cursor-pointer" , badgeVariants({
                variant : "secondary"
              }))} >
                Badge {idx}
              </Link>
            ))
          }
         {
          length - render > 0 && (
            <Link href={`/registries/${id}`} className="text-sm" >
              +{length - render} more
            </Link>
          )
         }
        </div>
      </CardFooter>
    </Card>
  );
};
