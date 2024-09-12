import { HomeIcon, Package, ScrollText, User } from "lucide-react";

import {
  Dock,
  DockIcon,
  DockItem,
  DockLabel,
} from "@/components/ui/motion/dock";

const data = [
  {
    title: "Home",
    icon: (
      <HomeIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Products",
    icon: (
      <Package className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Change Log",
    icon: (
      <ScrollText className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Profile",
    icon: (
      <User className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
];

export function NavBar() {
  return (
    <div className="fixed z-10 bottom-2 left-1/2 max-w-full -translate-x-1/2">
      <Dock className="items-end pb-3">
        {data.map((item, idx) => (
          <DockItem
            key={idx}
            className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800"
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}
