"use client";

import { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
// @ts-ignore
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, ChevronDown, Plus, Minus, MapPin } from 'lucide-react';
import Link from 'next/link';

const CITIES = [
  { name: "Бишкек", code: "FRU", country: "Кыргызстан" },
  { name: "Ош", code: "OSS", country: "Кыргызстан" },
  { name: "Москва", code: "MOW", country: "Россия" },
  { name: "Алматы", code: "ALA", country: "Казахстан" },
  { name: "Стамбул", code: "IST", country: "Турция" },
];

export default function SearchBar() {
  const [fromCity, setFromCity] = useState("Бишкек");
  const [toCity, setToCity] = useState("");
  const [showFromCities, setShowFromCities] = useState(false);
  const [showToCities, setShowToCities] = useState(false);

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
  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);
  const startPickerRef = useRef<any>(null);
  const endPickerRef = useRef<any>(null);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) setIsOpen(false);
      if (fromRef.current && !fromRef.current.contains(event.target as Node)) setShowFromCities(false);
      if (toRef.current && !toRef.current.contains(event.target as Node)) setShowToCities(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const updateCount = (type: keyof typeof passengers, delta: number) => {
    setPassengers(prev => ({
      ...prev,
      [type]: Math.max(type === 'adults' ? 1 : 0, prev[type] + delta)
    }));
  };

  const CityList = ({ onSelect }: { onSelect: (name: string) => void }) => (
    <div className="absolute top-[calc(100%+8px)] left-0 w-full md:w-[250px] bg-white rounded-2xl shadow-2xl z-[110] border border-gray-100 overflow-hidden animate-in fade-in zoom-in duration-200">
      <div className="p-2">
        {CITIES.map((city) => (
          <div 
            key={city.code}
            onClick={() => onSelect(city.name)}
            className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors"
          >
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-gray-400" />
              <div>
                <p className="text-sm font-bold text-gray-800">{city.name}</p>
                <p className="text-[10px] text-gray-400">{city.country}</p>
              </div>
            </div>
            <span className="text-xs font-bold text-gray-300">{city.code}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-[#F2F2F2] p-4 md:p-6 rounded-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2 items-center shadow-sm max-w-7xl mx-auto relative !overflow-visible z-[100]"> 
      
      {/* ОТКУДА */}
      <div className="h-12 bg-white rounded-xl px-4 py-2 flex items-center relative" ref={fromRef}>
        <input 
          type="text" 
          value={fromCity}
          onFocus={() => setShowFromCities(true)}
          readOnly
          placeholder="Откуда" 
          className="w-full h-full outline-none text-sm font-semibold text-gray-700 cursor-pointer" 
        />
        {showFromCities && <CityList onSelect={(name) => { setFromCity(name); setShowFromCities(false); }} />}
      </div>
      <div className="h-12 bg-white rounded-xl px-4 py-2 flex items-center relative" ref={toRef}>
        <input 
          type="text" 
          value={toCity}
          onFocus={() => setShowToCities(true)}
          readOnly
          placeholder="Куда" 
          className="w-full h-full outline-none text-sm font-semibold text-gray-700 cursor-pointer" 
        />
        {showToCities && <CityList onSelect={(name) => { setToCity(name); setShowToCities(false); }} />}
      </div>
      <div className="h-12 bg-white rounded-xl px-4 py-2 flex items-center relative">
        <DatePicker
          ref={startPickerRef}
          selected={startDate}
          onChange={(date: Date | null) => setStartDate(date)}
          placeholderText="Когда"
          className="w-full outline-none text-sm font-semibold text-gray-700 cursor-pointer bg-transparent"
          dateFormat="dd MMM"
          popperPlacement="bottom"
        >
          <button className="w-full bg-[#202020] text-white py-2.5 rounded-xl text-sm font-bold active:scale-95 transition-all">найти</button>
        </DatePicker>
        <Calendar className="absolute right-3 w-4 h-4 text-gray-300 pointer-events-none" />
      </div>

      <div className="h-12 bg-white rounded-xl px-4 py-2 flex items-center relative">
        <DatePicker
          ref={endPickerRef}
          selected={endDate}
          onChange={(date: Date | null) => setEndDate(date)}
          placeholderText="Обратно"
          className="w-full outline-none text-sm font-semibold text-gray-700 cursor-pointer bg-transparent"
          dateFormat="dd MMM"
          popperPlacement="bottom"
        >
          <button className="w-full bg-[#202020] text-white py-2.5 rounded-xl text-sm font-bold active:scale-95 transition-all">найти</button>
        </DatePicker>
        <Calendar className="absolute right-3 w-4 h-4 text-gray-300 pointer-events-none" />
      </div>


      <div className="h-12 relative w-full" ref={dropdownRef}>
        <div onClick={() => setIsOpen(!isOpen)} className="bg-white rounded-xl px-4 h-full flex flex-col justify-center cursor-pointer">
          <div className="flex items-center justify-between w-full">
            <span className="text-sm font-bold text-gray-800">{passengers.adults + passengers.children + passengers.infants} пасс.</span>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </div>
          <span className="text-[10px] text-gray-400 leading-none">{classType}</span>
        </div>

        {isOpen && (
          <div className="fixed md:absolute top-[30%] md:top-[calc(100%+8px)] left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-[90%] md:w-[320px] bg-white rounded-2xl shadow-2xl z-[9999] p-5 border border-gray-100">
            <div className="flex bg-gray-100 p-1 rounded-xl mb-6">
              {['Эконом', 'Бизнес'].map((t) => (
                <button key={t} onClick={() => setClassType(t)} className={`flex-1 py-1.5 text-xs font-bold rounded-lg ${classType === t ? 'bg-black text-white' : 'text-gray-500'}`}>{t}</button>
              ))}
            </div>
            <div className="space-y-4 mb-6">
               {[
                { label: 'Взрослые', key: 'adults' },
                { label: 'Дети', key: 'children' },
                { label: 'Младенцы', key: 'infants' }
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between">
                  <span className="text-sm font-bold">{item.label}</span>
                  <div className="flex items-center gap-3">
                    <button onClick={() => updateCount(item.key as any, -1)} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center"><Minus size={14}/></button>
                    <span className="font-bold">{passengers[item.key as keyof typeof passengers]}</span>
                    <button onClick={() => updateCount(item.key as any, 1)} className="w-8 h-8 rounded-full bg-[#E11D48] text-white flex items-center justify-center"><Plus size={14}/></button>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => setIsOpen(false)} className="w-full bg-[#202020] text-white py-3 rounded-xl text-sm font-bold active:scale-95 transition-all">
              Готово
            </button>
          </div>
        )}
      </div>

      <Link href="/ticket" className="w-full">
        <button className="w-full bg-[#E11D48] hover:bg-red-600 text-white h-12 rounded-xl font-bold shadow-lg active:scale-95 transition-all">
          Найти
        </button>
      </Link>
    </div>
  );
}