export default function ProductDetailPage({
  params,
}: {
  params: { country: string; lang: string; productSlug: string };
}) {
  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold">Product: {params.productSlug}</h1>
      <p className="mt-4 text-gray-700">
        Details for {params.productSlug} in {params.country.toUpperCase()} ({params.lang.toUpperCase()}).
      </p>
    </section>
  );
}
