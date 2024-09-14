"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

const Navbar = () => {
  const navItems = [
    {
      name: "Projects",
      link: "/projects",
      icon: <IconUser className="text-neutral-500 dark:text-white h-4 w-4" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="text-neutral-500 dark:text-white h-4 w-4" />
      ),
    },
    {
      name: "Blog",
      link: "/blog",
      icon: (
        <IconMessage className="text-neutral-500 dark:text-white h-4 w-4" />
      ),
    },
    {
      name: "About",
      link: "/about",
      icon: (
        <IconMessage className="text-neutral-500 dark:text-white h-4 w-4" />
      ),
    },
  ];
  return (
    <header>
      <FloatingNav navItems={navItems} />
    </header>
  );
};

export default Navbar;
