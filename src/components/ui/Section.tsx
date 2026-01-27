import Image from "next/image";
import SearchBar from "@/components/ticket/SearchBar";
import React from "react";
interface SectionProps {
  children?: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return (
    <section className="pt-16 pb-24 px-4  relative overflow-hidden bg-white">
      <div className="text-center relative z-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 tracking-tight">
          Ищите, сравнивайте, экономьте
        </h1>
        <p className="text-[#D34231] text-lg md:text-xl font-bold uppercase tracking-[0.2em]">
          авиабилеты по всему миру
        </p>
      </div>
      <div className="relative w-full max-w-4xl mx-auto h-[200px] md:h-[320px] mt-[-30px] mb-[-70px] z-10 pointer-events-none">
        <Image
          src="/image/image.jpg"
          alt="Airplane"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="max-w-7xl mx-auto relative mt-[100px] z-30">
        <SearchBar />
      </div>
      {children && (
        <div className="max-w-7xl mx-auto mt-16 relative z-20">
          {children}
        </div>
      )}
    </section>
  );
};

export default Section;