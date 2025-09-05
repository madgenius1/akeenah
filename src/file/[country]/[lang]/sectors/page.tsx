import Link from "next/link";

const sectors = [
  { slug: "mining", name: "Mining" },
  { slug: "railways", name: "Railways" },
  { slug: "aviation", name: "Aviation" },
];

export default function SectorsPage({ params }: { params: { country: string; lang: string } }) {
  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold mb-6">Sectors</h1>
      <ul className="space-y-4">
        {sectors.map((sector) => (
          <li key={sector.slug}>
            <Link href={`/${params.country}/${params.lang}/sectors/${sector.slug}`} className="text-blue-600 underline">
              {sector.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
