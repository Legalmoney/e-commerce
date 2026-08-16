import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import "./Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Contact and promotion bar */}
      <header className="topbar">
        <div className="container topbar-content">
          <div className="topbar-left">
            <span>
              <i className="fa-solid fa-phone" aria-hidden="true" />
              <span>(225) 555-0118</span>
            </span>

            <span>
              <i className="fa-regular fa-envelope" aria-hidden="true" />
              <span>michelle.rivera@example.com</span>
            </span>
          </div>

          <p className="topbar-center">
            Follow Us and get a chance to win 80% off
          </p>

          <div className="topbar-right">
            <span>Follow Us :</span>

            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram" aria-hidden="true" />
            </a>

            <a href="#" aria-label="YouTube">
              <i className="fa-brands fa-youtube" aria-hidden="true" />
            </a>

            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook" aria-hidden="true" />
            </a>

            <a href="#" aria-label="Twitter">
              <i className="fa-brands fa-twitter" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <nav className="navbar">
        <div className="container navbar-content">

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <i
              className={
                isMobileMenuOpen
                  ? "fa-solid fa-xmark"
                  : "fa-solid fa-bars"
              }
              aria-hidden="true"
            />
          </button>

          <Link to="/" className="logo" onClick={closeMobileMenu}>
            Bandage
          </Link>

          {/* Desktop navigation */}
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/" className="shop-link">
                Shop
                <i
                  className="fa-solid fa-chevron-down"
                  aria-hidden="true"
                />
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

          {/* Desktop actions */}
          <div className="nav-actions">
            <Link to="/" className="login-link">
              <i className="fa-regular fa-user" aria-hidden="true" />
              <span>Login / Register</span>
            </Link>

            <button type="button" className="nav-icon" aria-label="Search">
              <i
                className="fa-solid fa-magnifying-glass"
                aria-hidden="true"
              />
            </button>

            <Link
              to="/cart"
              className="nav-icon cart-link"
              aria-label="Cart"
            >
              <i
                className="fa-solid fa-cart-shopping"
                aria-hidden="true"
              />
              <span className="nav-count">{cartQuantity}</span>
            </Link>

            <button
              type="button"
              className="nav-icon wishlist-link"
              aria-label="Wishlist"
            >
              <i className="fa-regular fa-heart" aria-hidden="true" />
              <span className="nav-count">1</span>
            </button>
          </div>

          {/* Mobile actions */}
          <div className="mobile-actions">
            <button
              type="button"
              className="mobile-nav-icon"
              aria-label="Search"
            >
              <i
                className="fa-solid fa-magnifying-glass"
                aria-hidden="true"
              />
            </button>

            <Link
              to="/cart"
              className="mobile-nav-icon"
              aria-label="Cart"
            >
              <i
                className="fa-solid fa-cart-shopping"
                aria-hidden="true"
              />
              <span>{cartQuantity}</span>
            </Link>

            <button
              type="button"
              className="mobile-nav-icon"
              aria-label="Wishlist"
            >
              <i className="fa-regular fa-heart" aria-hidden="true" />
              <span>1</span>
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div
          className={`mobile-menu ${
            isMobileMenuOpen ? "mobile-menu--open" : ""
          }`}
        >
          <ul>
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Shop
              </Link>
            </li>

            <li>
              <Link to="/" onClick={closeMobileMenu}>
                About
              </Link>
            </li>

            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>

            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>

            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Pages
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;