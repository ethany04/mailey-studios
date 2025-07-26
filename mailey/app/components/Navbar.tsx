"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Booking", href: "/booking" },
  { name: "Contact", href: "/contact" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "FAQs", href: "/faqs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isFAQsPage = pathname === "/faqs";
  const isAbtPage = pathname === "/about";

  const isPortfolioPage = pathname.startsWith("/portfolio");

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled past the viewport height
      const isScrolled = window.scrollY > window.innerHeight * 0.05;
      setScrolled(isScrolled);
    };

    // Only add scroll listener if not on FAQs page
    if (!isFAQsPage || !isAbtPage) {
      window.addEventListener("scroll", handleScroll);
      // Initial check
      handleScroll();
    }

    // Clean up
    return () => {
      if (!isFAQsPage || !isAbtPage) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isFAQsPage, isAbtPage]);

  // Force scrolled style on FAQs page
  const isScrolledStyle = isFAQsPage || isAbtPage || scrolled;

  return (
    <>
      {isPortfolioPage ? (
        // Simplified navbar for gallery pages - only logo, not clickable
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center h-16">
              <div className="flex items-center justify-center">
                <Image src="/logo.svg" alt="logo" width={100} height={100} />
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav
          className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolledStyle
              ? "bg-white/90 backdrop-blur-sm shadow-sm"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-18">
              <div className="hidden md:flex items-center justify-center flex-1">
                {navLinks.slice(0, 3).map((link) => (
                  <NavLink
                    key={link.name}
                    link={link}
                    pathname={pathname}
                    scrolled={isScrolledStyle}
                  />
                ))}
              </div>

              <div className="flex items-center justify-center md:justify-center md:flex-1">
                <Link
                  href="/"
                  className={`text-2xl transition-colors duration-300 ${
                    isScrolledStyle ? "text-black" : "text-white"
                  }`}
                >
                  <Image src="/logo.svg" alt="logo" width={100} height={100} />
                </Link>
              </div>

              <div className="hidden md:flex items-center justify-center flex-1">
                {navLinks.slice(3).map((link) => (
                  <NavLink
                    key={link.name}
                    link={link}
                    pathname={pathname}
                    scrolled={isScrolledStyle}
                  />
                ))}
              </div>

              <div className="flex items-center md:hidden">
                <button
                  type="button"
                  className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${
                    scrolled
                      ? "text-gray-700 hover:text-black hover:bg-gray-100"
                      : "text-white hover:text-white/80"
                  }`}
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
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div
                className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg ${
                  isScrolledStyle ? "bg-white" : "bg-black/70 backdrop-blur-sm"
                }`}
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      pathname === link.href
                        ? "text-[#3C3883] font-bold"
                        : isScrolledStyle
                          ? "text-gray-700 hover:text-[#3C3883] hover:bg-gray-50"
                          : "text-white hover:text-[#3C3883]"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      )}
    </>
  );
}

function NavLink({
  link,
  pathname,
  scrolled,
}: {
  link: { name: string; href: string };
  pathname: string;
  scrolled: boolean;
}) {
  return (
    <Link
      href={link.href}
      className={`px-3 py-2 mx-2 rounded-md text-sm font-medium transition-colors duration-200 ${
        pathname === link.href
          ? "text-black font-bold"
          : scrolled
            ? "text-gray-700 hover:text-black"
            : "text-white hover:text-white/80"
      }`}
    >
      <span>{link.name}</span>
    </Link>
  );
}
