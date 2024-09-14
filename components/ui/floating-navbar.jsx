import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi"; // Use any icon library for hamburger menu

export const FloatingNav = ({ navItems, className }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={cn(
        `bg-white/16 fixed inset-x-0 top-0 z-[5000] mx-auto w-full font-semibold backdrop-blur-lg dark:bg-black/[0.6]`,
        className,
      )}
    >
      <div className="container flex items-center justify-between space-x-4 px-32 py-6">
        {/* Logo */}
        <Link className="text-2xl font-bold italic" href={"/"}>
          LOGO
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden items-center justify-center space-x-14 md:flex">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative flex items-center space-x-1 text-foreground hover:text-foreground",
              )}
            >
              <span className="hidden text-sm sm:block">{navItem.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
