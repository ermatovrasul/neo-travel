"use client";
import React, { useState, useMemo } from "react";
import { PassengerSeatCard } from "@/components/seats/PassengerSeatCard";
import { AirplaneMap } from "@/components/seats/AirplaneMap";

export default function SeatSelectionPage() {
  const [passengers, setPassengers] = useState<any[]>([
    { id: 1, name: "Иванов Иван", seat: null, price: 0 },
    { id: 2, name: "Иванова Анна", seat: null, price: 0 },
    { id: 3, name: "Иванов Алексей", seat: null, price: 0 }
  ]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  const handleSeatSelect = (seatId: string) => {
    const newPassengers = [...passengers];
    const seatAlreadyTaken = newPassengers.find(p => p.seat === seatId);
    if (seatAlreadyTaken) return; 
    
    newPassengers[activeIndex] = { 
      ...newPassengers[activeIndex], 
      seat: seatId, 
      price: 500 
    };
    
    setPassengers(newPassengers);
    if (activeIndex < passengers.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const totalAmount = useMemo(() => 
    passengers.reduce((sum, p) => sum + p.price, 0), 
    [passengers]
  );

  return (
    <div className="min-h-screen bg-white pb-40">
      <div className="max-w-6xl mx-auto px-6 pt-10">
        <h1 className="text-3xl font-black text-gray-900 mb-10">Выберите пассажирское место</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            {passengers.map((p, index) => (
              <PassengerSeatCard 
                key={p.id}
                name={p.name}
                seat={p.seat}
                price={p.price}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
            
            <div className="p-4 flex justify-between items-center ">
              <div 
                className="flex bg-[#F9FAFB] w-[200px] rounded-[22px] px-8 py-4 items-center gap-6 cursor-pointer"
                onClick={() => setIsPriceOpen(true)}
              >
                <span className="font-black text-xl text-gray-900">{totalAmount} KGS</span>
                <span className="text-gray-300">⌄</span>
              </div>

              <button 
                className="bg-[#E11D48] text-white px-16 py-5 rounded-[24px] font-black text-sm hover:bg-[#BE123C] disabled:bg-gray-300 transition-all"
                disabled={passengers.some(p => !p.seat)}
              >
                Продолжить
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center">
             <h2 className="text-sm font-bold text-gray-400 mb-6 uppercase tracking-widest">Выберите место на карте</h2>
             <AirplaneMap 
                onSeatSelect={handleSeatSelect} 
                selectedSeats={passengers.map(p => p.seat).filter((s): s is string => !!s)} 
             />
          </div>
        </div>
      </div>
    </div>
  );
}