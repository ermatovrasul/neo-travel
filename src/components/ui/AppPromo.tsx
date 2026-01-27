import Image from "next/image";
export function AppPromo() {
  return (
    <div className="max-w-7xl mx-auto my-4 px-4">
      <div className="bg-[#F7F8FB] rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4">
          <div className="flex flex-col  gap-3">
             <Image src="/icon/Frame 312.png" alt="Logo" width={40} height={40} />
             <h3 className="text-2xl font-bold">
               Мобильное приложение <span className="text-red-600">NEO TRAVEL</span>
             </h3>
          </div>
          <p className="text-gray-500 max-w-sm text-lg leading-relaxed">
            Выбирайте места, оплачивайте билеты и получайте их прямо на телефон — быстро, просто и без очередей
          </p>
        </div>
        <div className="bg-white p-5 rounded-[32px] shadow-sm">
          <Image src="/image/Frame 314.png" alt="QR Code" width={200} height={200} className="w-32 h-32" />
        </div>
      </div>
    </div>
  );
}