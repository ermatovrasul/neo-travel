"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react"; 
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";

const offers = [
  { city: 'Анталия', price: '12 567 сом', img: '/image/Frame 297.png' },
  { city: 'Москва', price: '7 247 сом', img: '/image/Frame 298.png' },
  { city: 'Таиланд', price: '26 000 сом', img: '/image/Frame 299.png' },
  { city: 'Ош', price: '1 230 сом', img: '/image/Frame 300.png' },
  { city: 'Стамбул', price: '15 400 сом', img: '/image/Frame 297.png' }, 
];

export function SpecialOffersSlider() {
  return (
    <section className="max-w-7xl mx-auto py-1 px-4 relative">
      <h2 className="text-2xl font-bold text-center mb-10 text-[#1A1A1A]">Выгодные предложения</h2>
      
      <div className="bg-[#F7F8FB] p-8 rounded-[40px] relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="mySwiper"
        >
          {offers.map((offer, index) => (
            <SwiperSlide key={index}>
              <div className="group cursor-pointer bg-white rounded-[32px]  shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
                <div className="relative overflow-hidden rounded-[26px] h-[250px] w-full">
                  <Image 
                    src={offer.img} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={offer.city}
                    width={300} 
                    height={400} 
                  />
                </div>
                <div className="flex justify-between items-center p-4">
                  <span className="font-bold text-[#1A1A1A] text-base">{offer.city}</span>
                  <span className="text-[#E11D48] font-extrabold text-sm">От {offer.price}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="prev-button absolute left-0 mx-2 top-1/2 -translate-y-1/2 z-10 bg-[#F7F8FB] p-3 rounded-full shadow-md hover:bg-gray-50 transition-all text-gray-600">
          <ChevronLeft size={16} />
        </button>
        <button className="next-button absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#F7F8FB] p-3 rounded-full shadow-md hover:bg-gray-50 transition-all text-gray-600">
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  );
}