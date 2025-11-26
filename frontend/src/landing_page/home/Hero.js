import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container py-5 mb-5">
      <div className="row text-center justify-content-center">
        <img
          src="media/images/landing.svg"
          alt="Hero image"
          className="mb-5 hero-illustration"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds and
          more
        </p>
        <Link to="/signup" className="p-2 btn btn-primary fs-5 mb-5 cta-button">
          Signup now
        </Link>
      </div>
    </div>
  );
}

export default Hero;
