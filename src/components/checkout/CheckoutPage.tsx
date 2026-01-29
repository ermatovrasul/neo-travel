"use client";
import Image from "next/image";
import { useState } from "react";
import { PriceDetailsModal } from "@/components/checkout/PriceDetailsModal";
import { TicketModal } from "@/components/ticket/TicketModal";
import Link from "next/link";
import { TARIFF_DETAILS } from "@/types/TarifDetails";




const CustomDropdown = ({ label, options, value, onChange }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative w-full">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-white py-4 md:py-5 px-5 md:px-6 rounded-xl md:rounded-2xl flex justify-between items-center cursor-pointer shadow-sm transition-all border ${isOpen ? 'border-gray-200 ring-2 ring-red-50' : 'border-transparent'}`}
      >
        <span className={`text-sm font-bold ${value ? 'text-gray-900' : 'text-gray-300'}`}>{value || label}</span>
        <svg className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} width="14" height="8" viewBox="0 0 14 8" fill="none" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1L7 7L13 1"/></svg>
      </div>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute z-50 w-full mt-2 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] overflow-hidden border border-gray-100">
            {options.map((option: string) => (
              <div key={option} onClick={() => { onChange(option); setIsOpen(false); }} className="px-6 py-4 text-sm font-bold text-gray-700 hover:bg-gray-50 cursor-pointer border-b last:border-none border-gray-50">{option}</div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};


const PassengerForm = ({ number, title }: { number: number; title: string }) => {
  const [citizenship, setCitizenship] = useState("");
  const [passportType, setPassportType] = useState("");
  const citizenships = ["Кыргызстан", "Россия", "Казахстан", "Узбекистан"];
  const passportTypes = ["Внутренний паспорт", "Заграничный паспорт", "Свидетельство о рождении"];

  return (
    <div className="bg-[#F9FAFB] rounded-3xl md:rounded-[40px] p-6 md:p-10 mb-6 md:mb-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8 md:mb-10">
        <div>
          <h3 className="text-xl md:text-2xl font-black text-gray-900">Пассажир {number}</h3>
          <p className="text-xs md:text-sm text-gray-400 font-bold">{title}</p>
        </div>
        <div className="flex gap-4 md:gap-10 flex-row items-center bg-white/50 p-3 px-4 md:px-6 rounded-2xl w-full lg:w-auto">
          <h2 className="text-[10px] md:text-xs font-black text-gray-400 uppercase">Пол:</h2>
          <label className="flex items-center gap-2 cursor-pointer font-bold text-xs md:text-sm text-gray-700">
            <input type="radio" name={`gender-${number}`} className="w-4 h-4 accent-red-500" /> Женский
          </label>
          <label className="flex items-center gap-2 cursor-pointer font-bold text-xs md:text-sm text-gray-700">
            <input type="radio" name={`gender-${number}`} className="w-4 h-4 accent-red-500" /> Мужской
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        <input placeholder="ФИО" className="w-full bg-white py-4 md:py-5 px-5 md:px-6 rounded-xl md:rounded-2xl border-none text-sm font-bold shadow-sm outline-none placeholder:text-gray-300 focus:ring-2 ring-red-100" />
        <input placeholder="Дата рождения" className="w-full bg-white py-4 md:py-5 px-5 md:px-6 rounded-xl md:rounded-2xl border-none text-sm font-bold shadow-sm outline-none placeholder:text-gray-300 focus:ring-2 ring-red-100" />
        <CustomDropdown label="Гражданство" options={citizenships} value={citizenship} onChange={setCitizenship} />
        <CustomDropdown label="Тип паспорта" options={passportTypes} value={passportType} onChange={setPassportType} />
        <input placeholder="Серия и номер паспорта" className="w-full bg-white py-4 md:py-5 px-5 md:px-6 rounded-xl md:rounded-2xl border-none text-sm font-bold shadow-sm outline-none placeholder:text-gray-300 focus:ring-2 ring-red-100" />
        <input placeholder="Срок действия паспорта" className="w-full bg-white py-4 md:py-5 px-5 md:px-6 rounded-xl md:rounded-2xl border-none text-sm font-bold shadow-sm outline-none placeholder:text-gray-300 focus:ring-2 ring-red-100" />
      </div>
    </div>
  );
};

export default function CheckoutPage() {
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isTicketOpen, setIsTicketOpen] = useState(false); 
  

  const [selectedTariffKey, setSelectedTariffKey] = useState<keyof typeof TARIFF_DETAILS>("no_refund_with_baggage");
  
  const totalPrice = TARIFF_DETAILS[selectedTariffKey].price;

  const ticketData = {
    company: "S7 Airlines",
    logo: "/icon/logo.svg",
    tariff: TARIFF_DETAILS[selectedTariffKey]
  };

  const FlightInfoCard = ({ label, type }: { label: string; type: "Туда" | "Обратно" }) => (
    <div className="bg-white rounded-2xl md:rounded-[32px] p-5 md:p-8 shadow-sm border border-gray-50 mb-4 md:mb-6">
      <div className="flex justify-between items-center mb-6 md:mb-8">
        <div className="flex items-center gap-3 md:gap-4">
          <Image src="/icon/logo.svg" alt="logo" width={40} height={40} className="rounded-full md:w-[50px] md:h-[50px]" />
          <div>
            <p className="font-bold text-gray-900 text-base md:text-lg">S7 Airlines</p>
            <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest">Эконом</p>
          </div>
        </div>
        <span className="text-xs md:text-sm font-black text-green-500 uppercase tracking-widest">{type}</span>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:px-4">
        <div className="text-left w-full md:w-1/4">
          <p className="font-black text-xl text-gray-700 leading-tight">Бишкек</p>
          <p className="text-sm md:text-md font-bold text-gray-500">14 фев, 12:20</p>
          <p className="text-[11px] md:text-xs text-gray-400 font-bold">BSZ, Манас</p>
        </div>
        <div className="hidden md:flex flex-1 flex-col items-center px-1 relative">
          <div className="w-full flex items-center justify-center mb-1">
             <div className="h-[2px] w-full bg-gray-100 dashed-line relative">
                <div className="absolute left-0 -top-1 w-2.5 h-2.5 rounded-full border-2 border-red-500 bg-white"></div>
                <div className="absolute right-0 -top-1 w-2.5 h-2.5 rounded-full border-2 border-red-500 bg-white"></div>
             </div>
          </div>
          <span className="text-[10px] font-black text-gray-400 uppercase">Без пересадок</span>
        </div>
        <div className="text-left md:text-right w-full md:w-1/4">
          <p className="font-black text-xl text-gray-700 leading-tight">Москва</p>
          <p className="text-sm md:text-md font-bold text-gray-500">14 фев, 21:00</p>
          <p className="text-[11px] md:text-xs text-gray-400 font-bold">MOW, Домодедово</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white pb-20 md:pb-32 font-sans overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-8 md:pt-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 md:mb-12 px-2">
          <h1 className="text-2xl md:text-[32px] font-black text-gray-900 leading-tight max-w-2xl">Детали маршрута Бишкек-Москва-Бишкек</h1>
          <button 
            onClick={() => setIsTicketOpen(true)} 
            className="w-full md:w-auto bg-[#1A1A1A] text-white px-8 md:px-10 py-4 rounded-xl md:rounded-[22px] text-sm font-bold shadow-xl hover:bg-black active:scale-95 transition-all"
          >
            Детали прелета
          </button>
        </div>
        <div className="mb-10 md:mb-16">
          <FlightInfoCard label="Бишкек-Москва" type="Туда" />
          <FlightInfoCard label="Москва-Бишкек" type="Обратно" />
        </div>
        
        <div className="bg-[#F2F2F2] rounded-2xl md:rounded-[32px] p-3 md:p-5 flex flex-col md:flex-row justify-end gap-3 md:gap-5 my-10 md:my-16 shadow-inner relative">
          <div onClick={() => setIsPriceOpen(true)} className="flex bg-white rounded-xl md:rounded-[22px] px-6 md:px-8 py-4 items-center gap-4 cursor-pointer shadow-sm hover:shadow-md transition-all active:scale-95">
            <span className="font-black text-xl md:text-2xl text-gray-900 tracking-tighter">{totalPrice}</span>
            <svg width="12" height="8" viewBox="0 0 14 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1L7 7L13 1"/></svg>
          </div>
          <Link href="/seats" className="w-full md:w-auto">
            <button className="w-full bg-[#E11D48] text-white px-10 md:px-16 py-4 md:py-5 rounded-xl md:rounded-[24px] font-black text-lg md:text-xl hover:bg-[#BE123C] transition-all shadow-xl shadow-red-200 active:scale-95">
              Продолжить
            </button>
          </Link>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {(Object.keys(TARIFF_DETAILS) as Array<keyof typeof TARIFF_DETAILS>).map((key) => (
            <div 
              key={key} 
              onClick={() => setSelectedTariffKey(key)}
              className={`cursor-pointer rounded-[32px] p-8 border-2 transition-all duration-300 ${selectedTariffKey === key ? 'border-red-500 bg-white shadow-2xl scale-[1.02]' : 'border-gray-100 bg-gray-50/50 hover:border-gray-200'}`}
            >
              <h3 className="text-lg font-black text-gray-900 mb-6 h-12 flex items-center">{TARIFF_DETAILS[key].title}</h3>
              <ul className="space-y-4 mb-8">
                {TARIFF_DETAILS[key].features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-bold text-gray-600">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${feature.status ? 'border-green-500 text-green-500' : 'border-gray-300 text-gray-300'}`}>
                      {feature.status ? '✓' : '✕'}
                    </div>
                    {feature.label}
                  </li>
                ))}
              </ul>
              <div className="text-xl font-black text-gray-900 mb-4">{TARIFF_DETAILS[key].price}</div>
              <div className={`w-full py-3 rounded-xl text-center text-sm font-bold transition-all ${selectedTariffKey === key ? 'bg-red-500 text-white' : 'bg-black text-white'}`}>
                {selectedTariffKey === key ? 'Выбрано' : 'Выбрать'}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24">
          <h2 className="text-xl md:text-3xl font-black text-center mb-10 md:mb-16 text-gray-900 uppercase tracking-[0.3em]">Пассажиры</h2>
          <PassengerForm number={1} title="Взрослый, старше 12 лет" />
          <PassengerForm number={2} title="Ребенок, старше 2-х лет" />
          <PassengerForm number={3} title="Младенец, младше 2-х лет" />
        </div>
      </div>
      <TicketModal 
        isOpen={isTicketOpen} 
        onClose={() => setIsTicketOpen(false)} 
        ticket={ticketData} 
        selectedTariffKey={selectedTariffKey} 
      />

      <PriceDetailsModal 
        isOpen={isPriceOpen} 
        onClose={() => setIsPriceOpen(false)} 
        totalPrice={totalPrice} 
      />
    </div>
  );
}