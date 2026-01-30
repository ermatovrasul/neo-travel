"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Accordion } from '@/components/ui/Accordion';

const BaggageSection = () => {
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
      <div className="w-full mb-8 overflow-hidden rounded-[24px] md:rounded-[32px] shadow-sm">
        <Image 
          src="/image/Frame 1261155339.png" 
          alt="Baggage Hero" 
          width={1280} 
          height={480} 
          className="w-full h-[200px] md:h-auto object-cover"
          priority
        />
      </div>
      <nav className="flex overflow-x-auto no-scrollbar gap-x-8 mb-10 border-b border-gray-100 pb-0 whitespace-nowrap">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href === '/baggage' && pathname === '/');
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={`text-[11px] uppercase tracking-wider font-bold pb-4 transition-all duration-300 relative shrink-0
                ${isActive ? 'text-red-600' : 'text-gray-400 hover:text-black'}`}
            >
              {item.name}
              {isActive && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 transition-all" />
              )}
            </Link>
          );
        })}
      </nav>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-12">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold mb-6 text-gray-900">Ручная кладь</h2>
            <div className="bg-[#F8F9FA] p-6 md:p-8 rounded-[28px] border border-gray-100/50">
              <div className="space-y-6 text-[14px] md:text-[15px] text-gray-700 leading-relaxed">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <p>
                    <span className="font-bold text-black">Стандартные габариты:</span><br />
                    55×40×25 см (Аэрофлот, S7).
                  </p>
                  <p>
                    <span className="font-bold text-black">Вес:</span><br />
                    От 5 до 10 кг в зависимости от тарифа.
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-[12px] text-gray-500 italic">
                    <span className="font-black text-gray-900 uppercase text-[10px] not-italic mr-2">Важно:</span>
                    Жидкости в емкостях до 100 мл. Общий объем — не более 1 литра.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold mb-6 text-gray-900">Зарегистрированный багаж</h2>
            <div className="bg-[#F8F9FA] p-6 md:p-8 rounded-[28px] border border-gray-100/50 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[450px]">
                  <thead>
                    <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-200/50">
                      <th className="pb-4 pr-4">Класс</th>
                      <th className="pb-4 px-4">Вес</th>
                      <th className="pb-4 pl-4">Габариты</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200/40 text-[14px]">
                    <tr>
                      <td className="py-5 pr-4 font-semibold text-gray-900">Эконом-лайт</td>
                      <td className="py-5 px-4 text-gray-600">Нет</td>
                      <td className="py-5 pl-4 text-gray-400">—</td>
                    </tr>
                    <tr>
                      <td className="py-5 pr-4 font-semibold text-gray-900">Эконом-стандарт</td>
                      <td className="py-5 px-4 text-gray-600 font-medium">23 кг</td>
                      <td className="py-5 pl-4 text-gray-600">до 158 см</td>
                    </tr>
                    <tr>
                      <td className="py-5 pr-4 font-semibold text-gray-900">Бизнес-класс</td>
                      <td className="py-5 px-4 text-gray-600 font-medium">32 кг</td>
                      <td className="py-5 pl-4 text-gray-600">до 158 см</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4  lg:top-8 h-fit">
          <Accordion />
        </div>

      </div>
    </section>
  );
};

export default BaggageSection;