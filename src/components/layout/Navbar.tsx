import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
    return (
        <div className="max-w-7xl ml-20 px-4"> 
          <nav className="flex flex-row justify-between items-center bg-[#F9FAFB] rounded-2xl px-6 py-4 mt-4 shadow-sm">
                <Image src="/icon/logo.svg" alt='icon' width={52} height={52}/>
                
                <div className="hidden md:flex space-x-8 text-sm font-bold text-gray-600">
                  <Link href="/" className="hover:text-black transition-colors">Полезная информация</Link>
                  <Link href="/about" className="hover:text-black transition-colors">О нас</Link>
                  <Link href="/contacts" className="hover:text-black transition-colors">Контакты</Link>
                </div>
                
                <button className="bg-[#E11D48] text-white px-6 py-2.5 rounded-xl text-xs font-black hover:bg-[#BE123C] transition-all">
                    Регистрация
                </button>
          </nav>
        </div>
    )
}