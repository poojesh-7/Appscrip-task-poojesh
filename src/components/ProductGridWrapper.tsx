"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import Filters from "./Filters";
import ProductGrid from "./ProductGrid";
import TopBar from "./TopBar";

export default function ProductGridWrapper({
  products,
}: {
  products: Product[];
}) {
  const [showFilter, setShowFilter] = useState(true);

  return (
    <>
    
      <TopBar showFilter={showFilter} setShowFilter={setShowFilter} />

      <div className={showFilter ? "layout withFilter" : "layout noFilter"}>
        {showFilter && <Filters />}
        <ProductGrid products={products} />
        </div>
    </>
  );
}