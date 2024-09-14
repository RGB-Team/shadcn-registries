import { Card, CardContent, CardTitle } from "@ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";
import { Badge } from "./ui/badge";
import Link from "next/link";

export const FeaturedCards = () => {
  return (
    <Link href="/registries/1" className="">
      <Card className="max-w-full ">
        <CardContent className="flex items-center gap-2 p-2">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="shadcn"
              height={44}
              width={44}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="space-y-1.5 ">
            <CardTitle> Magic Ui registry as a full theme </CardTitle>
            <div className="flex items-center gap-2">
              {[...Array(3)].map((item, idx) => (
                <Badge key={idx}>radix ui</Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
