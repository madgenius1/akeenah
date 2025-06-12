"use client"

import { FaGlobeAfrica } from "react-icons/fa";


export default function LanguageIcon() {
    return (
        <main>
            <div className="flex flex-row items-center gap-2">
                <FaGlobeAfrica size={20} />
                <span className="uppercase dark:text-white text-gray-900 font-bold">KE</span>
            </div>
        </main>
    )
}