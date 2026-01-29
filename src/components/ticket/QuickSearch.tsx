"use client";
import { useState } from 'react';
import TicketCard from './TicketCard';
import { TICKETS_DATA } from '@/types/ticket';
import { TicketModal } from './TicketModal';

interface Props {
  activeTab: 'one-way' | 'round-trip';
  setActiveTab: (tab: 'one-way' | 'round-trip') => void;
  selectedTariffKey?: string;
}

export const QuickSearch = ({ activeTab, setActiveTab, selectedTariffKey }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<any>(null);

  const handleTicketClick = (ticket: any) => {
    setSelectedTicket(ticket);
    setIsModalOpen(true);
  };

  const currentTariffKey = selectedTariffKey || "no_refund_with_baggage";

  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Быстрый поиск</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TICKETS_DATA.map((ticket) => (
          <div key={ticket.id} className="relative pt-6">
            <div className={`absolute top-2 left-4 px-3 py-1 rounded-t-xl text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 border-x border-t border-gray-100 ${ticket.labelColor || 'bg-white text-gray-400'}`}>
              {ticket.label}
            </div>
            
            <TicketCard 
              from="Бишкек"
              to="Москва"
              company={ticket.company || "S7 Airlines"}
              logo={ticket.logo}
              price={ticket.price}
              date={ticket.date}
              time={ticket.time}
              duration={ticket.duration}
              type={ticket.type}
              isRoundTrip={activeTab === 'round-trip'}
              returnDate="28 фев, пн"
              returnTime="12:20"
              onClick={() => handleTicketClick(ticket)}
            />
          </div>
        ))}
      </div>
      <TicketModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        ticket={selectedTicket} 
        selectedTariffKey={currentTariffKey as any} 
      />
    </section>
  );
};