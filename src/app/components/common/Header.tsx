"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface HeaderProps {
    country: string;
    lang: string;
}

export default function Header({ country, lang }: HeaderProps) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", path: "" },
        { name: "About", path: "about" },
        { name: "Sectors", path: "sectors" },
        { name: "Products", path: "products" },
        { name: "Quotation", path: "quotation" },
        { name: "Contact", path: "contact" },
    ];

    // Example countries and langs (can come from config)
    const countries = [
        { code: "ke", name: "Kenya" },
        { code: "ug", name: "Uganda" },
        { code: "cd", name: "DRC" },
    ];

    const langs = ["en", "fr", "sw"];

    return (
        <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
            <Link href={`/${country}/${lang}`} className="text-xl font-bold">
                Akeenah Group
            </Link>

            <nav className="flex gap-4 items-center">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={`/${country}/${lang}/${item.path}`}
                        className={`hover:underline ${pathname.endsWith(item.path) ? "font-semibold" : ""
                            }`}
                    >
                        {item.name}
                    </Link>
                ))}

                {/* Country Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="px-3 py-2 bg-gray-800 rounded"
                    >
                        {country.toUpperCase()} ▾
                    </button>
                    {isOpen && (
                        <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg">
                            {countries.map((c) => (
                                <Link
                                    key={c.code}
                                    href={`/${c.code}/${lang}`}
                                    className="block px-4 py-2 hover:bg-gray-100"
                                >
                                    {c.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>

                {/* Language Switcher */}
                <div className="flex gap-2">
                    {langs.map((l) => (
                        <Link
                            key={l}
                            href={`/${country}/${l}`}
                            className={`px-3 py-1 rounded ${l === lang ? "bg-white text-black" : "bg-gray-700"
                                }`}
                        >
                            {l.toUpperCase()}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}
