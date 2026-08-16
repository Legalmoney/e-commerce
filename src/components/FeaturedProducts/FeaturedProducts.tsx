import { useGetProductsQuery } from "../../services/productsApi";
import ProductCard from "../ProductCard/ProductCard";
import "./FeaturedProducts.css";

function FeaturedProducts() {
  const { data, isLoading, isError } = useGetProductsQuery();

  if (isLoading) {
    return (
      <section className="featured-products">
        <div className="container">
          <p>Loading products...</p>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="featured-products">
        <div className="container">
          <p>Unable to load products.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="featured-products" id="products">
      <div className="container">
        {/* Featured products */}
        <div className="section-heading">
          <span>Featured Products</span>

          <h2>BESTSELLER PRODUCTS</h2>

          <p>
            Problems trying to resolve the conflict between products and
            customer needs.
          </p>
        </div>

        <div className="products-grid">
          {data?.products.slice(0, 10).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <button type="button" className="load-products">
          LOAD MORE PRODUCTS
        </button>
      </div>
    </section>
  );
}

export default FeaturedProducts;