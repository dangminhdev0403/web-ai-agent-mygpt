"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "LLM Dùng Riêng",
    "Giá Thành",
    "Blog",
    "Sức Khoẻ AI",
    "About Us",
  ];

  const HeaderContent = () => (
    <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center ">
      <Link href={"/"}>
        <Image
          src="https://mygpt.vn/wp-content/uploads/2023/04/mygpt-logo.png"
          alt="Logo"
          width={161}
          height={40}
        />
      </Link>

      <nav className="hidden md:flex gap-6 font-bold text-base">
        {navItems.map((label, idx) => (
          <Link key={idx} href="#" className="hover:underline">
            {label}
          </Link>
        ))}
      </nav>

      <button
        className="md:hidden cursor-pointer"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={28} className="stroke-[4]" color="#02e079" />
      </button>
    </div>
  );

  return (
    <>
      {/* Header static ban đầu */}
      {!scrolled && (
        <header className=" text-white bg-transparent absolute top-0 left-0 right-0 z-40 bg-gradient-to-r from-blue-600 to-cyan-500 w-full">
          <HeaderContent />
        </header>
      )}

      {/* Header fixed khi scroll */}
      <AnimatePresence>
        {scrolled && (
          <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 right-0 z-50 w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md backdrop-blur-md"
          >
            <HeaderContent />
          </motion.header>
        )}
      </AnimatePresence>

      {/* SIDEBAR MOBILE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-50 flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              className="absolute inset-0 bg-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsOpen(false)}
              aria-label="Close menu overlay"
            />

            <motion.div
              className="relative w-64 h-full bg-[#1b0234] text-white p-6 shadow-lg"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.5 }}
            >
              <button
                className="absolute top-4 left-2"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X size={18} color="#d60606" className="stroke-[6]" />
              </button>

              <div className="flex items-center justify-center mb-6">
                <Image
                  src="https://mygpt.vn/wp-content/uploads/2023/04/mygpt-logo.png"
                  alt="Logo"
                  width={161}
                  height={40}
                />
              </div>

              <nav className="flex flex-col gap-4 font-bold pt-4 text-[#afafaf] text-sm">
                {navItems.map((label, idx) => (
                  <Link
                    key={idx}
                    href="#"
                    className="border-b border-white/20 px-2.5 pb-2"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
