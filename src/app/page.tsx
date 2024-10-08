import { buttonVariants } from "@components/ui/button";
import { siteConfig } from "@/config/site-config";
import { cn } from "@lib/utils";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { SiteFooter } from "@/components/layout/site-footer";

export default function Home() {
  return (
    <main
      id="main-content"
      className="max-w-2xl mx-auto flex-1 flex flex-col h-full"
    >
      <section className="flex-1 flex flex-col items-center justify-center gap-4 h-full">
        <h1
          className="text-center animate-fade-up text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          style={{
            animationDelay: "0.25s",
            animationFillMode: "forwards",
          }}
        >
          <Balancer>
            <span className="text-muted-foreground">Create</span> your custom
            theme
          </Balancer>
        </h1>
        <span
          className="text-center animate-fade-up text-base text-muted-foreground sm:text-xl"
          style={{
            animationDelay: "0.35s",
            animationFillMode: "forwards",
          }}
        >
          <Balancer>{siteConfig.description}</Balancer>
        </span>
        <div
          className="animate-fade-up flex items-center gap-4"
          style={{
            animationDelay: "0.4s",
            animationFillMode: "forwards",
          }}
        >
          <Link
            href={"/registries"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            Check Registries
          </Link>
          <Link
            target="_blank"
            href={"https://github.com/RGB-Team/shadcn-registres/pulls"}
            className={cn("gap-2", buttonVariants({ variant: "outline" }))}
          >
            Create One
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
