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
    <div className="bg-[#F2F2F2] p-6 gap-4 rounded-2xl flex flex-wrap lg:flex-nowrap gap-1 items-center shadow-sm max-w-7xl mx-auto">
      <div className="flex-1 min-w-[150px] h-12 bg-white rounded-xl px-4 py-2 flex flex-col items-start border-r border-gray-100">
        <input type="text" placeholder="Бишкек" className="w-full outline-none text-sm font-semibold text-gray-700" />
      </div>
      <div className="flex-1 min-w-[150px] h-12 bg-white rounded-xl px-4 py-2 border-r border-gray-100">
        <input type="text" placeholder="Куда" className="w-full outline-none text-sm font-semibold text-gray-700" />
      </div>
      <div className="flex-1 min-w-[130px] h-12 bg-white rounded-xl px-4 py-2 flex flex-col items-start border-r border-gray-100 relative">
        <DatePicker
          selected={startDate}
          onChange={(date: Date | null) => setStartDate(date)}
          placeholderText="Когда"
          className="w-full outline-none text-sm font-semibold text-gray-700 cursor-pointer"
          dateFormat="dd MMM, ee"
          shouldCloseOnSelect={true}
        >
          <div className="p-3 border-t border-gray-100">
            <button 
              className="w-full bg-[#1A1A1A] text-white py-2 rounded-xl text-sm font-bold hover:bg-black transition-all"
              
            >
            Найти
            </button>
          </div>
        </DatePicker>
        <Calendar className="absolute right-3 top-3 w-4 h-4 text-gray-300 pointer-events-none" />
      </div>
      <div className="flex-1 min-w-[130px] h-12 bg-white rounded-xl px-4 py-2 border-r border-gray-100 relative">
        <DatePicker
          selected={endDate}
          onChange={(date: Date | null) => setEndDate(date)}
          placeholderText="Обратно"
          className="w-full outline-none text-sm font-semibold text-gray-700 cursor-pointer"
          dateFormat="dd MMM, ee"
          shouldCloseOnSelect={true}
        >
          <div className="p-3 border-t border-gray-100">
      <button 
        className="w-full bg-[#1A1A1A] text-white py-2 rounded-xl text-sm font-bold hover:bg-black transition-all"
      >
        Найти
      </button>
    </div>
        </DatePicker>
        <Calendar className="absolute right-3 top-3 w-4 h-4 text-gray-300 pointer-events-none" />
      </div>
      <div className="flex-1 min-w-[130px] h-14 mt-2 relative" ref={dropdownRef}>
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white rounded-xl px-4 py-2 flex flex-col items-start cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center justify-between h-4 w-full">
            <span className="text-sm font-bold text-gray-800">{totalPassengers} пассажир</span>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </div>
          <span className="text-[11px] text-gray-400">{classType}</span>
        </div>

        {isOpen && (
          <div className="absolute top-full  left-0 mt-4 w-72 bg-white rounded-2xl shadow-2xl z-[999] p-5 border border-gray-100">
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

            <div className="space-y-5 ">
              {[
                { label: 'Взрослые', sub: '12 лет и старше', key: 'adults' },
                { label: 'Дети', sub: 'от 2 до 11 лет', key: 'children' },
                { label: 'Младенцы', sub: 'до 2 лет, без места', key: 'infants' }
              ].map((item) => (
                <div key={item.key} className="flex items-center  justify-between">
                  <div>
                    <p className="text-sm font-bold text-gray-800 text-left">{item.label}</p>
                    <p className="text-[10px] text-gray-400">{item.sub}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => updateCount(item.key as any, -1)}
                      className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-400"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-bold w-4 text-center">{passengers[item.key as keyof typeof passengers]}</span>
                    <button 
                      onClick={() => updateCount(item.key as any, 1)}
                      className="w-7 h-7 rounded-full bg-[#E11D48] flex items-center justify-center hover:bg-red-600 text-white"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setIsOpen(false)}
              className="w-full mt-6 bg-[#1A1A1A] text-white py-3 rounded-xl text-sm font-bold hover:bg-black transition-all"
            >
              Найти
            </button>
          </div>
        )}
      </div>

      <Link href="/ticket"><button className="bg-[#E11D48] hover:bg-red-600 text-white px-6 py-2 rounded-xl font-bold transition-all ml-2 h-[44px]">
        Найти билеты →
      </button></Link>
    </div>
  );
}