import type { Product } from "../types";

interface ProductProps {
  product: Product;
}

function ProductCard({ product }: ProductProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-purple-200 bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-purple-200/40 hover:border-purple-400">
      <div className="relative flex h-52 w-full items-center justify-center rounded-lg bg-purple-50/40 p-4 transition-colors duration-300 group-hover:bg-purple-50/70">
        <img src={product.thumbnail} alt={product.title} className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-104" />
        <div className="absolute top-2.5 right-2.5 flex items-center gap-0.5 rounded bg-white border border-purple-100 px-2 py-0.5 text-xs font-bold text-amber-500 shadow-2xs">
          ★ <span className="text-slate-600 font-semibold">{product.rating}</span>
        </div>
      </div>

      <div className="mt-4 flex flex-col flex-1">
        <h2 className="min-h-12 text-base font-bold text-slate-800 leading-snug">
          {product.title}
        </h2>
        <div className="mt-3 pt-3 flex items-center justify-between border-t border-purple-100/60">
        <p className="text-slate-400 text-sm font-medium">$<span className="text-sm font-black text-yellow-600 ml-0.5">{product.price}</span></p>

        </div>
      </div>
    </article>
  );
}

export default ProductCard;
