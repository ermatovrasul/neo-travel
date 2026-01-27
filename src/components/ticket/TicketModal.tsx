import Image from "next/image";
import Link from "next/link";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  ticket: any;
}

export const TicketModal = ({ isOpen, onClose, ticket }: ModalProps) => {
  if (!isOpen) return null;

  // Рейс блогун өзүнчө функция катары чыгарып алдык (Туда жана Обратно үчүн)
  const FlightSegment = ({ cityFrom, cityTo, airportFrom, airportTo, date, timeStart, timeEnd, flightNo }: any) => (
    <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-50">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{cityFrom}-{cityTo}</h3>
          <p className="text-sm text-gray-400 font-medium">{date}, среда • {timeStart}-{timeEnd}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <Image src={ticket?.logo || "/icon/logo.svg"} alt="Airline" width={40} height={40} className="rounded-full shadow-sm" />
        <div>
          <p className="text-[15px] font-bold text-gray-800">{ticket?.company || "S7 Airlines"}</p>
          <p className="text-[13px] text-gray-400 font-medium">Эконом</p>
        </div>
        <div className="ml-auto text-right">
          <p className="text-[13px] text-gray-400 font-medium">Рейс {flightNo}</p>
          <p className="text-[13px] text-gray-400 font-medium">9 часов в пути</p>
        </div>
      </div>

      {/* Маршрут линиясы */}
      <div className="relative pl-8 space-y-10">
        <div className="absolute left-[7px] top-2 bottom-2 w-[1.5px] bg-[#E11D48]"></div>
        
        <div className="relative">
          <div className="absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#E11D48]"></div>
          <div className="flex gap-4">
            <span className="font-bold text-[15px] w-12">{timeStart}</span>
            <div>
              <p className="font-bold text-[15px]">{cityFrom}</p>
              <p className="text-[12px] text-gray-400 font-medium">{airportFrom}</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#E11D48]"></div>
          <div className="flex gap-4">
            <span className="font-bold text-[15px] w-12">{timeEnd}</span>
            <div>
              <p className="font-bold text-[15px]">{cityTo}</p>
              <p className="text-[12px] text-gray-400 font-medium">{airportTo}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[4px] animate-in fade-in duration-300">
      <div className="bg-[#F9FAFB] rounded-[32px] w-full max-w-[850px] max-h-[90vh] overflow-y-auto shadow-2xl relative">
        <button onClick={onClose} className="absolute top-6 right-6 z-10 p-2 text-gray-300 hover:text-gray-600 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
        </button>
        <div className="p-10">
          <h2 className="text-[32px] font-bold text-gray-900 mb-10">Детали перелета</h2>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 space-y-4">
              <FlightSegment 
                cityFrom="Бишкек" cityTo="Москва" airportFrom="BSZ, Манас" airportTo="MOW, Домодедово"
                date="14 февраля" timeStart="12:20" timeEnd="21:00" flightNo="RG-666"
              />
              <div className="flex items-center justify-center py-2">
                <div className="flex-1 border-t border-dashed border-gray-300"></div>
                <span className="px-4 text-[13px] text-gray-400 font-bold tracking-wide uppercase">16 дней в Москве</span>
                <div className="flex-1 border-t border-dashed border-gray-300"></div>
              </div>
              <FlightSegment 
                cityFrom="Москва" cityTo="Бишкек" airportFrom="MOW, Домодедово" airportTo="BSZ, Манас"
                date="2 марта" timeStart="21:00" timeEnd="12:20" flightNo="SS-000"
              />
            </div>
            <div className="w-full lg:w-[320px] space-y-6">
              <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-50">
                <h4 className="font-bold text-[17px] text-gray-900 mb-6 flex items-center gap-2">
                  <span className="border-b-2 border-[#E11D48] pb-1">С багажом без возврата</span>
                </h4>
                <ul className="space-y-4">
                  {[
                    { label: "Багаж: 1 х 20 кг", status: true },
                    { label: "Ручная кладь: 1 х 8 кг", status: true },
                    { label: "Обмен: платный", status: true },
                    { label: "Возврат: нет", status: false },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[14px] font-bold text-gray-700">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${item.status ? 'border-green-500 text-green-500' : 'border-gray-300 text-gray-300'}`}>
                        {item.status ? (
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M20 6L9 17l-5-5" /></svg>
                        ) : (
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M18 6L6 18M6 6l12 12" /></svg>
                        )}
                      </div>
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/checkout">
              <button className="w-full bg-[#E11D48] hover:bg-[#BE123C] text-white py-5 rounded-[20px] font-bold text-[18px] shadow-xl shadow-red-100 transition-all active:scale-[0.97] flex items-center justify-center gap-3 group">
                Начать оплату
                <svg className="group-hover:translate-x-1 transition-transform" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14m-7-7l7 7-7 7" /></svg>
              </button></Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};