"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ProhibitedPage() {
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
        <Image src="/image/prohibited-hero.png" alt="Prohibited" width={1280} height={480} className="w-full h-[400px] object-cover" />
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
        <div className="bg-[#FFF5F5] p-8 rounded-[28px] border border-red-50">
          <h2 className="text-xl font-bold mb-6 text-red-600 flex items-center gap-3">
            <span>⚠️</span> Категорически запрещено
          </h2>
          <ul className="space-y-4 text-sm text-gray-700 list-decimal pl-5 leading-relaxed">
            <li>Взрывчатые вещества: порох, петарды, фейерверки.</li>
            <li>Сжатые газы: баллоны для горелок, зажигалки.</li>
            <li>Легковоспламеняющиеся жидкости: бензин, ацетон.</li>
            <li>Токсичные вещества: ртуть, кислоты, щелочи.</li>
          </ul>
        </div>
        <div className="relative rounded-[28px] overflow-hidden">
          <Image src="/image/security-check.png" alt="Security" width={600} height={400} className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}