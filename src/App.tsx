import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Pagination from "./components/Pagination";
import type { Product } from "./types";
import Footer from "./components/Footer";

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const LIMIT = 8;

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  const totalPages = Math.ceil(total / LIMIT);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError("");
        const skip = (currentPage - 1) * LIMIT;
        const response = await fetch(
          `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data: ProductsResponse = await response.json();
        setProducts(data.products);

        setTotal(data.total);
      } 
      catch {
        setError("Something went wrong while fetching products , please try again later");
      }
       finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [currentPage]);

  function handlePageChange(page: number) {
    if (page < 1 || page > totalPages || page === currentPage) {
      return;
    }
    setCurrentPage(page);
  }

  return (
<div className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-purple-50 text-slate-800 antialiased">

    <Header />

      <main id="products" className="min-h-screen">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          
<div className="mb-12 border-b border-slate-100 pb-6">
  <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
    Explore Our Store
  </h1>
  <p className="mt-2 text-slate-500 font-medium text-base">
    Dive into our latest arrivals with exceptional quality and design.
  </p>
</div>

          {loading && (
            <div role="status" className="flex flex-col items-center justify-center gap-4 py-24">
              <div className="h-8 w-8 animate-spin rounded-full border-3 border-purple-100 border-t-purple-600" />
              <p className="text-sm font-semibold text-purple-600 animate-pulse tracking-wide">
                Loading products...
              </p>
            </div>
          )}

          {error && (
            <div role="alert" className="py-16 text-center max-w-md mx-auto">
              <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 font-medium text-sm">
                {error}
              </div>
            </div>
          )}

          {!loading && !error && products.length === 0 && (
            <p className="py-24 text-center text-base font-medium text-slate-400">
              No products found.
            </p>
          )}

          {!loading && !error && products.length > 0 && (
            <>
              <ProductList products={products} />

              <p className="mt-10 text-center text-sm font-medium text-slate-500 tracking-wide">
                Page <span className="text-purple-600 font-bold">{currentPage}</span> of <span className="text-slate-700 font-bold">{totalPages}</span>
              </p>
              
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
