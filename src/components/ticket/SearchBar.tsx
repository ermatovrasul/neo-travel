"use client";

import { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
// @ts-ignore
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, ChevronDown, Plus, Minus } from 'lucide-react';
import Link from 'next/link';

export default function SearchBar() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0
  });
  const [classType, setClassType] = useState('Эконом');
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const startPickerRef = useRef<any>(null);
  const endPickerRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const totalPassengers = passengers.adults + passengers.children + passengers.infants;

  const updateCount = (type: keyof typeof passengers, delta: number) => {
    setPassengers(prev => ({
      ...prev,
      [type]: Math.max(type === 'adults' ? 1 : 0, prev[type] + delta)
    }));
  };

  return (
    <div className="bg-[#F2F2F2] p-0 md:p-8 md:p-6 rounded-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 md:gap-1 items-center shadow-sm max-w-7xl mx-auto relative !overflow-visible z-50"> 
      <div className="h-12 bg-white rounded-xl px-4 py-2 flex flex-col items-start border-r border-gray-100 w-full">
        <input type="text" placeholder="Бишкек" className="w-full outline-none text-sm font-semibold text-gray-700 h-full" />
      </div>
      
      <div className="h-12 bg-white rounded-xl px-4 py-2 border-r border-gray-100 w-full">
        <input type="text" placeholder="Куда" className="w-full outline-none text-sm font-semibold text-gray-700 h-full" />
      </div>
      <div className="h-12 bg-white rounded-xl px-4 py-2 flex items-center border-r border-gray-100 relative w-full">
        <DatePicker
          ref={startPickerRef}
          selected={startDate}
          onChange={(date: Date | null) => setStartDate(date)}
          placeholderText="Когда"
          className="w-full outline-none text-sm font-semibold text-gray-700 cursor-pointer bg-transparent"
          dateFormat="dd MMM"
          portalId="root-portal" 
          popperPlacement="bottom-start"
          shouldCloseOnSelect={true}
        >
          <div className="p-2 border-t border-gray-100 bg-white">
            <button 
              type="button"
              onClick={() => startPickerRef.current.setOpen(false)}
              className="w-full bg-[#1A1A1A] text-white py-2 rounded-lg text-xs font-bold hover:bg-black transition-all"
            >
              Найти
            </button>
          </div>
        </DatePicker>
        <Calendar className="absolute right-3 w-4 h-4 text-gray-300 pointer-events-none" />
      </div>
      <div className="h-12 bg-white rounded-xl px-4 py-2 flex items-center border-r border-gray-100 relative w-full">
        <DatePicker
          ref={endPickerRef}
          selected={endDate}
          onChange={(date: Date | null) => setEndDate(date)}
          placeholderText="Обратно"
          className="w-full outline-none text-sm font-semibold text-gray-700 cursor-pointer bg-transparent"
          dateFormat="dd MMM"
          portalId="root-portal"
          popperPlacement="bottom-start"
          shouldCloseOnSelect={true}
        >
          <div className="p-2 border-t border-gray-100 bg-white">
            <button 
              type="button"
              onClick={() => endPickerRef.current.setOpen(false)}
              className="w-full bg-[#1A1A1A] text-white py-2 rounded-lg text-xs font-bold hover:bg-black transition-all"
            >
              Найти
            </button>
          </div>
        </DatePicker>
        <Calendar className="absolute right-3 w-4 h-4 text-gray-300 pointer-events-none" />
      </div>
      <div className="h-12 relative w-full" ref={dropdownRef}>
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white rounded-xl px-4 h-full flex flex-col justify-center cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center justify-between w-full">
            <span className="text-sm font-bold text-gray-800">{totalPassengers} пасс.</span>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </div>
          <span className="text-[10px] text-gray-400 leading-none">{classType}</span>
        </div>
        {isOpen && (
          <div className="fixed lg:absolute top-auto lg:top-[calc(100%+8px)] mt-2 w-[calc(100vw-32px)] lg:w-[320px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-[9999] p-5 border border-gray-100">
            <div className="flex bg-gray-100 p-1 rounded-xl mb-6">
              {['Эконом', 'Бизнес'].map((t) => (
                <button
                  key={t}
                  onClick={() => setClassType(t)}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${classType === t ? 'bg-[#1A1A1A] text-white shadow-md' : 'text-gray-500'}`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="space-y-5">
              {[
                { label: 'Взрослые', sub: '12+', key: 'adults' },
                { label: 'Дети', sub: '2-11 лет', key: 'children' },
                { label: 'Младенцы', sub: 'до 2 лет', key: 'infants' }
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-sm font-bold text-gray-800">{item.label}</p>
                    <p className="text-[10px] text-gray-400">{item.sub}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={(e) => { e.stopPropagation(); updateCount(item.key as any, -1); }}
                      className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-400"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-bold w-4 text-center">{passengers[item.key as keyof typeof passengers]}</span>
                    <button 
                      onClick={(e) => { e.stopPropagation(); updateCount(item.key as any, 1); }}
                      className="w-8 h-8 rounded-full bg-[#E11D48] flex items-center justify-center hover:bg-red-600 text-white"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Link href="/ticket" className="w-full">
        <button className="w-full bg-[#E11D48] hover:bg-red-600 text-white h-12 rounded-xl font-bold transition-all shadow-lg active:scale-95">
          Найти
        </button>
      </Link>
    </div>
  );
}