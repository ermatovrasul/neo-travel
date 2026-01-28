"use client";
import React, { useState } from 'react';
import Link from 'next/link';

interface AccordionLink {
  label: string;
  href: string;
}

interface AccordionItem {
  id: string;
  title: string;
  links: AccordionLink[];
}

export const Accordion = ({ items }: { items: AccordionItem[] }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="w-full space-y-3">
      {items.map((item) => (
        <div key={item.id} className="overflow-hidden">
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full flex justify-between items-center py-5 px-6 bg-[#F8F9FA] rounded-[22px] hover:bg-gray-100 transition-all text-left"
          >
            <span className="font-bold text-[15px] text-gray-900">{item.title}</span>
            <span className={`text-gray-400 transition-transform duration-300 ${openId === item.id ? 'rotate-180' : ''}`}>
              ⌄
            </span>
          </button>
          
          <div 
            className={`transition-all duration-300 ease-in-out ${
              openId === item.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-4 flex flex-col gap-3">
              {item.links.map((link, idx) => (
                <Link 
                  key={idx} 
                  href={link.href}
                  className="text-[14px] text-gray-600 bg-[#F8F9FA]  rounded-[10px] h-[54px] hover:text-red-600 hover:translate-x-1 transition-all duration-200 flex items-center"
                >
                  <span className="mr-2 opacity-0 hover:opacity-100">•</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};