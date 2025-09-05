export default async function HomePage({
  params,
}: {
  params: { country: string; lang: string };
}) {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-bold">Welcome to Akeenah Group</h1>
      <p className="mt-4 text-lg text-gray-600">
        Serving {params.country.toUpperCase()} in {params.lang.toUpperCase()}
      </p>
    </section>
  );
}
