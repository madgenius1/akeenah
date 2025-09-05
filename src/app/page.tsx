import Link from "next/link";

export default function RootHomePage() {
  const countries = [
    { code: "ke", name: "Kenya", langs: ["en", "sw"] },
    { code: "ug", name: "Uganda", langs: ["en"] },
    { code: "cd", name: "DRC", langs: ["en", "fr"] },
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Welcome to Akeenah Group
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
        Select your country and preferred language to continue.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {countries.map((country) => (
          <div
            key={country.code}
            className="p-6 border rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-4">{country.name}</h2>
            <div className="flex gap-3 flex-wrap">
              {country.langs.map((lang) => (
                <Link
                  key={lang}
                  href={`/${country.code}/${lang}`}
                  className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition"
                >
                  {lang.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
