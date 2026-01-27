export default function ReportPage() {
  return (
    <div className="max-w-7xl space-y-8 animate-in fade-in duration-500">
      <h2 className="text-2xl font-bold">Как работает добровольное донесение?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#F8F9FA] p-6 rounded-2xl border border-gray-100">
          <h3 className="font-bold mb-2">Если вы заметили что-то странное</h3>
          <p className="text-sm text-gray-500 italic">Воспользуйтесь системой добровольных сообщений для улучшения безопасности.</p>
        </div>
        <div className="bg-[#F8F9FA] p-6 rounded-2xl border border-gray-100">
          <h3 className="font-bold mb-2">Зачем это нужно?</h3>
          <p className="text-sm text-gray-500 italic">Ваша информация поможет исправить ошибки до того, как они приведут к происшествию.</p>
        </div>
      </div>
      <div className="space-y-4 max-w-2xl">
        <textarea placeholder="Опишите проблему или ситуацию" className="w-full p-4 rounded-xl bg-[#F8F9FA] border-none min-h-[120px]" />
        <button className="bg-[#D34231] text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-red-700 transition">
          <span>📎</span> Прикрепить файл
        </button>
      </div>
    </div>
  );
}