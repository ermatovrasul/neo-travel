import Image from "next/image"
import Link from "next/link"
export const Navbar = () => {
    return (
        <div className="max-w-7xl">
          <nav className="flex flex-row justify-between  mx-auto items-center bg-[#F9FAFB] rounded-2xl px-4 py-4 mt-4">
                <Image src="/icon/logo.svg" alt='icon'  width={52} height={52}/>
                <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
                  <Link href="/">Полезная информация</Link>
                  <Link href="/about">О нас</Link>
                  <Link href="/contacts">Контакты</Link>
                </div>
                <button className="bg-red-500 text-white px-6 py-2 rounded-lg text-xs font-bold">Регистрация</button>
        </nav>
        </div>
    )
}