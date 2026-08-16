import { useDispatch } from "react-redux";
import type { CartItem as CartItemType } from "../../features/cart/cartSlice";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../features/cart/cartSlice";
import "./CartItem.css";

interface CartItemProps {
  item: CartItemType;
}

function CartItem({ item }: CartItemProps) {
  const dispatch = useDispatch();

  const itemTotal = item.price * item.quantity;

  return (
    <article className="cart-item">
      {/* Product information */}
      <div className="cart-item__product">
        <img
          src={item.product.thumbnail}
          alt={item.product.title}
          className="cart-item__image"
        />

        <div className="cart-item__details">
          <span className="cart-item__category">
            {item.product.brand || item.product.category}
          </span>

          <h3>{item.product.title}</h3>

          <span className="cart-item__stock">In Stock</span>

          <div className="cart-item__rating">
            <span>
              {Array.from({ length: 5 }).map((_, index) => (
                <i
                  key={index}
                  className={
                    index < Math.round(item.product.rating)
                      ? "fa-solid fa-star"
                      : "fa-regular fa-star"
                  }
                  aria-hidden="true"
                />
              ))}
            </span>

            <small>{item.product.rating.toFixed(1)}</small>
          </div>
        </div>
      </div>

      {/* Quantity controls */}
      <div className="cart-item__quantity">
        <button
          type="button"
          onClick={() => dispatch(decreaseQuantity(item.product.id))}
          aria-label="Decrease quantity"
        >
          <i className="fa-solid fa-minus" aria-hidden="true" />
        </button>

        <span>{item.quantity}</span>

        <button
          type="button"
          onClick={() => dispatch(increaseQuantity(item.product.id))}
          aria-label="Increase quantity"
        >
          <i className="fa-solid fa-plus" aria-hidden="true" />
        </button>
      </div>

      {/* Item total */}
      <div className="cart-item__price">
        <strong>€ {itemTotal.toFixed(2)}</strong>

        <span>
          € {item.price.toFixed(2)} × {item.quantity}
        </span>
      </div>

      {/* Remove item */}
      <button
        type="button"
        className="cart-item__remove"
        onClick={() => dispatch(removeFromCart(item.product.id))}
      >
        <i className="fa-regular fa-trash-can" aria-hidden="true" />
        Remove
      </button>
    </article>
  );
}

export default CartItem;