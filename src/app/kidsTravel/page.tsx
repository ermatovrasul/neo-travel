"use client";
import React from 'react';
import Image from 'next/image';
import { Accordion } from '@/components/ui/Accordion'; 

export default function KidsTravelPage() {
  

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 font-sans text-[#1A1C1E]">
      <div className="w-full mb-12 overflow-hidden rounded-[32px] shadow-sm">
        <Image 
          src="/image/Frame 1261155338 (1).png" 
          alt="Путешествия с детьми" 
          width={1280} 
          height={480} 
          className="w-full h-[250px] md:h-auto object-cover" 
          priority
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          
          <div className="space-y-6">
            <h1 className="text-[32px] font-black tracking-tight text-gray-900">
              Путешествия с детьми
            </h1>
            <p className="text-gray-500 font-medium leading-relaxed">
              При бронировании билетов тип тарифа и условия перевозки зависят от возраста вашего ребенка. 
              Система автоматически рассчитает стоимость, исходя из даты рождения:
            </p>
            <div className="bg-[#F8F9FA] p-10 rounded-[32px] border border-gray-100 space-y-8">
              <div className="flex gap-5">
                <div>
                  <p className="font-bold text-[17px] mb-1">Младенцы (Infant) — до 2 лет</p>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    Обычно летят на руках у родителей. На внутренних рейсах это часто бесплатно, 
                    на международных — со скидкой до 90%.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div>
                  <p className="font-bold text-[17px] mb-1">Дети (Child) — от 2 до 12 лет</p>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    Для них предусмотрено отдельное кресло и детский тариф 
                    (скидка обычно составляет 25–33% от взрослого билета).
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div>
                  <p className="font-bold text-[17px] mb-1">Подростки — старше 12 лет</p>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    Путешествуют по полному взрослому тарифу.
                  </p>
                </div>
              </div>
            </div>
            <div className=" p-6 rounded-[24px]  flex gap-4">
              <p className="text-sm text-red-800 font-bold leading-relaxed">
                Важно: Если ребенку исполняется 2 или 12 лет во время поездки, 
                система бронирования учтет это автоматически при расчете.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-[28px] font-black tracking-tight text-gray-900">
              Багаж и детские коляски
            </h2>
            <p className="text-gray-500 font-medium">
              Большинство авиакомпаний позволяют бесплатно перевозить одну складную коляску в дополнение к норме багажа.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-4">
                <h4 className="font-bold text-gray-900">До трапа</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  Вы можете пользоваться своей коляской до самого момента посадки в самолет. 
                  Сотрудники заберут её у входа и выдадут сразу после прилета.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  Небольшие ультракомпактные модели (например, YoYo) часто можно брать в салон как ручную кладь.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className=" top-8">
            <Accordion  />
          </div>
        </div>
      </div>
    </section>
  );
}