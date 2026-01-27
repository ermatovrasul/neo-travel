import React from "react";
export const AirplaneMap = ({ onSeatSelect, selectedSeats }: any) => {
  const rows = 11;
  const letters = ["A", "B", "C", "D", "E", "F"];

  return (
    <div className="bg-[#F4F5F7] rounded-[40px] p-10 flex flex-col items-center">
      <div className="grid grid-cols-7 gap-x-4 gap-y-3">
        {["A", "B", "C", "", "D", "E", "F"].map((l, i) => (
          <div key={i} className="text-center font-black text-gray-400 text-sm pb-2">{l}</div>
        ))}
        {Array.from({ length: rows }).map((_, r) => (
          <React.Fragment key={r}>
            {letters.map((l, c) => {
              const id = `${l}${r + 1}`;
              const isSelected = selectedSeats.includes(id);
              
              return (
                <React.Fragment key={id}>
                  {c === 3 && <div className="flex items-center justify-center text-gray-400 font-bold text-xs">{r + 1}</div>}
                  <button
                    onClick={() => onSeatSelect(id)}
                    className={`w-10 h-10 rounded-lg border-2 transition-all flex items-center justify-center ${
                      isSelected 
                        ? "bg-[#2D2D2D] border-[#2D2D2D] text-white" 
                        : "bg-white border-gray-200 hover:border-red-300 shadow-sm"
                    }`}
                  >
                    {isSelected && <span className="text-[10px]">✓</span>}
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