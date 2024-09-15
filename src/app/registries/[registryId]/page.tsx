import { MarkDownReader } from "@components/markdown-reader";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/tabs";
import { GitHubLogoIcon, Link1Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import { JsonPreview } from "@components/json-preview";
import { CopyWrapper } from "@/components/copy-wrapper";
import { getSingleRegistry } from "@/db";
import { notFound } from "next/navigation";
import axios from "axios";

type RegistryIdPgeProps = {
  params: {
    registryId: string;
  };
};

export default async function RegistryIdPage({
  params: { registryId },
}: RegistryIdPgeProps) {
  const registry = await getSingleRegistry(registryId);
  if (!registry) notFound();
  const registry_code = await axios.get(registry.registry.github_registry);
  if (!registry_code) notFound();
  return (
    <div className="relative h-full p-3 md:p-6 lg:p-10">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <Tabs defaultValue="markdown">
            <TabsList>
              <TabsTrigger value={"markdown"}>Markdown</TabsTrigger>
              <TabsTrigger value={"registry"}>Registry</TabsTrigger>
            </TabsList>
            <TabsContent value="markdown">
              <MarkDownReader url={registry.registry.github_markdown} />
            </TabsContent>
            <TabsContent value="registry">
              <JsonPreview data={registry_code.data} />
            </TabsContent>
          </Tabs>
        </div>
        <div className="max-w-md w-full space-y-4 ">
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="">Installation Command</h3>
              <div className="w-full">
                <CopyWrapper
                  content={`npx shadcn@latest add ${registry.registry.github_registry}"`}
                >
                  <code className="relative w-full text-sm rounded px-[0.5rem] py-3 bg-muted font-mono space-x-2 group cursor-pointer overflow-hidden flex items-center ">
                    <span className="text-function">npx</span>
                    <span className="text-string inline-flex truncate w-full max-w-full ">
                      shadcn@latest add {registry.registry.github_registry}
                    </span>
                  </code>
                </CopyWrapper>
              </div>
            </div>
            <div className="space-y-1.5">
              <h3 className="">Repository</h3>
              <Link
                href={registry.registry.github_repo}
                className="flex items-center gap-2"
              >
                <span>
                  <GitHubLogoIcon />
                </span>
                {registry.registry.github_repo}
              </Link>
            </div>
            <div className="space-y-1.5">
              <h3>Website</h3>
              <Link
                href={registry.registry.repo_website}
                className="flex items-center gap-2"
              >
                <span>
                  <Link1Icon />
                </span>
                {registry.registry.repo_website}
              </Link>
            </div>
            <div className="space-y-1.5">
              <h3>Made by</h3>
              <div className="flex items-center flex-wrap gap-2">
                {registry.authors.map((author) => (
                  <Link href={author.url} className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage
                        src={author.avatar}
                        alt={author.name}
                        height={40}
                        width={40}
                      />
                      <AvatarFallback>{author.name.slice(0, 3)}</AvatarFallback>
                    </Avatar>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
