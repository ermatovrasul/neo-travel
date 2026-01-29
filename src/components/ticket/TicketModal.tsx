"use client";

import Image from "next/image";
import Link from "next/link";
import { TARIFF_DETAILS } from "@/types/TarifDetails";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  ticket: any;
  selectedTariffKey: keyof typeof TARIFF_DETAILS;
}

export const TicketModal = ({ isOpen, onClose, ticket, selectedTariffKey }: ModalProps) => {
  if (!isOpen || !ticket) return null;

  const currentTariff = TARIFF_DETAILS[selectedTariffKey];
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
          <p className="text-[13px] text-gray-400 font-medium">Рейс {flightNo || "RG-666"}</p>
          <p className="text-[13px] text-gray-400 font-medium">{ticket.duration || "4ч 20м"} в пути</p>
        </div>
      </div>
      
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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/40 backdrop-blur-[4px] animate-in fade-in duration-300">
      <div className="bg-[#F9FAFB] rounded-[32px] w-full max-w-[850px] max-h-[90vh] overflow-y-auto shadow-2xl relative scrollbar-hide">
        <button onClick={onClose} className="absolute top-6 right-6 z-10 p-2 text-gray-300 hover:text-gray-600 transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
        </button>

        <div className="p-10">
          <h2 className="text-[32px] font-bold text-gray-900 mb-10 tracking-tight">Детали перелета</h2>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 space-y-4">
              <FlightSegment 
                cityFrom={ticket.from || "Бишкек"} 
                cityTo={ticket.to || "Москва"} 
                airportFrom="BSZ, Манас" 
                airportTo="MOW, Домодедово"
                date={ticket.date || "14 февраля"} 
                timeStart={ticket.time || "12:20"} 
                timeEnd={ticket.timeEnd || "21:00"} 
                flightNo={ticket.flightNo}
              />
              {ticket.type === 'round-trip' || ticket.isRoundTrip ? (
                <>
                  <div className="flex items-center justify-center py-2">
                    <div className="flex-1 border-t border-dashed border-gray-300"></div>
                    <span className="px-4 text-[13px] text-gray-400 font-bold tracking-wide uppercase">Время в пункте назначения</span>
                    <div className="flex-1 border-t border-dashed border-gray-300"></div>
                  </div>
                  <FlightSegment 
                    cityFrom={ticket.to || "Москва"} 
                    cityTo={ticket.from || "Бишкек"} 
                    airportFrom="MOW, Домодедово" 
                    airportTo="BSZ, Манас"
                    date={ticket.returnDate || "2 марта"} 
                    timeStart={ticket.returnTime || "21:00"} 
                    timeEnd={ticket.returnTimeEnd || "12:20"} 
                    flightNo={ticket.returnFlightNo || "SS-000"}
                  />
                </>
              ) : null}
            </div>
            <div className="w-full lg:w-[320px] space-y-6">
              <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-50">
                <h4 className="font-bold text-[17px] text-gray-900 mb-6 flex items-center gap-2">
                  <span className="border-b-2 border-[#E11D48] pb-1">{currentTariff.title}</span>
                </h4>
                <ul className="space-y-4">
                  {currentTariff.features.map((item: any, idx: number) => (
                    <li key={idx} className="flex items-center gap-3 text-[14px] font-bold text-gray-700">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${item.status ? 'border-green-500 text-green-500' : 'border-gray-300 text-gray-300'}`}>
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
                <div className="mt-6 pt-4 border-t border-gray-50">
                   <p className="text-[20px] font-black text-gray-900">{currentTariff.price}</p>
                </div>
              </div>

              <Link href="/checkout" className="block">
                <button className="w-full bg-[#E11D48] hover:bg-[#BE123C] text-white py-5 rounded-[20px] font-bold text-[18px] shadow-xl shadow-red-100 transition-all active:scale-[0.97] flex items-center justify-center gap-3 group">
                  Начать оплату
                  <svg className="group-hover:translate-x-1 transition-transform" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14m-7-7l7 7-7 7" /></svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};