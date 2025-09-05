import Link from "next/link";

const products = [
  { slug: "excavator", name: "Excavator" },
  { slug: "rail-track", name: "Rail Track" },
  { slug: "jet-engine", name: "Jet Engine" },
];

export default function ProductsPage({ params }: { params: { country: string; lang: string } }) {
  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.slug}>
            <Link href={`/${params.country}/${params.lang}/products/${product.slug}`} className="text-blue-600 underline">
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
