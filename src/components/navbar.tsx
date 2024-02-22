import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";

interface Link {
  title: string;
  href: string;
}

interface NavbarProps {
  brand?: string;
  links?: Link[];
  actionButtonTitle?: string;
}

export default function Navbar({
  brand = "Ticketing.com",
  links = [
    { title: "Home", href: "/home" },
    { title: "Event", href: "#" },
    { title: "Transactions", href: "#" },
  ],
  actionButtonTitle = "Login",
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed top-0 z-30 w-full transition-opacity duration-500 ${
        isScrolled ? "bg-gray-800 opacity-100" : "bg-white bg-opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-white text-lg font-bold">{brand}</span>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="border border-transparent text-white hover:border-green-500 hover:bg-transparent hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                {link.title}
              </a>
            ))}
            <Link className="relative text-sm" href={""}>
              <FaShoppingCart className="text-white hover:text-green-500 mx-3 " />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                3
              </span>
            </Link>
            <FaUser className="text-white hover:text-green-500 mx-3 text-sm" />
            <Link
              className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-sm px-4 py-2 rounded-md"
              href={"/auth/login"}
            >
              {actionButtonTitle}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
