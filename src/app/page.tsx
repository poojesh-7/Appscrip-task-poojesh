export const dynamic = "force-dynamic";
export const runtime = "edge"; // ✅ ADD THIS

import { Product } from "@/types/product";
import ProductGridWrapper from "@/components/ProductGridWrapper";
import { getProducts } from "@/lib/api";

export const metadata = {
  title: "Discover Our Products | Mettā Muse",
  description:
    "Browse premium products with filters, sorting, and responsive design.",
};

async function ProductsResult(): Promise<Product[]> {
  const res = await getProducts();
  return res;
}

export default async function Page() {
  const products = await ProductsResult();

  return (
    <main>
      <section className="hero">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </section>
      <ProductGridWrapper products={products} />
    </main>
  );
}