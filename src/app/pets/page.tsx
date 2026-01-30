"use client";
import React from 'react';
import Image from 'next/image';
import { Accordion } from '@/components/ui/Accordion';
import { PawPrint, File , FileText, AlertTriangle } from 'lucide-react';

const petPolicyData = [
  {
    title: "Способы перевозки",
    icon: <PawPrint className="w-5 h-5 text-red-500" />,
    accent: "bg-red-50",
    content: (
      <div className="space-y-4 text-[14px] text-gray-600 leading-relaxed">
        <p>В зависимости от веса и размера животного, предусмотрено три варианта транспортировки:</p>
        <ul className="space-y-3">
          <li>
            <strong className="text-gray-800">В салоне самолета:</strong> Обычно допускаются питомцы весом до 8 кг (вместе с переноской). Контейнер размещается под сиденьем впереди стоящего кресла.
          </li>
          <li>
            <strong className="text-gray-800">В багажном отделении:</strong> Для крупных животных предусмотрен специальный отапливаемый отсек с вентиляцией. Вес и габариты контейнера строго регламентированы.
          </li>
          <li>
            <strong className="text-gray-800">Служебные собаки:</strong> Собаки-поводыри и эмоциональной поддержки (с подтверждающими документами) обычно летят в салоне бесплатно и без переноски.
          </li>
        </ul>
      </div>
    )
  },
  {
    title: "Список необходимых документов",
    icon: <FileText className="w-5 h-5 text-red-500" />,
    accent: "bg-red-50",
    content: (
      <div className="space-y-3 text-[14px] text-gray-600 leading-relaxed">
        <ul className="  space-y-2">
          <li>Ветеринарный паспорт международного образца.</li>
          <li>Микрочип (обязателен для международных рейсов).</li>
          <li>
            Отметки о прививках: Главная — вакцинация против бешенства (сделанная не ранее чем за год и не позднее чем за 30 дней до вылета).
          </li>
          <li>Ветеринарное свидетельство: Форма №1 (для РФ) или международный сертификат 5а (для выезда за рубеж).</li>
        </ul>
        <p className="text-red-600 font-bold mt-4">
          Важно: Правила ввоза животных в разные страны сильно различаются. Обязательно проверьте требования консульства страны назначения.
        </p>
      </div>
    )
  },
];


export default function PetsTravelPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 font-sans text-[#1A1C1E]">
      <div className="w-full mb-10 overflow-hidden rounded-[32px] shadow-sm">
        <Image 
          src="/image/Frame 1261155338 (1).png" 
          alt="Перевозка питомцев" 
          width={1280} 
          height={480} 
          className="w-full h-[250px] md:h-auto object-cover" 
          priority 
        />
      </div>

      <h1 className="text-[32px] font-black mb-10 tracking-tight text-gray-900">Перевозка питомцев</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-6">
          <PetPolicyCard item={petPolicyData[0]} />
          <PetPolicyCard item={petPolicyData[1]} />
        </div>
        <div className="lg:col-span-4 space-y-6">
          <div className="pt-4 sticky top-8">
            <Accordion  />
          </div>
        </div>
      </div>
    </section>
  );
}

const PetPolicyCard = ({ item }: { item: any }) => (
  <div className="bg-[#F8F9FA] p-8 rounded-[32px] border border-gray-50 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-sm">
        {item.icon}
      </div>
      <h3 className="text-[18px] font-black text-gray-900">{item.title}</h3>
    </div>
    {item.content}
  </div>
);