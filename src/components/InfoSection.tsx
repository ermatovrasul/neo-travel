import Image from "next/image";
import Link from "next/link"; 

const infoCards = [
  { 
    title: 'Нормы багажа', 
    desc: 'Ознакомьтесь с правилами веса и габаритов вещей регистрации в аэропорту.', 
    icon: '/image/image 5.png',
    href: '/baggage' 
  },
  { 
    title: 'Запрещенные и опасные грузы', 
    desc: 'Изучите список запрещенных к перевозке предметов.', 
    icon: '/image/image 9.png',
    href: '/prohibited'
  },
  { 
    title: 'Добровольное донесение', 
    desc: 'Сообщите о происшествиях для повышения безопасности.', 
    icon: '/image/image 8.png',
    href: '/report'
  },
];

export function InfoSection() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-2xl font-bold text-center mb-10">Полезная информация</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {infoCards.map((card, i) => (
          <Link 
            key={i} 
            href={card.href} 
            className="group block" 
          >
            <div className="bg-[#F8F9FA] p-8 rounded-[32px] relative overflow-hidden h-64 flex flex-col justify-between border border-transparent hover:border-red-100 hover:shadow-lg transition-all duration-300">
              <div className="z-10 relative">
                <h3 className="font-bold text-lg mb-3 leading-tight text-gray-900 group-hover:text-red-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 max-w-[180px] leading-relaxed">
                  {card.desc}
                </p>
              </div>
              <div className="absolute right-0 bottom-0 pointer-events-none translate-y-2 translate-x-2">
                <Image 
                  src={card.icon} 
                  className="object-contain opacity-90 group-hover:scale-105 transition-transform duration-500" 
                  alt={card.title}
                  width={200}
                  height={180}
                />
              </div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md z-20 group-hover:bg-red-500 transition-colors">
                <Image 
                  src="/icon/Frame 345.svg" 
                  alt="Arrow" 
                  width={20} 
                  height={20} 
                  className="group-hover:invert transition-all"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}