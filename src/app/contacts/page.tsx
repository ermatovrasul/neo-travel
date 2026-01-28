"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Accordion } from '@/components/ui/Accordion';

export default function ContactsPage() {
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
    <section className="max-w-7xl mx-auto px-4 py-8 font-sans text-[#1A1C1E]">
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
      <nav className="flex overflow-x-auto no-scrollbar gap-x-8 mb-10 border-b border-gray-100 pb-0 whitespace-nowrap pt-4">
        {navItems.map((item) => (
          <Link 
            key={item.href} 
            href={item.href} 
            className={`text-[11px] uppercase tracking-wider font-black pb-4 relative shrink-0 transition-colors
              ${pathname === item.href ? 'text-red-600' : 'text-gray-400 hover:text-black'}`}
          >
            {item.name}
            {pathname === item.href && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600" />
            )}
          </Link>
        ))}
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-8">
          <h1 className="text-3xl font-black">Контакты</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <div className="flex flex-col gap-6">
              <div className="bg-[#F8F9FA] p-8 rounded-[28px] space-y-5 border border-gray-100/50 flex-grow">
                <div className="flex items-center gap-4">
                  <span className="bg-white p-2 rounded-lg shadow-sm">📞</span>
                  <p className="font-bold text-[15px]">+996 (000) 00 00 00</p>
                </div>
                <div className="flex items-center gap-4">
                  <Image src="/icon/whatsapp 2.png" alt="whatsapp" width={24} height={24} />
                  <p className="font-bold text-[15px]">+996 (000) 00 00 00</p>
                </div>
                <div className="flex items-center gap-4">
                  <Image src="/icon/connection 1.png" alt="telegram" width={24} height={24} />
                  <p className="font-bold text-[15px]">+996 (000) 00 00 00</p>
                </div>
                <div className="flex items-center gap-4">
                  <Image src="/icon/@.png" alt="email" width={24} height={24} />
                  <p className="font-bold text-[15px]">info@neotravel.kg</p>
                </div>
              </div>

              <div className="bg-[#F8F9FA] p-8 rounded-[28px] space-y-6 border border-red-50">
                <div className="flex items-start gap-4">
                  <Image src="/icon/location.png" alt="location" width={24} height={24} className="mt-1" />
                  <div>
                    <p className="font-bold text-[15px]">Бишкек, ул. Токтогул</p>
                    <p className="text-sm text-gray-500">Кыргызская Республика</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-400 uppercase font-black tracking-widest mb-1">График работы</p>
                  <p className="font-bold text-[15px] text-gray-900">Пн — Пт: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
            <div className="relative w-full h-full min-h-[350px] overflow-hidden rounded-[32px] border border-gray-100 shadow-sm">
              <Image 
                src="/image/Frame 1261155490.png" 
                alt="map" 
                fill 
                className="object-cover"
                priority
              />
            </div>

          </div>
        </div>

        <div className="lg:col-span-4 lg:top-8 h-fit">
          <Accordion items={sideMenuData} />
        </div>
      </div>
    </section>
  );
}