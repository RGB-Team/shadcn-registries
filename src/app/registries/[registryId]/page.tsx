import { MarkDownReader } from "@/components/markdown-reader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GitHubLogoIcon, Link1Icon } from "@radix-ui/react-icons";
import Link from "next/link";

type RegistryIdPgeProps = {
  params: {
    registryId: string;
  };
};

export default function RegistryIdPage({
  params: { registryId },
}: RegistryIdPgeProps) {
  return (
    <div className="relative h-full p-3 md:p-6 lg:p-10">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <MarkDownReader />
        </div>
          <div className="max-w-md w-full space-y-4 ">
            <div className="space-y-5">
              <div className="space-y-2">
                <h3 className="">Installation Command</h3>
                <div className="">
                  <code className="text-sm rounded px-[0.3rem] py-3 bg-muted font-mono space-x-2">
                    <span className="text-function">npx</span>
                    <span className="text-string">
                      shadcn@latest http://localhost:3000/registry.json
                    </span>
                  </code>
                </div>
              </div>
              <div className="space-y-1.5">
                <h3 className="">Repository</h3>
                <Link href="#" className="flex items-center gap-2">
                  <span>
                    <GitHubLogoIcon />
                  </span>
                  https://github.com/BelkacemYerfa/shadcn-extension
                </Link>
              </div>
              <div className="space-y-1.5">
                <h3>Website</h3>
                <Link href="#" className="flex items-center gap-2">
                  <span>
                    <Link1Icon />
                  </span>
                  https://shadcn-extension.vercel.app/
                </Link>
              </div>
              <div className="space-y-1.5">
                <h3>Made by</h3>
                <Link href="#" className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="shadcn"
                      height={40}
                      width={40}
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
