import Image from "next/image";
export function Footer() {
  return (
    <footer className=" py-12 px-4 w-full mx-auto bg-[#F9FAFB]">
      <div className="grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-red-600 font-bold text-xl italic mb-4">NEO TRAVEL</h2>
          <div className="flex gap-3">
             <Image src="/icon/Facebook.svg" alt="Logo" width={40} height={40} />
             <Image src="/icon/Instagram.svg" alt="Logo" width={40} height={40} />
             <Image src="/icon/Telegram.svg" alt="Logo" width={40} height={40} />
             <Image src="/icon/Whatsapp.svg" alt="Logo" width={40} height={40} />
          </div>
        </div>

        <div>
          <h4 className="font-bold text-red-500 mb-4">О компании</h4>
          <ul className="text-sm space-y-2 text-gray-600">
            <li>Политика конфиденциальности, обработка данных, использование cookie</li>
            <li>Бронирование и управление</li>
            <li>Информация</li>
            <li>О компании</li>
            <li>Контакты</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-red-500 mb-4">Контакты</h4>
          <p className="text-sm text-gray-600">+996 (000) 00 00 00</p>
          <p className="text-sm text-gray-600">neolabs@neo.pw</p>
          <p className="text-sm text-gray-600 mt-2">Бишкек, ул. Токтогул</p>
          <p className="text-sm text-gray-600">График работы с 9:00 до 18:00</p>
        </div>

        <div className="text-center">
          <h4 className="font-bold text-red-500 mb-4">Мобильное приложение</h4>
          <Image src="/image/Frame 314.png" alt="QR Code" width={200} height={200} className="w-32 h-32 mx-auto" />
        </div>
      </div>
    </footer>
  );
}