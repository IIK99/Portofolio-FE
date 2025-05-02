"use client";

import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";

interface NavLink {
  title: string;
  href: string;
}

interface NavbarProps {
  brand?: string;
  links?: NavLink[];
  actionButtonTitle?: string;
}

export default function Navbar({
  brand = "Ticketing.com",
  links = [
    { title: "Home", href: "/home" },
    { title: "Product Detail", href: "/productdetail" },
    { title: "Transactions", href: "/transactionhistory" },
  ],
  actionButtonTitle = "Login",
}: NavbarProps) {
  return (
    <nav className="top-0 z-30 w-full shadow bg-gray-900 sticky">
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
