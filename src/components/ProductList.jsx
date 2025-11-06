import ProductCard from "./ProductCard";
import { productos } from "../data/productos";

function ProductList() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-stretch">
        {productos.map((p) => (
          <ProductCard key={p.id} producto={p} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
