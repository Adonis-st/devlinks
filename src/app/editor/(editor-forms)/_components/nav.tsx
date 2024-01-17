"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  HeaderLinksIcon,
  HeaderProfileIcon,
  LogoIcon,
  LogoNameIcon,
  PreviewIcon,
} from "~/_components/ui/icons";

export const Nav = () => {
  const pathname = usePathname();

  const links = [
    { href: "/editor/links", name: "Links", icon: <HeaderLinksIcon /> },
    {
      href: "/editor/profile-details",
      name: "Profile Details",
      icon: <HeaderProfileIcon />,
    },
  ];

  return (
    <div className="md:p-6">
      <nav className="flex items-center justify-between bg-white p-4 ">
        <div className="flex ">
          <LogoIcon />
          <LogoNameIcon className="ml-[6px] hidden  md:inline-block" />
        </div>
        <div className="flex">
          {links.map((link) => {
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "bg-light_purple fill-purple text-purple"
                    : "fill-gray text-gray"
                }  flex items-center rounded-lg px-[1.3rem] py-2 md:px-[1.4rem] md:py-[10px] first:lg:mr-2`}
              >
                <span>{link.icon}</span>
                <span className="ml-2 hidden font-semibold md:inline-block">
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
        <Link
          href="/editor/preview"
          className="rounded-lg border border-purple max-md:px-3 max-md:py-2 md:flex md:h-[46px] md:w-[114px] md:items-center md:justify-center"
        >
          <PreviewIcon className="md:hidden" />

          <span className="hidden font-semibold text-purple md:inline-block">
            Preview
          </span>
        </Link>
      </nav>
    </div>
  );
};
