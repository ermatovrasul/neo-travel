import Image from "next/image";
export default function ContactsPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 animate-in fade-in duration-500">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Контакты</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 bg-[#F8F9FA] p-4 rounded-2xl">
            <span className="text-red-600">📞</span>
            <p className="font-medium">+996 (000) 00 00 00</p>
          </div>
          <div className="flex items-center gap-4 bg-[#F8F9FA] p-4 rounded-2xl">
            <span className="text-red-600">📧</span>
            <p className="font-medium">neolabs@neo.pw</p>
          </div>
          <div className="flex items-center gap-4 bg-[#F8F9FA] p-4 rounded-2xl border-2 border-red-50">
            <span className="text-red-600">📍</span>
            <p className="font-medium">Бишкек, ул. Токтогул</p>
          </div>
        </div>
      </div>
      <div className=" bg-gray-100 rounded-[32px] overflow-hidden border border-gray-100 shadow-">
         <Image src="/image/Frame 1261155490.png" alt="map" width={845} height={300}  />
      </div>
    </div>
  );
}