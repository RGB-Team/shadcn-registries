import { Card, CardContent, CardTitle } from "@ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { getPaginatedRegistries } from "@/db";

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
            <CardTitle className="w-full truncate">
              {" "}
              Magic Ui registry as a full theme{" "}
            </CardTitle>
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

export const MostUsed = async () => {
  const most_used = await getPaginatedRegistries("1", "5");
  return (
    <div className="space-y-1.5">
      <h3 className="text-lg font-semibold">Most Used</h3>
      <div className="flex flex-col gap-y-2">
        {most_used.data.map((item, idx) => (
          <FeaturedCards key={idx * 20} />
        ))}
      </div>
    </div>
  );
};

export const RecentlyAdded = async () => {
  const most_used = await getPaginatedRegistries("1", "5");
  return (
    <div className="space-y-1.5">
      <h3 className="text-lg font-semibold">Recently Added</h3>
      <div className="flex flex-col gap-y-2">
        {most_used.data.map((item, idx) => (
          <FeaturedCards key={idx * 20} />
        ))}
      </div>
    </div>
  );
};
