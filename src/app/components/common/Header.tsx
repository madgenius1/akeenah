import Link from "next/link";

export default function Header({ country, lang }: { country: string; lang: string }) {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Akeenah Group</h1>
      <nav className="space-x-4">
        <Link href={`/${country}/${lang}/about`}>About</Link>
        <Link href={`/${country}/${lang}/sectors`}>Sectors</Link>
        <Link href={`/${country}/${lang}/products`}>Products</Link>
        <Link href={`/${country}/${lang}/contact`}>Contact</Link>
      </nav>
    </header>
  );
}
