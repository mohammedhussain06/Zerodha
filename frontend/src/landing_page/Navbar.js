import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Pricing", path: "/pricing" },
  { label: "Support", path: "/support" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992 && isMenuOpen) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <nav className="navbar navbar-expand-lg zerodha-navbar">
      <div className="container p-2">
        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          <img
            src="media/images/logo.svg"
            alt="logo"
            className="brand-logo"
          />
        </Link>
        <button
          className={`navbar-toggle-btn ${isMenuOpen ? "is-active" : ""}`}
          type="button"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
        <div
          className={`navbar-collapse-custom ${isMenuOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-0 nav-links-stack">
            {navLinks.map((item) => (
              <li className="nav-item" key={item.path}>
                <Link
                  className="nav-link nav-link-styled"
                  to={item.path}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <Link
                className="nav-link nav-link-login"
                to="/login"
                onClick={closeMenu}
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link nav-link-signup"
                to="/signup"
                onClick={closeMenu}
              >
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {isMenuOpen && <div className="nav-overlay" onClick={closeMenu} />}
    </nav>
  );
}

export default Navbar;
