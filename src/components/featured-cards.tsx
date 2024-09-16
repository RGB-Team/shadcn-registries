import { Card, CardContent, CardTitle } from "@ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { getPaginatedRegistries, getRecentlyAdded } from "@/db";
import { RegistriesType } from "@/db/registries/registries";

type FeaturedCardsProps = {
  registry: RegistriesType;
};

export const FeaturedCards = ({ registry }: FeaturedCardsProps) => {
  return (
    <Link href={`/registries/${registry.slug}`} className="">
      <Card className="max-w-full ">
        <CardContent className="flex justify-between p-2">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Link
                target="_blank"
                href={registry.authors[0].url}
                className="absolute z-[5]"
              ></Link>
              <Avatar>
                <AvatarImage
                  src={registry.authors[0].avatar}
                  alt={registry.authors[0].name}
                  height={44}
                  width={44}
                />
                <AvatarFallback>
                  {registry.authors[0].name.slice(0, 3)}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="space-y-1.5 ">
              <CardTitle className="w-full truncate">
                {registry.title}
              </CardTitle>
              <div className="flex items-center gap-2">
                {registry.tags.slice(0, 4).map((item, idx) => (
                  <Badge key={idx}>{item}</Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-sm">3 days ago</p>
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
          <FeaturedCards registry={item} key={idx * 20} />
        ))}
      </div>
    </div>
  );
};

export const RecentlyAdded = async () => {
  const recently_added = await getRecentlyAdded();
  return (
    <div className="space-y-1.5">
      <h3 className="text-lg font-semibold">Recently Added</h3>
      <div className="flex flex-col gap-y-2">
        {recently_added.map((item, idx) => (
          <FeaturedCards registry={item} key={idx * 20} />
        ))}
      </div>
    </div>
  );
};
