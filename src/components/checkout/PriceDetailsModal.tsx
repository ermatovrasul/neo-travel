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
      <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] md:max-w-5xl z-[110] outline-none animate-in zoom-in-95 duration-200">
        <div className="bg-white rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden border border-gray-100 flex flex-col">
          <div className="flex justify-center py-3 md:py-4">
            <div className="w-10 md:w-12 h-1.5 bg-gray-100 rounded-full cursor-pointer" onClick={onClose} />
          </div>

          <div className="px-5 md:px-10 pb-6 md:pb-8 overflow-y-auto max-h-[85vh]">
            <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4 md:mb-6 uppercase tracking-tight">Детали цены</h2>
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {flightData.map((f, i) => (
                <div key={i} className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 border-b border-gray-50 pb-3 md:pb-0 md:border-none">
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                    <span className="text-gray-900 font-bold text-sm md:text-[15px]">{f.route}</span>
                    <span className="text-gray-400 text-[11px] md:text-[13px] font-medium">{f.time}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {f.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-blue-50 text-blue-500 rounded text-[9px] md:text-[10px] font-bold uppercase">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-50 pt-6 md:pt-8 space-y-4 md:space-y-6 mb-8 md:mb-10">
              {priceRows.map((row, i) => (
                <div key={i}>
                  <div className="hidden md:grid grid-cols-7 gap-4 items-center text-[12px] font-bold">
                    <span className="text-gray-900">{row.type}</span>
                    <span className="text-gray-400 font-medium">{row.qty}</span>
                    <span className="text-gray-900">{row.total}</span>
                    <span className="text-gray-400 font-medium">{row.tLabel}</span>
                    <span className="text-gray-900">{row.tVal}</span>
                    <span className="text-gray-400 font-medium">{row.sLabel}</span>
                    <span className="text-gray-900 text-right">{row.final}</span>
                  </div>
                  <div className="md:hidden flex flex-col gap-2 bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="font-black text-gray-900 text-sm">{row.type}</span>
                      <span className="font-black text-gray-900">{row.total}</span>
                    </div>
                    <div className="flex justify-between text-[11px] font-bold">
                      <span className="text-gray-400 uppercase tracking-tighter">Тариф ({row.qty})</span>
                      <span className="text-gray-800">{row.tVal}</span>
                    </div>
                    <div className="flex justify-between text-[11px] font-bold">
                      <span className="text-gray-400 uppercase tracking-tighter">Сборы ({row.sLabel})</span>
                      <span className="text-gray-800">{row.final}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#F2F2F2] rounded-2xl md:rounded-[30px] p-3 md:p-4 flex flex-col md:flex-row justify-end gap-3 md:gap-4 sticky bottom-0">
              <div 
                className="flex bg-white rounded-xl md:rounded-2xl px-5 md:px-8 py-3 md:py-4 items-center justify-between md:justify-start gap-4 md:gap-8 cursor-pointer shadow-sm active:scale-95 transition-all"
                onClick={onClose}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <span className="text-lg md:text-xl">🛒</span>
                  <span className="font-black text-xl md:text-[24px] text-gray-900 tracking-tighter">{totalPrice}</span>
                </div>
                <span className="text-gray-300 rotate-180">
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                    <path d="M1 1L7 7L13 1"/>
                  </svg>
                </span>
              </div>

              <button className="w-full md:w-auto bg-[#E11D48] text-white px-10 md:px-16 py-4 md:py-5 rounded-xl md:rounded-[22px] font-black text-base md:text-[18px] hover:bg-[#BE123C] transition-all shadow-lg active:scale-95">
                Продолжить
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};