"use client";
import Image from "next/image";
import { useState } from "react";
import { PriceDetailsModal } from "@/components/checkout/PriceDetailsModal";
import { TicketModal } from "@/components/ticket/TicketModal";
import Link from "next/link";

export default function CheckoutPage() {
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isTicketOpen, setIsTicketOpen] = useState(false); 
  
  const totalPrice = "121 540 сом";

  const ticketData = {
    company: "S7 Airlines",
    logo: "/icon/logo.svg"
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
        <div className="hidden md:flex flex-1 max-w-6xl flex-col items-center px-1 relative">
          <div className="w-full flex items-center justify-center mb-1">
             <div className="h-[2px] w-full bg-gray-100 dashed-line relative">
                <div className="absolute left-0 -top-1 w-2.5 h-2.5 rounded-full border-2 border-red-500 bg-white"></div>
                <div className="absolute right-0 -top-1 w-2.5 h-2.5 rounded-full border-2 border-red-500 bg-white"></div>
             </div>
             <div className="absolute -top-3 text-red-500 rotate-90">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M21,16L21,14L13,9L13,3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5L10,9L2,14L2,16L10,13.5L10,19L8,20.5L8,22L11.5,21L15,22L15,20.5L13,19L13,13.5L21,16Z" />
                </svg>
             </div>
          </div>
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Без пересадок</span>
        </div>

        <div className="text-left md:text-right w-full md:w-1/4">
          <p className="font-black text-xl text-gray-700 leading-tight">Москва</p>
          <p className="text-sm md:text-md font-bold text-gray-500">14 фев, 21:00</p>
          <p className="text-[11px] md:text-xs text-gray-400 font-bold">MOW, Домодедово</p>
        </div>
      </div>
    </div>
  );

  const PassengerForm = ({ number, title }: { number: number; title: string }) => (
    <div className="bg-[#F9FAFB] rounded-3xl md:rounded-[40px] p-6 md:p-10 mb-6 md:mb-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8 md:mb-10">
        <div>
          <h3 className="text-xl md:text-2xl font-black text-gray-900">Пассажир {number}</h3>
          <p className="text-xs md:text-sm text-gray-400 font-bold">{title}</p>
        </div>
        <div className="flex gap-4 md:gap-10 flex-row items-center bg-white/50 p-3 px-4 md:px-6 rounded-2xl w-full lg:w-auto overflow-x-auto">
          <h2 className="text-[10px] md:text-xs font-black text-gray-400 uppercase whitespace-nowrap">Пол:</h2>
          <label className="flex items-center gap-2 cursor-pointer font-bold text-xs md:text-sm text-gray-700 whitespace-nowrap">
            <input type="radio" name={`gender-${number}`} className="w-4 h-4 md:w-5 md:h-5 accent-red-500" /> Женский
          </label>
          <label className="flex items-center gap-2 cursor-pointer font-bold text-xs md:text-sm text-gray-700 whitespace-nowrap">
            <input type="radio" name={`gender-${number}`} className="w-4 h-4 md:w-5 md:h-5 accent-red-500" /> Мужской
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {["ФИО", "Дата рождения", "Гражданство", "Тип паспорта", "Серия и номер паспорта", "Срок действия паспорта"].map((placeholder) => (
          <div key={placeholder} className="relative">
            <input 
              placeholder={placeholder} 
              className="w-full bg-white py-4 md:py-5 px-5 md:px-6 rounded-xl md:rounded-2xl border-none text-sm font-bold shadow-sm outline-none placeholder:text-gray-300 focus:ring-2 ring-red-100 transition-all" 
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white pb-20 md:pb-32 font-sans overflow-x-hidden">

      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-8 md:pt-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 md:mb-12 px-2">
          <h1 className="text-2xl md:text-[32px] font-black text-gray-900 tracking-tight leading-tight max-w-2xl">
            Детали маршрута Бишкек-Москва-Бишкек
          </h1>
          <button 
            onClick={() => setIsTicketOpen(true)}
            className="w-full md:w-auto bg-[#1A1A1A] text-white px-8 md:px-10 py-4 rounded-xl md:rounded-[22px] text-sm font-bold shadow-xl shadow-black/10 hover:bg-black transition-all active:scale-95"
          >
            Детали прелета
          </button>
        </div>
        <div className="mb-10 md:mb-16">
          <FlightInfoCard label="Бишкек-Москва" type="Туда" />
          <FlightInfoCard label="Москва-Бишкек" type="Обратно" />
        </div>
        
        <div className="bg-[#F2F2F2] rounded-2xl md:rounded-[32px] p-3 md:p-5 flex flex-col md:flex-row justify-end gap-3 md:gap-5 my-10 md:my-16 shadow-inner relative">
          <div 
            className="flex bg-white rounded-xl md:rounded-[22px] px-6 md:px-8 py-4 items-center justify-between md:justify-start gap-4 md:gap-8 cursor-pointer shadow-sm hover:shadow-md transition-all active:scale-95"
            onClick={() => setIsPriceOpen(true)}
          >
            <div className="flex items-center gap-3">
               <span className="text-lg md:text-xl">🛒</span>
               <span className="font-black text-xl md:text-2xl text-gray-900 tracking-tighter">{totalPrice}</span>
            </div>
            <span className="text-gray-300">
              <svg width="12" height="8" viewBox="0 0 14 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 1L7 7L13 1"/>
              </svg>
            </span>
          </div>
          <Link href="/seats" className="w-full md:w-auto">
            <button className="w-full bg-[#E11D48] text-white px-10 md:px-16 py-4 md:py-5 rounded-xl md:rounded-[24px] font-black text-lg md:text-xl hover:bg-[#BE123C] transition-all shadow-xl shadow-red-200 active:scale-95">
              Продолжить
            </button>
          </Link>
        </div>
        <div className="mt-16 md:mt-24">
          <h2 className="text-xl md:text-3xl font-black text-center mb-10 md:mb-16 text-gray-900 uppercase tracking-[0.1em] md:tracking-[0.3em]">Пассажиры</h2>
          <PassengerForm number={1} title="Взрослый, старше 12 лет" />
          <PassengerForm number={2} title="Ребенок, старше 2-х лет" />
          <PassengerForm number={3} title="Младенец, младше 2-х лет" />
        </div>
      </div>
      <TicketModal 
        isOpen={isTicketOpen} 
        onClose={() => setIsTicketOpen(false)} 
        ticket={ticketData} 
      />
      <PriceDetailsModal 
        isOpen={isPriceOpen} 
        onClose={() => setIsPriceOpen(false)} 
        totalPrice={totalPrice} 
      />
    </div>
  );
}