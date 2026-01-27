"use client";
import { useState } from 'react';

interface Props {
  direction: 'one-way' | 'round-trip';
  setDirection: (dir: 'one-way' | 'round-trip') => void;
}

export const TicketFilters = ({ direction, setDirection }: Props) => {
  const [selectedDate, setSelectedDate] = useState('14 фев');
  const dates = ['14 фев', '15 фев', '16 фев', '17 фев'];

  return (
    <div className="max-w-7xl mx-auto px-4 mt-12 mb-8">
      <h2 className="text-2xl font-bold text-center mb-10 text-gray-900 leading-tight">
        Самые выгодные билеты <br className="md:hidden" /> Бишкек-Москва
      </h2>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex bg-[#F2F2F2] p-1.5 rounded-2xl">
          <button
            onClick={() => setDirection('one-way')}
            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
              direction === 'one-way' ? 'bg-[#1A1A1A] text-white shadow-lg' : 'text-gray-500'
            }`}
          >
            В одну сторону
          </button>
          <button
            onClick={() => setDirection('round-trip')}
            className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
              direction === 'round-trip' ? 'bg-[#1A1A1A] text-white shadow-lg' : 'text-gray-500'
            }`}
          >
            Туда и обратно
          </button>
        </div>
        <div className="flex bg-[#F2F2F2] p-1.5 rounded-2xl gap-1 overflow-x-auto max-w-full">
          {dates.map((date) => (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              className={`px-5 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                selectedDate === date ? 'bg-[#1A1A1A] text-white shadow-lg' : 'text-gray-500'
              }`}
            >
              {date}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};