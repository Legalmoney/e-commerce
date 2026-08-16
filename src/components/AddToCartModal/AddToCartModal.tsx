import type { Product } from "../../types/product";
import "./AddToCartModal.css";

interface AddToCartModalProps {
  product: Product;
  price: number;
  onClose: () => void;
}

function AddToCartModal({
  product,
  price,
  onClose,
}: AddToCartModalProps) {
  return (
    <div className="add-cart-modal-overlay" onClick={onClose}>
      <div
        className="add-cart-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-cart-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="add-cart-modal__header">
          <h2 id="add-cart-title">Successfully added to basket</h2>

          <button
            type="button"
            className="add-cart-modal__close"
            onClick={onClose}
            aria-label="Close"
          >
            <i className="fa-solid fa-xmark" aria-hidden="true" />
          </button>
        </div>

        <div className="add-cart-modal__content">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="add-cart-modal__image"
          />

          <div className="add-cart-modal__details">
            <h3>{product.title}</h3>
            <span>€ {price.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToCartModal;