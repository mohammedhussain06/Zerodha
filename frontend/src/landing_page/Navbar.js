import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg zerodha-navbar">
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="logo"
            className="brand-logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="ms-lg-auto w-100 w-lg-auto">
            <ul className="navbar-nav mb-lg-0 align-items-lg-center justify-content-lg-end nav-links-stack">
              <li className="nav-item">
                <Link className="nav-link nav-link-styled" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link nav-link-styled" to="/products">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link nav-link-styled" to="/pricing">
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link nav-link-styled" to="/support">
                  Support
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link nav-link-login" to="/login">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link nav-link-signup" to="/signup">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
