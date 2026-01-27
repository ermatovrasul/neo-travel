"use client";
import Image from "next/image";
import { useState } from "react";
import { PriceDetailsModal } from "@/components/checkout/PriceDetailsModal";
import Link from "next/link";

export default function CheckoutPage() {
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const totalPrice = "121 540 сом";

  const FlightInfoCard = ({ label, type }: { label: string; type: "Туда" | "Обратно" }) => (
    <div className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-50 mb-6">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
             <Image src="/icon/logo.svg" alt="logo" width={50} height={50} className="rounded-full" />
          <div>
            <p className="font-bold text-gray-900 text-lg">S7 Airlines</p>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Эконом</p>
          </div>
        </div>
        <span className="text-sm font-black text-green-500 uppercase tracking-widest">{type}</span>
      </div>

      <div className="relative flex justify-between items-center px-4">
        <div className="text-left w-1/4">
          <p className="font-black text-xl text-gray-700 leading-tight">Бишкек</p>
          <p className="text-md font-bold text-gray-500">14 фев, 12:20</p>
          <p className="text-xs text-gray-400 font-bold">BSZ, Манас</p>
        </div>

        <div className="flex-1 max-w-6xl flex flex-col items-center px-1 relative">
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

        <div className="text-right w-1/4">
          <p className="font-black text-xl text-gray-700 leading-tight">Москва</p>
          <p className="text-md font-bold text-gray-500">14 фев, 21:00</p>
          <p className="text-xs text-gray-400 font-bold">MOW, Домодедово</p>
        </div>
      </div>
    </div>
  );

  const PassengerForm = ({ number, title }: { number: number; title: string }) => (
    <div className="bg-[#F9FAFB] rounded-[40px] p-10 mb-8">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h3 className="text-2xl font-black text-gray-900">Пассажир {number}</h3>
          <p className="text-sm text-gray-400 font-bold">{title}</p>
        </div>
        <div className="flex gap-10 flex-row items-center bg-white/50 p-2 px-6 rounded-2xl">
          <h2 className="text-xs font-black text-gray-400 uppercase">Пол:</h2>
          <label className="flex items-center gap-3 cursor-pointer font-bold text-sm text-gray-700">
            <input type="radio" name={`gender-${number}`} className="w-5 h-5 accent-red-500" /> Женский
          </label>
          <label className="flex items-center gap-3 cursor-pointer font-bold text-sm text-gray-700">
            <input type="radio" name={`gender-${number}`} className="w-5 h-5 accent-red-500" /> Мужской
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["ФИО", "Дата рождения", "Гражданство", "Тип паспорта", "Серия и номер паспорта", "Срок действия паспорта"].map((placeholder) => (
          <div key={placeholder} className="relative">
            <input 
              placeholder={placeholder} 
              className="w-full bg-white py-5 px-6 rounded-2xl border-none text-sm font-bold shadow-sm outline-none placeholder:text-gray-300 focus:ring-2 ring-red-100 transition-all" 
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white pb-32 font-sans">
      <div className="max-w-6xl mx-auto px-6 pt-12">
        <div className="flex justify-between items-center mb-12 px-2">
          <h1 className="text-[32px] font-black text-gray-900 tracking-tight leading-tight max-w-2xl">
            Детали маршрута Бишкек-Москва-Бишкек
          </h1>
          <button className="bg-[#1A1A1A] text-white px-10 py-4 rounded-[22px] text-sm font-bold shadow-xl shadow-black/10 hover:bg-black transition-all active:scale-95">
            Детали прелета
          </button>
        </div>
        <div className="mb-16">
          <FlightInfoCard label="Бишкек-Москва" type="Туда" />
          <FlightInfoCard label="Москва-Бишкек" type="Обратно" />
        </div>
        <div className="bg-[#F2F2F2] rounded-[32px] p-5 flex justify-end gap-5 my-16 shadow-inner relative">
          <PriceDetailsModal 
            isOpen={isPriceOpen} 
            onClose={() => setIsPriceOpen(false)} 
            totalPrice={totalPrice} 
          />
          
          <div 
            className="flex bg-white rounded-[22px] px-8 py-4 items-center gap-8 cursor-pointer shadow-sm hover:shadow-md transition-all active:scale-95"
            onClick={() => setIsPriceOpen(true)}
          >
            <div className="flex items-center gap-3">
               <span className="text-xl">🛒</span>
               <span className="font-black text-2xl text-gray-900 tracking-tighter">{totalPrice}</span>
            </div>
            <span className="text-gray-300">
              <svg width="16" height="10" viewBox="0 0 14 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 1L7 7L13 1"/>
              </svg>
            </span>
          </div>
          <Link href="/seats"><button className="bg-[#E11D48] text-white px-16 py-5 rounded-[24px] font-black text-xl hover:bg-[#BE123C] transition-all shadow-2xl shadow-red-200 active:scale-95">
            Продолжить
          </button></Link>
        </div>
        <div className="mt-24">
          <h2 className="text-3xl font-black text-center mb-16 text-gray-900 uppercase tracking-[0.3em]">Пассажиры</h2>
          <PassengerForm number={1} title="Взрослый, старше 12 лет" />
          <PassengerForm number={2} title="Ребенок, старше 2-х лет" />
          <PassengerForm number={3} title="Младенец, младше 2-х лет" />
        </div>
        <div className="mt-28">
          <h2 className="text-3xl font-black text-center mb-16 text-gray-900 uppercase tracking-[0.3em]">Контактные данные</h2>
          <div className="bg-[#F9FAFB] rounded-[40px] p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {["Контактное лицо", "Контактный телефон", "Электронная почта"].map(p => (
                <input 
                  key={p} 
                  placeholder={p} 
                  className="bg-white p-6 rounded-2xl border-none text-sm font-bold shadow-sm outline-none placeholder:text-gray-300" 
                />
              ))}
            </div>
            <div className="space-y-6 max-w-4xl">
              {[
                "Я хочу зарегистрироваться на сайте, используя введенные мной данные, и согласен(на) получать информацию об акциях и специальных предложениях на электронную почту",
                "Я согласен получать информацию об акциях и специальных предложениях на электронную почту"
              ].map((text, i) => (
                <label key={i} className="flex items-start gap-5 text-[13px] font-bold text-gray-500 cursor-pointer leading-relaxed group">
                  <div className="relative flex items-center">
                    <input type="checkbox" className="peer mt-1 w-6 h-6 accent-red-500 rounded-md border-gray-200 shadow-sm transition-all" />
                  </div>
                  <span className="group-hover:text-gray-700 transition-colors">{text}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}