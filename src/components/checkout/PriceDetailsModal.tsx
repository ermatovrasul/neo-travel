"use client";
import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  totalPrice: string;
}

export const PriceDetailsModal = ({ isOpen, onClose, totalPrice }: Props) => {
  if (!isOpen) return null;

  const flightData = [
    { route: "Бишкек-Москва", time: "14 февраля, среда • 12:20-21:00", tags: ["Тариф эконом", "💼 10 кг", "🧳 23 кг"] },
    { route: "Москва-Бишкек", time: "2 марта, пятница • 15:00-04:10", tags: ["Тариф эконом", "💼 10 кг", "🧳 23 кг"] },
  ];

  const priceRows = [
    { type: "Взрослый", qty: "1 x KGS 4,800", total: "KGS 4,800", tLabel: "Тариф", tVal: "1 x KGS 4,700", sLabel: "Сборы", sVal: "1 x KGS 100", final: "KGS 100" },
    { type: "Ребенок", qty: "1 x KGS 4,800", total: "KGS 4,800", tLabel: "Тариф", tVal: "1 x KGS 4,700", sLabel: "Сборы", sVal: "1 x KGS 100", final: "KGS 100" },
    { type: "Младенец", qty: "1 x KGS 0", total: "KGS 0", tLabel: "Тариф", tVal: "-", sLabel: "Сборы", sVal: "-", final: "-" },
  ];

  return (
    <>
      <div className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl z-[70] px-4 animate-in zoom-in-95 duration-200">
        <div className="bg-white rounded-[40px] shadow-[0_25px_70px_rgba(0,0,0,0.25)] overflow-hidden border border-gray-100">
          <div className="flex justify-center py-4">
            <div className="w-12 h-1.5 bg-gray-100 rounded-full cursor-pointer" onClick={onClose} />
          </div>

          <div className="px-10 pb-6">
            <div className="space-y-4 mb-8">
              {flightData.map((f, i) => (
                <div key={i} className="flex justify-between items-center text-[13px] font-bold">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-900">{f.route}</span>
                    <span className="text-gray-400 font-medium">{f.time}</span>
                    <div className="flex gap-2 items-center">
                    {f.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-blue-50 text-blue-500 rounded text-[10px] font-bold uppercase">{tag}</span>
                    ))}
                  </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-50 pt-8 space-y-6 mb-10">
              {priceRows.map((row, i) => (
                <div key={i} className="grid grid-cols-7 gap-4 items-center text-[12px] font-bold">
                  <span className="text-gray-900">{row.type}</span>
                  <span className="text-gray-400 font-medium">{row.qty}</span>
                  <span className="text-gray-900">{row.total}</span>
                  <span className="text-gray-400 font-medium">{row.tLabel}</span>
                  <span className="text-gray-900">{row.tVal}</span>
                  <span className="text-gray-400 font-medium">{row.sLabel}</span>
                  <span className="text-gray-900 text-right">{row.final}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#F2F2F2] rounded-[30px] p-4 flex justify-end gap-4  ">
              <div 
                className="flex bg-white rounded-2xl px-6 py-3 items-center gap-4 cursor-pointer"
                onClick={onClose}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">🛒</span>
                  <span className="font-black text-[22px] text-gray-900">{totalPrice}</span>
                </div>
                <span className="text-gray-400 rotate-180 transition-transform">
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M1 1L7 7L13 1"/>
                  </svg>
                </span>
              </div>

              <button className="bg-[#E11D48] text-white px-16 py-4 rounded-[22px] font-bold text-[18px] hover:bg-[#BE123C] transition-all shadow-lg shadow-red-200">
                Продолжить
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};