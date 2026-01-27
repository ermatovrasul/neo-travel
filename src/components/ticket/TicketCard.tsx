import Image from "next/image";

interface Props {
  from: string;
  to: string;
  price: string;
  date: string;
  logo: string;
  time: string;
  duration: string;
  type: string;
  company: string;
  isRoundTrip?: boolean;
  returnDate?: string;
  returnTime?: string;
  onClick: () => void; 
}

export default function TicketCard({ 
  from, to, price, date, logo, time, duration, type, company, isRoundTrip, returnDate, returnTime,
  onClick 
}: Props) {
  
  const FlightInfo = (f: string, t: string, d: string, tm: string, label: string) => (
    <div className="flex justify-between items-center py-2">
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 border border-gray-100 rounded-full flex items-center justify-center bg-white shadow-sm">
           <Image src="/icon/logo.svg" alt={company} width={24} height={24} className="rounded-full" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">{label}</span>
            <span className="text-[10px] px-1.5 py-0.5 bg-blue-50 text-blue-500 rounded font-bold">{type}</span>
          </div>
          <p className="text-sm font-bold text-gray-800">{f} — {t}</p>
          <p className="text-[10px] text-gray-400">{d} • {tm}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-[10px] text-gray-400">{duration}</p>
        <div className="w-16 h-[1px] bg-gray-200 my-1 relative">
           <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full border border-gray-100 bg-white"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div 
      onClick={onClick} 
      className="bg-white border border-gray-100 rounded-[24px] p-5 shadow-sm hover:shadow-md transition-all relative mb-4 cursor-pointer"
    >
      {!isRoundTrip ? (
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image src="/icon/logo.svg" alt={company} width={48} height={48} className="rounded-full border border-gray-50" />
            <div>
              <p className="font-bold text-gray-800">{from} — {to}</p>
              <p className="text-xs text-gray-400">{date} • {time}</p>
              <p className="text-xs text-gray-400">{duration}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] font-bold text-blue-500 px-2 py-1 bg-blue-50 rounded-lg mb-1 inline-block">{type}</div>
            <div className="text-xl font-black text-gray-900 leading-none">{price} <span className="text-sm font-normal text-gray-400">сом</span></div>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          {FlightInfo(from, to, date, time, "Туда")}
          <div className="border-t border-dashed border-gray-100 my-2"></div>
          {FlightInfo(to, from, returnDate || date, returnTime || "21:00", "Обратно")}
          
          <div className="pt-4 mt-2">
            <div className="text-xl font-black text-gray-900 leading-none">
              {price} <span className="text-sm font-normal text-gray-400">сом</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}