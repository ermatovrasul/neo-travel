"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Accordion } from '@/components/ui/Accordion';

export default function ProhibitedPage() {
  const pathname = usePathname();
  const navItems = [
    { name: 'Нормы багажа', href: '/baggage' },
    { name: 'Запрещенные и опасные грузы', href: '/prohibited' },
    { name: 'Добровольное донесение', href: '/report' },
    { name: 'О нас', href: '/about' },
    { name: 'Контакты', href: '/contacts' },
  ];

  const sideMenuData = [
    {
      id: 'trip',
      title: 'О поездке',
      links: [
        { label: 'Путешествия с детьми', href: '/kids' },
        { label: 'Добровольное донесение', href: '/report' },
        { label: 'Опасные и запрещенные грузы', href: '/prohibited' },
        { label: 'Стратегии планирования путешествия', href: '/planning' },
        { label: 'Норма багажа', href: '/baggage' },
        { label: 'Сообщения о качестве обслуживания и безопасности', href: '/feedback' },
      ]
    },
    {
      id: 'booking',
      title: 'О бронировании',
      links: [
        { label: 'Политика бронирования авиабилетов', href: '/policy' },
        { label: 'Перевозка питомцев', href: '/pets' },
      ]
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 font-sans">
      <div className="w-full mb-8 overflow-hidden rounded-[24px] md:rounded-[32px] shadow-sm">
        <Image 
          src="/image/Frame 1261155338.jpg" 
          alt="Prohibited" 
          width={1280} 
          height={480} 
          className="w-full h-[200px] md:h-auto object-cover" 
          priority
        />
      </div>
      <nav className="flex overflow-x-auto no-scrollbar gap-x-8 mb-10 border-b border-gray-100 pb-0 whitespace-nowrap">
        {navItems.map((item) => (
          <Link 
            key={item.href} 
            href={item.href} 
            className={`text-[11px] uppercase tracking-wider font-black pb-4 relative shrink-0 transition-colors
              ${pathname === item.href ? 'text-red-600' : 'text-gray-400 hover:text-black'}`}
          >
            {item.name}
            {pathname === item.href && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 transition-all" />
            )}
          </Link>
        ))}
      </nav>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-[#F7F8FB] p-6 md:p-8 rounded-[28px] border border-red-50">
            <h2 className="text-xl font-black mb-6 flex items-center gap-4">
              <Image src="/icon/Frame 313.svg" alt="Vector" width={32} height={32} className="shrink-0" />
              Категорически запрещено
            </h2>
            <ul className="space-y-4 text-[14px] md:text-[15px] text-gray-700 list-decimal pl-5 leading-relaxed font-medium">
              <li><span className="font-bold text-black">Взрывчатые вещества:</span> порох, петарды, фейерверки, сигнальные ракеты.</li>
              <li><span className="font-bold text-black">Сжатые газы:</span> баллоны для горелок, баллончики для самообороны, зажигалки с турбонаддувом.</li>
              <li><span className="font-bold text-black">Легковоспламеняющиеся жидкости:</span> бензин, растворители, ацетон, топливо для зажигалок.</li>
              <li><span className="font-bold text-black">Токсичные вещества:</span> ртуть (в термометрах), кислоты, щелочи, хлорка.</li>
              <li><span className="font-bold text-black">Сильные магниты:</span> могут повлиять на навигацию самолета.</li>
            </ul>
          </div>
          <div className="bg-[#F7F8FB] p-6 md:p-8 rounded-[28px] border border-red-50">
            <h2 className="text-xl font-black mb-6 flex items-center gap-4">
              <Image src="/icon/Frame 313 (1).svg" alt="Vector" width={32} height={32} className="shrink-0" />
              Литиевые аккумуляторы
            </h2>
            <div className="text-[14px] md:text-[15px] text-gray-700 flex flex-col gap-4 font-medium">
              <p className=" p-4 rounded-xl">
                <span className="font-bold text-black">Powerbanks и ноутбуки:</span><br/> 
                Должны перевозиться только в ручной клади.
              </p>
              <p className="px-4">
                <span className="font-bold text-black">Мощность:</span><br/>
                • До 100 Втч: без ограничений;
                • 100-160 Втч: требуется разрешение авиакомпании;
                • Более 160 Втч: перевозка запрещена.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4  lg:top-8 h-fit">
          <Accordion items={sideMenuData} />
        </div>

      </div>
    </section>
  );
}