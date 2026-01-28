"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Полезная информация", href: "/" },
    { name: "О нас", href: "/about" },
    { name: "Контакты", href: "/contacts" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 relative z-[100]">
      <nav className="flex flex-row justify-between items-center bg-white/90 backdrop-blur-md rounded-2xl px-4 md:px-8 py-3 md:py-4 mt-4 shadow-sm border border-gray-100">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/icon/logo.svg"
            alt="logo"
            width={40}
            height={40}
            className="md:w-[48px] md:h-[48px]"
          />
          <span className="font-black text-lg md:text-xl tracking-tighter text-[#E11D48]">
            NEO TRAVEL
          </span>
        </Link>
        <div className="hidden lg:flex space-x-10 text-[13px] font-bold text-gray-500">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-black transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:block bg-[#E11D48] text-white px-6 md:px-8 py-2.5 rounded-xl text-xs md:text-sm font-black hover:bg-[#BE123C] transition-all shadow-md shadow-red-100 active:scale-95">
            Вход
          </button>
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 lg:hidden">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} 
                className="text-sm font-bold text-gray-600 hover:text-[#E11D48] py-2 border-b border-gray-50 last:border-0 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full bg-[#E11D48] text-white py-3 rounded-xl text-sm font-black mt-2">
              Вход
            </button>
          </div>
        </div>
      )}
    </div>
  );
};