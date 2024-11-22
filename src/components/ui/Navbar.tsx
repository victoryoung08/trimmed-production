"use client";
import Link from "next/link";

import Image from "next/image";
// import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

export default function Navbar() {
  const links = [
    {
      name: "Home",
      link: "/",
      core: false,
    },
    // {
    //   name: "Services",
    //   link: "/services",
    //   sublinks: [
    //     {
    //       name: "Paid Ads & PPC Campaigns",
    //       link: "/paid-ads",
    //     },
    //     {
    //       name: "Landing Page & Copywriting",
    //       link: "/landing-page-copywriting",
    //     },
    //     {
    //       name: "Fractional CMO",
    //       link: "/fractional-cmo",
    //     },
    //   ],
    // },
    {
      name: "Chat with us",
      link: "/contact",
      core: false,
    },
    {
      name: "Request a revenue audit",
      link: "/contact",
      core: true,
    },
  ];
  return (
    <nav className="w-full bg-foreground text-foreground z-20 mx-auto h-fit py-6 relative border-b-[0.2px] border-background">
      <div className="container-global flex items-center justify-between dark relative">
        <div className="absolute">
          <Image
            src="/trimmed-marketing-logo-dark-256.png"
            alt="trimmed marketing logo"
            width={36}
            height={36}
          />
        </div>
        <div className="flex flex-shrink-0 items-center justify-around gap-8 ml-auto">
          {links.map((link) => {
            return (
              <Link
                href={link.link}
                className={twMerge(
                  "w-full mx-auto text-center z-10 text-foreground text-nowrap text-base capitalize",
                  link.core && "bg-primary px-4 py-2 rounded-lg"
                )}
                key={link.name}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

// type ServiceDropdownProps = {
//   sublinks: {
//     name: string;
//     link: string;
//   }[];
// };

// function ServiceDropdown({ sublinks }: ServiceDropdownProps) {
//   return (
//     <Menu>
//       <MenuButton className="text-foreground">Services</MenuButton>
//       <MenuItems className="bg-foreground origin-top-right" anchor="bottom end">
//         {sublinks.map((link) => (
//           <MenuItem key={link.name}>
//             <Link href={link.link} className="data-[focus]:bg-background/30">
//               {link.name}
//             </Link>
//           </MenuItem>
//         ))}
//       </MenuItems>
//     </Menu>
//   );
// }
