"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Accordion } from '@/components/ui/Accordion';
import { Upload } from 'lucide-react';

export default function ReportPage() {
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
      <div className="w-full mb-8 overflow-hidden rounded-[24px] md:rounded-[32px]">
        <Image 
          src="/image/Frame 1261155338 (1).png" 
          alt="Report Hero" 
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
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600" />
            )}
          </Link>
        ))}
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-10">
          <h1 className="text-2xl md:text-3xl font-black">Как работает добровольное донесение?</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#F2F4F7] p-6 rounded-[24px]">
              <h3 className="font-bold text-[16px] mb-3">Если вы заметили что-то странное</h3>
              <p className="text-[14px] text-gray-600 leading-relaxed">
                Если во время путешествия вы столкнулись с ситуацией, угрожающей безопасности (неисправность оборудования, нарушения правил досмотра и т.д.), воспользуйтесь системой добровольных сообщений.
              </p>
            </div>
            <div className="bg-[#F2F4F7] p-6 rounded-[24px]">
              <h3 className="font-bold text-[16px] mb-3">Зачем это нужно?</h3>
              <p className="text-[14px] text-gray-600 leading-relaxed">
                Ваша информация поможет авиакомпаниям и аэропортам исправить ошибки до того, как они приведут к происшествию. Такие сообщения направлены на улучшение системы, а не на поиск виновных.
              </p>
            </div>
          </div>
          <div className="space-y-6 pt-4">
            <h2 className="text-[18px] font-bold">Опишите проблему и прикрепите файл</h2>
            
            <div className="space-y-4">
              <textarea 
                placeholder="Опишите проблему или ситуацию"
                className="w-full bg-[#F2F4F7] rounded-[20px] p-5 min-h-[120px] outline-none text-[14px] placeholder:text-gray-400"
              />
              <textarea 
                placeholder="Напишите как можно это исправить"
                className="w-full bg-[#F2F4F7] rounded-[20px] p-5 min-h-[80px] outline-none text-[14px] placeholder:text-gray-400"
              />
            </div>

            <button className="flex items-center gap-3 bg-[#E11D48] text-white px-8 py-4 rounded-[20px] font-bold text-[14px] hover:bg-[#BE123C] transition-all w-full md:w-auto justify-center">
              <span>Прикрепить файл</span>
              <Upload />
            </button>
          </div>
        </div>
        <div className="lg:col-span-4 lg:sticky lg:top-8 h-fit">
          <Accordion items={sideMenuData} />
        </div>

      </div>
    </section>
  );
}