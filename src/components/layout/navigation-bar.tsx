"use client";

import Link from "next/link";
import { Icons } from "../icons";
import { Balancer } from "react-wrap-balancer";
import { siteConfig } from "@/config/site-config";
import { SocialLinks } from "../social-links";
import { ModeToggle } from "../toggle-theme";
import { SearchPopOver } from "../search";
import { Pages } from "@/config/pages-config";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const SiteHeader = () => {
  const pathname = usePathname();
  return (
    <header className="w-full top-0 left-0 z-10">
      {pathname === "/" && <></>}
      <div className="flex items-center justify-between px-4 py-2 h-12 border-b border-border bg-background">
        <nav className="mx-auto max-w-screen-2xl flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 ">
              <Icons.logo className="h-5 w-5 fill-current" />
              <Balancer
                as={"span"}
                className=" font-bold truncate text-ellipsis "
              >
                {siteConfig.name}
              </Balancer>
            </Link>
            {Pages.map((page) => {
              const isActive = pathname.includes(page.path ?? "");
              return (
                page.path && (
                  <Link
                    key={page.title}
                    href={page.path}
                    className={cn(
                      "transition-colors text-foreground/70 hidden md:inline-block",
                      isActive && "text-foreground",
                    )}
                  >
                    {page.title}
                  </Link>
                )
              );
            })}
          </div>
          <div className="flex items-center gap-1 xs:gap-2">
            <SearchPopOver />
            <SocialLinks className="hidden xs:flex" />
            <div className="flex xs:hidden">
              <ModeToggle />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
