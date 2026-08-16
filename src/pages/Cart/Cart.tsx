import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import Navbar from "../../components/Navbar/Navbar";
import CartItem from "../../components/CartItem/CartItem";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import "./Cart.css";

function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <>
      <Navbar />

      <main className="cart-page">
        <div className="container">
          {/* Cart breadcrumb */}
          <div className="cart-breadcrumb">
            <span>Home</span>
            <i
              className="fa-solid fa-chevron-right"
              aria-hidden="true"
            ></i>
            <strong>Shopping Cart</strong>
          </div>

          <div className="cart-layout">
            <section className="cart-panel">
              <div className="cart-panel__header">
                <div>
                  <span>Your Basket</span>
                  <h1>Shopping Cart</h1>
                </div>

                <span className="cart-panel__count">
                  {cartItems.length}{" "}
                  {cartItems.length === 1 ? "Product" : "Products"}
                </span>
              </div>

              {cartItems.length > 0 ? (
                <>
                  {/* Cart item columns */}
                  <div className="cart-table-head">
                    <span>Item Details</span>
                    <span>Quantity</span>
                    <span>Price</span>
                  </div>

                  <div className="cart-items">
                    {cartItems.map((item) => (
                      <CartItem
                        key={item.product.id}
                        item={item}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="cart-empty">
                  <i
                    className="fa-solid fa-cart-shopping"
                    aria-hidden="true"
                  />

                  <h2>Your cart is empty</h2>

                  <p>
                    Add a product from the shop and it will appear here.
                  </p>
                </div>
              )}
            </section>

            {cartItems.length > 0 && <OrderSummary />}
          </div>
        </div>
      </main>
    </>
  );
}

export default Cart;