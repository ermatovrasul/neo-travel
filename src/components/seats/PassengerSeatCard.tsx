interface PassengerProps {
  name: string;
  seat: string | null;
  price: number;
  isActive: boolean;
  onClick: () => void;
}

export const PassengerSeatCard = ({ name, seat, price, isActive, onClick }: PassengerProps) => (
  <div 
    onClick={onClick}
    className={`p-4 md:p-5 rounded-[20px] md:rounded-[24px] border-2 transition-all cursor-pointer flex justify-between items-center ${
      isActive 
        ? "border-red-500 bg-white shadow-xl -translate-y-1" 
        : "border-gray-100 bg-[#F9FAFB] hover:border-gray-200"
    }`}
  >
    <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
      <div className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-black text-base md:text-lg transition-colors ${
        seat ? "bg-[#E11D48] text-white" : "bg-gray-200 text-gray-400"
      }`}>
        {seat || "?"}
      </div>

      <div className="overflow-hidden">
        <p className="text-[9px] md:text-[10px] text-red-500 font-black uppercase tracking-widest mb-0.5 flex items-center gap-1 truncate">
          <span className="rotate-45 text-xs">✈</span> Бишкек - Москва
        </p>
        <p className="font-black text-gray-900 text-sm md:text-base truncate">{name}</p>
      </div>
    </div>

    <div className="text-right shrink-0 ml-2">
      <p className={`font-black text-xs md:text-sm ${seat ? "text-gray-900" : "text-gray-300"}`}>
        {seat ? `${price} сом` : "Выбор..."}
      </p>
    </div>
  </div>
);