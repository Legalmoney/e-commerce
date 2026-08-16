import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import "./OrderSummary.css";

function OrderSummary() {
  const items = useSelector((state: RootState) => state.cart.items);

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <aside className="order-summary">
      <div className="order-summary__header">
        <h2>Order Summary</h2>

        <span>
          {items.reduce((total, item) => total + item.quantity, 0)} Items
        </span>
      </div>

      <div className="order-summary__delivery">
        <span>Delivery Charges</span>
        <small>Add your delivery address to checkout to see delivery charges.</small>
      </div>

      <div className="order-summary__line">
        <span>Subtotal</span>
        <strong>€ {subtotal.toFixed(2)}</strong>
      </div>

      <div className="order-summary__total">
        <span>Total</span>
        <strong>€ {subtotal.toFixed(2)}</strong>
      </div>

      <p className="order-summary__note">Excluding Delivery Charges</p>

      <button type="button" className="order-summary__checkout">
        Proceed to Checkout
      </button>

      <div className="order-summary__payment">
        <span>paystack</span>
        <span>Mastercard</span>
        <span>VISA</span>
      </div>
    </aside>
  );
}

export default OrderSummary;