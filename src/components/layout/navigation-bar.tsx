"use client";

import {
  Activity,
  Component,
  HomeIcon,
  Mail,
  Moon,
  Package,
  ScrollText,
  Sun,
  SunMoon,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/motion/dock';
import { ModeToggle } from '../toggle-theme';
import { useTheme } from 'next-themes';

const Theme = [
  {
   name : "light",
   icon : <Sun className='h-full w-full text-neutral-600 dark:text-neutral-300' />
  },
  {
   name : "dark",
   icon : <Moon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
  }
 ] satisfies {
   name : "light" | "dark",
   icon : React.ReactNode
 }[]

const data = [
  {
    title: 'Home',
    icon: (
      <HomeIcon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Products',
    icon: (
      <Package className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Components',
    icon: (
      <Component className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Activity',
    icon: (
      <Activity className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Change Log',
    icon: (
      <ScrollText className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Email',
    icon: (
      <Mail className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Theme',
    icon: (
      <SunMoon className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
];

export function NavBar() {
  const {theme} = useTheme();
  return (
    <div className='absolute bottom-2 left-1/2 max-w-full -translate-x-1/2'>
      <Dock className='items-end pb-3'>
        {data.map((item, idx) => item.title === "Theme" ? (
          <ModeToggle  key={idx} >
            <DockItem
          className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800'
        >
          <DockLabel>{item.title}</DockLabel>
          <DockIcon>{theme === "light" ? Theme[0].icon : Theme[1].icon}</DockIcon>
        </DockItem>
          </ModeToggle>
        ) :(
          <DockItem
            key={idx}
            className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800'
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}
