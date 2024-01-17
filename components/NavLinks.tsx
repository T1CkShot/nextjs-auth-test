"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

type linkItem = {
  title: string;
  link: string;
};

export default function NavLinks({ links }: { links: linkItem[] }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {links.map((item) => {
          return (
            <NavigationMenuItem key={item.link}>
              <Link href={item.link} className={navigationMenuTriggerStyle()}>
                {item.title}
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
