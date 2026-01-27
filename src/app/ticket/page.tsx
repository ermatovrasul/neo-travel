"use client";

import { useState } from 'react';
import { TicketFilters } from "@/components/ticket/TicketFilters";
import { QuickSearch } from "@/components/ticket/QuickSearch";
import Section from '@/components/ui/Section';

export default function TicketPage() {
  const [direction, setDirection] = useState<'one-way' | 'round-trip'>('one-way');

  return (
    <main className="min-h-screen bg-[#F9FAFB] pb-20">
      <div className="bg-white py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <Section />
        </div>
      </div>
      <TicketFilters 
        direction={direction} 
        setDirection={setDirection} 
      />
      <QuickSearch 
        activeTab={direction} 
        setActiveTab={setDirection} 
      />
    </main>
  );
}