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
    className={`p-5 rounded-[24px] border-2 transition-all cursor-pointer flex justify-between items-center ${
      isActive ? "border-red-500 bg-white shadow-lg" : "border-gray-100 bg-[#F9FAFB]"
    }`}
  >
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg ${
        seat ? "bg-red-500 text-white" : "bg-gray-200 text-gray-400"
      }`}>
        {seat || "?"}
      </div>
      <div>
        <p className="text-[10px] text-red-500 font-black uppercase tracking-widest mb-0.5 flex items-center gap-1">
          <span className="rotate-45 text-xs">✈</span> Бишкек - Москва
        </p>
        <p className="font-black text-gray-900">{name}</p>
      </div>
    </div>
    <div className="text-right">
      <p className={`font-black ${seat ? "text-gray-900" : "text-gray-300"}`}>
        {seat ? `${price} сом` : "Не выбрано"}
      </p>
    </div>
  </div>
);