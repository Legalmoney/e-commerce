import { useState } from "react";
import { useDispatch } from "react-redux";
import type { Product } from "../../types/product";
import { addToCart } from "../../features/cart/cartSlice";
import AddToCartModal from "../AddToCartModal/AddToCartModal";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const isOutOfStock = product.stock <= 0;
  const hasDiscount = product.discountPercentage > 0;

  const discountedPrice =
    product.price * (1 - product.discountPercentage / 100);

  const handleAddToCart = () => {
    if (isOutOfStock) return;

    dispatch(
      addToCart({
        product,
        price: discountedPrice,
      })
    );

    setShowModal(true);
  };

  return (
    <>
      <article
        className={`product-card ${
          isOutOfStock ? "product-card--out-of-stock" : ""
        }`}
      >
        <div className="product-card__image-wrapper">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="product-card__image"
          />

          {hasDiscount && !isOutOfStock && (
            <span className="product-card__discount">
              -{Math.round(product.discountPercentage)}%
            </span>
          )}

          {isOutOfStock && (
            <div className="product-card__stock-badge">
              <span>Out of stock</span>
            </div>
          )}

          {/* Product actions are intentionally hidden in the resting state. */}
          <div className="product-card__actions">
            <button
              type="button"
              aria-label="Compare product"
              disabled={isOutOfStock}
            >
              <i className="fa-solid fa-code-compare" aria-hidden="true" />
            </button>

            <button
              type="button"
              aria-label="Add product to wishlist"
              disabled={isOutOfStock}
            >
              <i className="fa-regular fa-heart" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="product-card__content">
          <span className="product-card__category">
            {product.brand || product.category}
          </span>

          <h3>{product.title}</h3>

          <div className="product-card__price">
            {hasDiscount && (
              <span className="product-card__old-price">
                € {product.price.toFixed(2)}
              </span>
            )}

            <span className="product-card__current-price">
              € {discountedPrice.toFixed(2)}
            </span>
          </div>

          <div className="product-card__rating">
            <div className="product-card__stars" aria-label={`${product.rating} out of 5`}>
              {Array.from({ length: 5 }).map((_, index) => (
                <i
                  key={index}
                  className={
                    index < Math.round(product.rating)
                      ? "fa-solid fa-star"
                      : "fa-regular fa-star"
                  }
                  aria-hidden="true"
                />
              ))}
            </div>

            <span className="product-card__rating-value">
              {product.rating.toFixed(1)} (54)
            </span>
          </div>
        </div>

        {/* The basket action forms the bottom section of the hover state. */}
        <button
          type="button"
          className="product-card__basket"
          onClick={handleAddToCart}
          disabled={isOutOfStock}
        >
          ADD TO BASKET
        </button>
      </article>

      {showModal && (
        <AddToCartModal
          product={product}
          price={discountedPrice}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default ProductCard;