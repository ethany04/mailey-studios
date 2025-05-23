"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Booking", href: "/booking" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="fixed w-full z-50 bg-[#f9f9f9]/90 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="hidden md:flex items-center justify-center flex-1">
            {navLinks.slice(0, 3).map((link) => (
              <NavLink key={link.name} link={link} pathname={pathname} />
            ))}
          </div>
          <div className="flex items-center justify-center md:justify-center md:flex-1">
            <Link href="/" className="text-2xl font-bold text-[#3C3883]">
              Mailey Studios
            </Link>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1">
            {navLinks.slice(3).map((link) => (
              <NavLink key={link.name} link={link} pathname={pathname} />
            ))}
          </div>
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#F0532B] hover:bg-gray-100 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === link.href
                      ? "text-[#828bc5] font-bold"
                      : "text-gray-700 hover:text-[#828bc5] hover:bg-gray-50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
        {/* Gradient navbar */}
        <div className="fixed w-full z-40 top-20 left-0 h-3 bg-gradient-to-r from-[#3c3883] to-[#828bc5]"></div>
      </nav>
    </header>
  );
}

function NavLink({
  link,
  pathname,
}: {
  link: { name: string; href: string };
  pathname: string;
}) {
  return (
    <Link
      href={link.href}
      className={`px-3 py-2 mx-2 rounded-md text-sm font-medium transition-colors duration-200 ${
        pathname === link.href
          ? "text-[#828bc5] font-bold"
          : "text-gray-700 hover:text-[#828bc5]"
      }`}
    >
      {link.name}
    </Link>
  );
}
