"use client";
import React from 'react';
import { ShieldCheck, Lock, CreditCard, Headphones } from 'lucide-react';
import { Accordion } from '@/components/ui/Accordion';
import Image from 'next/image';

const safetyFeatures = [
  {
    title: "Защита платежей",
    description: "Все транзакции проходят через защищенные шлюзы с использованием протоколов шифрования SSL и стандарта PCI DSS.",
    icon: '/icon/shield-tick.png',
    accent: "bg-red-50"
  },
  {
    title: "Проверка партнеров",
    description: "Мы работаем только с проверенными авиакомпаниями и агрегаторами, имеющими международные сертификаты безопасности IATA.",
    icon: '/icon/eye.png' ,
    accent: "bg-green-50"
  },
  {
    title: "Конфиденциальность",
    description: "Мы строго соблюдаем политику защиты персональных данных. Ваши данные никогда не передаются третьим лицам без вашего согласия.",
    icon: '/icon/eye.png',
    accent: "bg-blue-50"
  },
];


export default function SafetyPriorities() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 font-sans text-[#1A1C1E]">
      <div className="w-full mb-10 overflow-hidden rounded-[32px] shadow-sm relative h-[250px] md:h-[350px]">
        <Image 
          src="/image/Frame 1261155338 (1).png"
          alt="Safety first" 
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {safetyFeatures.slice(0, 2).map((item, idx) => (
            <SafetyCard key={idx} item={item} />
          ))}
        </div>
        <div className="lg:col-span-4 space-y-6">
          <SafetyCard item={safetyFeatures[2]} />

          <div className="pt-4 sticky top-8">
             <Accordion  />
          </div>
        </div>

      </div>
    </section>
  );
}

const SafetyCard = ({ item }: { item: typeof safetyFeatures[0] }) => (
  <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col hover:shadow-md transition-all duration-300 h-full">
    <Image 
      src={item.icon} 
      alt={item.title} 
      width={32} 
      height={32} 
      className="mb-6"
    />
    
    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
      {item.title}
    </h3>
    
    <p className="text-[15px] text-gray-500 font-medium leading-relaxed">
      {item.description}
    </p>
    
  </div>
);