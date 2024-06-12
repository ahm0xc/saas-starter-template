import Link from "next/link";
import React from "react";

interface LinkType {
  label: string;
  href: string;
}

const links: LinkType[] = [
  {
    label: "Features",
    href: "/",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "Help",
    href: "/",
  },
];

export default function NavLinks() {
  return (
    <nav className="flex items-center">
      {links.map((link) => {
        return <NavLink link={link} key={`nav-links-${link.label}`} />;
      })}
    </nav>
  );
}

function NavLink({ link }: { link: LinkType }) {
  return (
    <Link
      href={link.href}
      className="px-4 text-white/70 duration-200 hover:text-white"
    >
      {link.label}
    </Link>
  );
}
