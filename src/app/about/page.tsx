"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogoMarquee } from "@/components/ui/LogoMarquee";
import { Accordion } from '@/components/ui/Accordion';

export default function AboutPage() {
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
      {/* Hero Image */}
      <div className="w-full mb-8 overflow-hidden rounded-[24px] md:rounded-[32px] shadow-sm">
        <Image 
          src="/image/Frame 1261155338 (1).png" 
          alt="About Us" 
          width={1280} 
          height={480} 
          className="w-full h-[250px] md:h-[400px] object-cover" 
          priority 
        />
      </div>

      {/* Navigation - Scrollable on Mobile */}
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
        <div className="lg:col-span-8">
          <div className="bg-[#F8F9FA] p-6 md:p-10 rounded-[28px] border border-gray-100/50">
            <h2 className="text-2xl md:text-3xl font-black mb-6 ">О нас</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-[16px]">
              <p>
                ОсОО «О нас» было образовано в 2023 году, а в марте 2024 года был получен сертификат эксплуатанта № 63. Авиарейсы авиакомпании выполняются на комфортабельном воздушном судне Boeing 737-300. Политика ОсОО «О нас» направлена на создание единой команды приверженцев общих интересов ориентированных на предоставление комфортабельных и безопасных полетов. Авиакомпания «Скай ФРУ» — это в первую очередь команда специалистов, полных позитивной энергии и любящих авиацию. Квалифицированные экипажи и профессиональный наземный персонал заботятся о пассажирах, перелетающих нашей авиакомпанией каждый день. Мы хотим, чтобы наши пассажиры путешествовали на наших самолетах безопасно и комфортно каждый день, так как лозунг нашей авиакомпании «ВСТРЕЧАЙ МИР С ВЫСОТЫ».
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Accordion */}
        <div className="lg:col-span-4  lg:top-8 h-fit">
          <Accordion items={sideMenuData} />
        </div>
      </div>

      {/* Partners Section */}
      <div className="mt-20">
        <h3 className="text-2xl font-black mb-10 text-center lg:text-left">Наши партнеры</h3>
        <div className=" overflow-hidden">
          <LogoMarquee />
        </div>
      </div>
    </section>
  );
}