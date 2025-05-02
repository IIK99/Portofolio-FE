"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

interface Link {
  title: string;
  href: string;
}

interface NavbarProps {
  brand?: string;
  links?: Link[];
  actionButtonTitle?: string;
}

export default function NavbarHome({
  brand = "Ticketing.com",
  links = [
    { title: "Home", href: "/home" },
    { title: "Product Detail", href: "/productdetail" },
    { title: "Transactions", href: "/transactionhistory" },
  ],
  actionButtonTitle = "Login",
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 z-30 w-full transition-colors duration-500 ${
        isScrolled ? "bg-gray-900 shadow-md" : "bg-transparent"
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
                className="border border-transparent text-white hover:border-green-500 hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-all"
              >
                {link.title}
              </a>
            ))}
            <FaUser className="text-white hover:text-green-400 mx-3 text-sm" />
            <Link
              className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-sm px-4 py-2 rounded-md transition-all"
              href={"/auth/login"}
            >
              {actionButtonTitle}
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
