import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import "./Navbar.css";

function Navbar() {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      {/* Top contact and promotional bar */}
      <header className="topbar">
        <div className="container topbar-content">
          <div className="topbar-left">
            <span>
              <i className="fa-solid fa-phone" aria-hidden="true"></i>
              <span>(225) 555-0118</span>
            </span>

            <span>
              <i className="fa-regular fa-envelope" aria-hidden="true"></i>
              <span>michelle.rivera@example.com</span>
            </span>
          </div>

          <p className="topbar-center">
            Follow Us and get a chance to win 80% off
          </p>

          <div className="topbar-right">
            <span>Follow Us :</span>

            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram" aria-hidden="true"></i>
            </a>

            <a href="#" aria-label="YouTube">
              <i className="fa-brands fa-youtube" aria-hidden="true"></i>
            </a>

            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook" aria-hidden="true"></i>
            </a>

            <a href="#" aria-label="Twitter">
              <i className="fa-brands fa-twitter" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </header>

      {/* Main site navigation */}
      <nav className="navbar">
        <div className="container navbar-content">
          <Link to="/" className="logo">
            Bandage
          </Link>

          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/" className="shop-link">
                Shop
                <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
              </Link>
            </li>

            <li>
              <Link to="/">About</Link>
            </li>

            <li>
              <Link to="/">Blog</Link>
            </li>

            <li>
              <Link to="/">Contact</Link>
            </li>

            <li>
              <Link to="/">Pages</Link>
            </li>
          </ul>

          <div className="nav-actions">
            <Link to="/" className="login-link">
              <i className="fa-regular fa-user" aria-hidden="true"></i>
              <span>Login / Register</span>
            </Link>

            <button type="button" className="nav-icon" aria-label="Search">
              <i
                className="fa-solid fa-magnifying-glass"
                aria-hidden="true"
              ></i>
            </button>

            <Link to="/cart" className="cart-link nav-icon" aria-label="Cart">
              <i
                className="fa-solid fa-cart-shopping"
                aria-hidden="true"
              ></i>
              <span className="nav-count">{cartQuantity}</span>
            </Link>

            <button
              type="button"
              className="nav-icon wishlist-link"
              aria-label="Wishlist"
            >
              <i className="fa-regular fa-heart" aria-hidden="true"></i>
              <span className="nav-count">1</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;