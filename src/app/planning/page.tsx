"use client";
import { Accordion } from '@/components/ui/Accordion';
import Image from 'next/image';
import React from 'react';

const strategies = [
  {
    title: "Раннее бронирование (за 3–6 месяцев)",
    icon: "📅",
    forWhom: "Для тех, кто ценит предсказуемость, путешествует семьей или планирует поездку на праздники и каникулы.",
    pros: "Самые низкие тарифы, максимальный выбор мест в салоне и наличие номеров в лучших отелях.",
    strategy: "Покупайте билеты, как только открываются продажи (обычно за 330 дней до вылета).",
    accent: "bg-red-50"
  },
  {
    title: "Охота за выгодой (за 1–2 месяца)",
    icon: "🎯",
    forWhom: "Для гибких путешественников, готовых подстраиваться под лучшие предложения.",
    pros: "Возможность поймать распродажи авиакомпаний и спецпредложения.",
    strategy: "Используйте наш календарь низких цен и следите за вылетами во вторник и среду — обычно они дешевле выходных.",
    accent: "bg-blue-50"
  },
  {
    title: "Спонтанный побег (за 1–7 дней)",
    icon: "⚡",
    forWhom: "Для легких на подъем и тех, кому срочно нужна перезагрузка.",
    pros: "Адреналин и иногда — очень дешевые места на чартерных рейсах.",
    strategy: "Держите наготове собранный чемодан и проверяйте «горящие» билеты в нашем приложении.",
    accent: "bg-orange-50"
  }
];

export default function PlanningStrategies() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 font-sans text-[#1A1C1E]">
      <Image 
        src="/image/Frame 1261155338 (1).png" 
        alt="Стратегии планирования путешествия" 
        width={1280} height={480} 
        className="w-full h-[250px] md:h-auto object-cover rounded-[32px] shadow-sm mb-10" 
        priority 
      />
      <div className="mb-10">
        <h2 className="md:text-[32px] text-[24px] font-black tracking-tight text-gray-900 mb-2">
          Стратегии планирования путешествия
        </h2>
        <p className="text-gray-500 font-medium">Три подхода к планированию: какой ваш?</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {strategies.slice(0, 2).map((item, idx) => (
            <StrategyCard key={idx} item={item} />
          ))}
        </div>

        <div className="lg:col-span-4 space-y-6">
          <StrategyCard item={strategies[2]} />
          <div className="pt-4">
             <Accordion  />
          </div>
        </div>

      </div>
    </section>
  );
}
const StrategyCard = ({ item }: { item: typeof strategies[0] }) => (
  <div className="bg-white p-8  min-h-[339px] rounded-[32px] border border-gray-100 shadow-sm flex flex-col hover:shadow-md transition-all duration-300 h-full">
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm ${item.accent} border border-white/50`}>
      {item.icon}
    </div>
    
    <h3 className="text-[17px] font-bold text-gray-900 mb-6 leading-snug">
      {item.title}
    </h3>
    <div className=" flex-grow">
      <div className="">
        <p className="text-[12px] font-black uppercase tracking-wider text-gray-400">Для кого:</p>
        <p className="text-[14px] text-gray-600 font-medium leading-relaxed">{item.forWhom}</p>
      </div>

      <div className="">
        <p className="text-[12px] font-black uppercase tracking-wider text-gray-400">Плюсы:</p>
        <p className="text-[14px] text-gray-600 font-medium leading-relaxed">{item.pros}</p>
      </div>

      <div className=" border-t border-gray-50">
        <p className="text-[12px] font-black uppercase tracking-wider text-red-500 mb-2">Стратегия:</p>
        <p className="text-[14px] text-gray-900 font-bold leading-relaxed italic">
          «{item.strategy}»
        </p>
      </div>
    </div>
  </div>
);