"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

export default function Navbar() {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Services",
      link: "/services",
      sublinks: [
        {
          name: "Paid Ads & PPC Campaigns",
          link: "/paid-ads",
        },
        {
          name: "Landing Page & Copywriting",
          link: "/landing-page-copywriting",
        },
        {
          name: "Fractional CMO",
          link: "/fractional-cmo",
        },
      ],
    },
    {
      name: "Chat with us",
      link: "/contact",
    },
  ];
  return (
    <nav className="w-full bg-foreground text-foreground z-20 mx-auto h-fit py-3 ">
      <div className="container-global flex items-center justify-between dark">
        <div>
          <Image
            src="/trimmed-marketing-logo-dark-256.png"
            alt="trimmed marketing logo"
            width={36}
            height={36}
          />
        </div>
        <div className="w-fit flex items-center justify-around gap-8">
          {links.map((link) => {
            if (!link["sublinks"])
              return (
                <Link
                  href={link.link}
                  className="w-full mx-auto text-center z-10 navbar-text"
                  key={link.name}
                >
                  {link.name}
                </Link>
              );
            if (link["sublinks"])
              return (
                <NavigationMenu className="bg-transparent" key={link.name}>
                  <NavigationMenuList className="bg-transparent">
                    <NavigationMenuItem className="bg-transparent">
                      <NavigationMenuTrigger className="bg-transparent navbar-text">
                        {link.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="w-fit md:w-fit md:flex md:flex-col md:p-4 md:gap-2 p-4">
                        {link.sublinks.map((sublink) => (
                          <NavigationMenuLink
                            href={sublink.link}
                            className="block w-full p-2 md:w-full hover:bg-foreground hover:text-background md:p-2 rounded-md navbar-text"
                            key={sublink.link}
                          >
                            {sublink.name}
                          </NavigationMenuLink>
                        ))}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              );
          })}
        </div>
      </div>
    </nav>
  );
}
