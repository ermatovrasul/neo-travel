import Image from "next/image";

const logos = [
  { name: 'Газпром', src: '/image/image 10.png' },
  { name: 'Манас', src: '/image/image 12.png' },
  { name: 'Aviatrafic', src: '/image/image 16.png' },
  { name: 'MMC', src: '/image/image 17.png' },
  { name: 'Osh', src: '/image/Frame 317.png' },
];

export function LogoMarquee() {
  return (
    <div className="py-20 bg-white overflow-hidden border-t border-b border-gray-50">
      <div className="flex w-[200%] animate-marquee whitespace-nowrap">
        <div className="flex justify-between w-1/2 items-center">
          {logos.map((logo, i) => (
            <Image 
              key={i} 
              src={logo.src} 
              alt={logo.name} 
              width={200} 
              height={100} 
              className="h-10 md:h-14 w-auto object-contain mx-10 transition-all opacity-100" 
            />
          ))}
        </div>
        <div className="flex justify-around w-1/2 items-center">
          {logos.map((logo, i) => (
            <Image 
              key={i + '-copy'} 
              src={logo.src} 
              alt={logo.name} 
              width={200} 
              height={100} 
              className="h-10 md:h-14 w-auto object-contain mx-10 transition-all opacity-100"
            />
          ))}
        </div>

      </div>
    </div>
  );
}