"use client";
import React from 'react';
import Image from 'next/image';
import { Accordion } from '@/components/ui/Accordion';
import { CheckCircle2, RotateCcw, AlertCircle } from 'lucide-react';

const policyData = [
  {
    title: "Основные правила бронирования",
    icon: <CheckCircle2 className="w-5 h-5 text-red-500" />,
    color: "text-red-500",
    content: (
      <div className=" text-[14px] text-gray-600 leading-relaxed">
        <p className="font-bold text-gray-800">Данные пассажиров</p>
        <p>При заполнении данных будьте предельно внимательными. Информация должна строго соответствовать вашему удостоверению личности (паспорту или загранпаспорту):</p>
        <ul className="list-decimal pl-4 ">
          <li><strong>Имя и фамилия:</strong> Допускается не более 3-х опечаток, если они не меняют смысл фамилии (но лучше не допускать ни одной, так как некоторые авиакомпании, особенно лоукостеры, очень строги).</li>
          <li><strong>Порядок данных:</strong> Не путайте поля «Имя» и «Фамилия».</li>
        </ul>
        <p className="font-bold text-gray-800 pt-2">Подтверждение и оплата</p>
        <ul className="list-decimal pl-4 ">
          <li><strong>Тайм-лимит:</strong> После создания заказа у вас есть ограниченное время на оплату (от 15 минут до нескольких часов, в зависимости от тарифа). Если оплата не поступила, бронь аннулируется автоматически.</li>
          <li><strong>Маршрутная квитанция:</strong> После оплаты электронный билет (E-ticket) придет на вашу почту в течение 15–60 минут. Его не обязательно распечатывать, достаточно иметь в электронном виде.</li>
        </ul>
      </div>
    )
  },
  {
    title: "Изменение и отмена (Возврат и Обмен)",
    icon: <RotateCcw className="w-5 h-5 text-red-500" />,
    content: (
      <div className=" text-[14px] text-gray-600 leading-relaxed">
        <p>Возможность вернуть билет зависит от выбранного вами тарифа, а не от нашего сервиса.</p>
        <p><strong>Невозвратные тарифы:</strong> Обычно самые дешевые. Деньги по ним не возвращаются (кроме редких случаев, предусмотренных законом, например, из-за болезни при наличии справки).</p>
        <p><strong>Возвратные тарифы:</strong> Позволяют вернуть полную стоимость или ее часть за вычетом штрафа авиакомпании.</p>
        <p><strong>Обмен:</strong> Изменение даты или маршрута чаще всего требует доплаты разницы в тарифе и оплаты сервисного сбора.</p>
        <p className="text-gray-800 font-bold">Важно: Заявки на возврат или обмен принимаются не позднее чем за 48 часов до вылета через ваш Личный кабинет.</p>
      </div>
    )
  },
  {
    title: "Особые условия",
    icon: <AlertCircle className="w-5 h-5 text-red-500" />,
    content: (
      <div className="space-y-4 text-[14px] text-gray-600 leading-relaxed">
        <p>Последовательность перелетов: Билеты должны использоваться строго по порядку. Если вы пропустите первый сегмент (например, перелет «туда»), авиакомпания имеет право аннулировать билет «обратно» без возврата средств.</p>
        <p>Визовый режим: Наличие визы и других разрешительных документов — ответственность пассажира. Перед бронированием обязательно проверьте требования страны назначения.</p>
      </div>
    )
  },
  {
    title: "Безопасность платежей",
    icon: <AlertCircle className="w-5 h-5 text-red-500" />,
    content: (
      <div className="space-y-4 text-[14px] text-gray-600 leading-relaxed">
        <p>Мы используем современные протоколы защиты. Ваши средства защищены, а списание происходит только после того, как авиакомпания подтвердит наличие мест по выбранному тарифу.</p>
      </div>
    )   
  }
];

export default function BookingPolicyPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 font-sans text-[#1A1C1E]">
      <div className="w-full mb-12 overflow-hidden rounded-[32px] shadow-sm">
        <Image 
          src="/image/Frame 1261155338 (1).png" 
          alt="Политика бронирования" 
          width={1280} 
          height={480} 
          className="w-full h-[250px] md:h-auto object-cover" 
          priority 
        />
      </div>

      <h1 className="text-[28px] font-black mb-10 tracking-tight">Политика бронирования авиабилетов</h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-6">
          <PolicySection item={policyData[0]} />
          <PolicySection item={policyData[1]} />
          <PolicySection item={policyData[2]} />
            <PolicySection item={policyData[3]} />
        </div>
        <div className="lg:col-span-4 space-y-6">
        
          <div className="pt-4 sticky top-8">
            <Accordion />
          </div>
        </div>

      </div>
    </section>
  );
}

const PolicySection = ({ item }: { item: any }) => (
  <div className="bg-[#F8F9FA] p-8 rounded-[32px] border border-gray-50 flex flex-col h-full shadow-sm">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
        {item.icon}
      </div>
      <h3 className="text-[17px] font-black text-gray-900">{item.title}</h3>
    </div>
    {item.content}
  </div>
);