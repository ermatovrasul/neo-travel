"use client";
import React from "react";

export const AirplaneMap = ({ onSeatSelect, selectedSeats }: any) => {
  const rows = 11;
  const letters = ["A", "B", "C", "D", "E", "F"];

  return (
    <div className="bg-[#F4F5F7] rounded-3xl md:rounded-[40px] p-4 md:p-10 flex flex-col items-center overflow-x-auto">
      <div className="grid grid-cols-7 gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-3 min-w-max">
        {["A", "B", "C", "", "D", "E", "F"].map((l, i) => (
          <div key={i} className="text-center font-black text-gray-400 text-[10px] md:text-sm pb-1 md:pb-2">
            {l}
          </div>
        ))}
        {Array.from({ length: rows }).map((_, r) => (
          <React.Fragment key={r}>
            {letters.map((l, c) => {
              const id = `${l}${r + 1}`;
              const isSelected = selectedSeats.includes(id);
              
              return (
                <React.Fragment key={id}>
                  {c === 3 && (
                    <div className="flex items-center justify-center text-gray-400 font-bold text-[10px] md:text-xs">
                      {r + 1}
                    </div>
                  )}

                  <button
                    onClick={() => onSeatSelect(id)}
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-md md:rounded-lg border-2 transition-all flex items-center justify-center ${
                      isSelected 
                        ? "bg-[#2D2D2D] border-[#2D2D2D] text-white shadow-md scale-95" 
                        : "bg-white border-gray-200 hover:border-red-300 shadow-sm active:bg-gray-50"
                    }`}
                  >
                    {isSelected ? (
                      <span className="text-[10px] md:text-xs">✓</span>
                    ) : (
                      <span className="text-[8px] md:text-[10px] text-gray-200">{l}</span>
                    )}
                  </button>
                </React.Fragment>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};