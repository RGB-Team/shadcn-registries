import { MarkDownReader } from "@components/markdown-reader";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/tabs";
import { GitHubLogoIcon, Link1Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import { JsonPreview } from "@components/json-preview";

type RegistryIdPgeProps = {
  params: {
    registryId: string;
  };
};

export const registry = {
  name: "otp-theme",
  type: "registry:block",
  dependencies: ["react-otp-input"],
  devDependencies: [],
  registryDependencies: ["input"],
  files: [
    {
      path: "ui/otp-input.tsx",
      type: "registry:lib",
      content:
        'import React from "react";\nimport { Input } from "@/components/ui/input";\nimport { cn } from "@/lib/utils";\nimport OtpInput, { OTPInputProps } from "react-otp-input";\n\ntype OtpOptions = Omit<OTPInputProps, "renderInput">;\n\ntype OtpStyledInputProps = {\n  className?: string;\n} & OtpOptions;\n\n/**\n * Otp input Docs: {@link: https://shadcn-extension.vercel.app/docs/otp-input}\n */\n\nexport const OtpStyledInput = ({\n  className,\n  ...props\n}: OtpStyledInputProps) => {\n  return (\n    <OtpInput\n      {...props}\n      renderInput={(inputProps) => (\n        <Input\n          {...inputProps}\n          className={cn("!w-12 !appearance-none selection:bg-none ", className)}\n        />\n      )}\n      containerStyle={`flex justify-center items-center flex-wrap  text-2xl font-bold ${\n        props.renderSeparator ? "gap-1" : "gap-x-3 gap-y-2"\n      }`}\n    />\n  );\n};',
    },
  ],
  tailwind: {
    config: {
      theme: {
        extend: {
          colors: {
            bylka: "hsl(var(--bylka))",
          },
        },
      },
    },
  },
  cssVars: {
    dark: {},
    light: {
      radius: "0.25rem",
      bylka: "0 0% 25%",
    },
  },
  meta: {},
};

export default function RegistryIdPage({
  params: { registryId },
}: RegistryIdPgeProps) {
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
              <MarkDownReader />
            </TabsContent>
            <TabsContent value="registry">
              <JsonPreview data={registry} />
            </TabsContent>
          </Tabs>
        </div>
        <div className="max-w-md w-full space-y-4 ">
          <div className="space-y-8">
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
