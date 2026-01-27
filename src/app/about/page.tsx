"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogoMarquee } from "@/components/ui/LogoMarquee";

export default function AboutPage() {
  const pathname = usePathname();
  const navItems = [
    { name: 'Нормы багажа', href: '/baggage' },
    { name: 'Запрещенные и опасные грузы', href: '/prohibited' },
    { name: 'Добровольное донесение', href: '/report' },
    { name: 'О нас', href: '/about' },
    { name: 'Контакты', href: '/contacts' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 font-sans">
      <div className="w-full mb-8 overflow-hidden rounded-[32px] shadow-sm">
        <Image src="/image/about-hero.png" alt="About Us" width={1280} height={480} className="w-full h-[400px] object-cover" priority />
      </div>

      <nav className="flex flex-wrap gap-x-8 gap-y-4 mb-10 border-b border-gray-100 pb-0 relative">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className={`text-[11px] uppercase tracking-wider font-bold pb-4 relative ${pathname === item.href ? 'text-red-600' : 'text-gray-400 hover:text-black'}`}>
            {item.name}
            {pathname === item.href && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 transition-all" />}
          </Link>
        ))}
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-[#F8F9FA] p-8 rounded-[28px] border border-gray-100/50">
          <h2 className="text-2xl font-bold mb-6 text-red-600">О нас</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            ОсОО «О нас» было образовано в 2023 году... (тексттин калганы)
          </p>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-xl font-bold mb-8">Наши партнеры</h3>
        <LogoMarquee />
      </div>
    </section>
  );
}