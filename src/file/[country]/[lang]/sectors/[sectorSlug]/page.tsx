export default function SectorDetailPage({
  params,
}: {
  params: { country: string; lang: string; sectorSlug: string };
}) {
  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold">Sector: {params.sectorSlug}</h1>
      <p className="mt-4 text-gray-700">
        Details for {params.sectorSlug} in {params.country.toUpperCase()} ({params.lang.toUpperCase()}).
      </p>
    </section>
  );
}
