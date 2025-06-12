"use client"

import { bebasNeue } from "../ui/fonts/font"
import Image from "next/image"
import Link from "next/link"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
// import { IoMdClose } from "react-icons/io";
import LanguageIcon from "../ui/LanguageIcon";



export default function Navbar() {
    return (
        <nav className="bg-white dark:bg-[#121212] shadow-lg sticky top-0 z-50">
            <div className="max-w-screen-xl mx-auto px-4 py-6 flex items-center justify-between">
                <div className="flex justify-start">
                    <Image src="/assets/logo.svg" alt="logo" width={100} height={10} />
                </div>
                <div className="lg:flex hidden space-x-4 justify-between flex-row px-4">
                    <Link href="/products" className={`${bebasNeue.className} font-bold uppercase dark:text-white text-gray-900 text-lg`}>Products</Link>
                    <Link href="/services" className={`${bebasNeue.className} font-bold uppercase dark:text-white text-gray-900 text-lg`}>Services</Link>
                    <Link href="/sectors" className={`${bebasNeue.className} font-bold uppercase dark:text-white text-gray-900 text-lg`}>Sectors</Link>
                    <Link href="/about" className={`${bebasNeue.className} font-bold uppercase dark:text-white text-gray-900 text-lg`}>About Us</Link>
                </div>
                <div className="lg:flex flex-row items-center hidden gap-2 px-4">
                    <LanguageIcon />
                </div>
                <div className="flex lg:hidden md:hidden flex-row gap-3 items-center">
                    <LanguageIcon />
                    <HiOutlineMenuAlt3 size={20} />
                </div>
            </div>
        </nav>
    )
}