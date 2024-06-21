import { useEffect, useState } from "react";
import { ProductCard } from "../../../components/Elements/ProductCard";
import { getFeaturedList } from "../../../services/productService";
import { toast } from "react-toastify";

export const FeaturedProducts = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    async function handleFetch() {
      try {
        const data = await getFeaturedList();
        setProducts(data);
      } catch (error) {
        toast.error(error.message, { closeOnClick: true });
      }
    }
    handleFetch();
  }, [products]);
  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        Featured eBooks
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {products &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </section>
  );
};
