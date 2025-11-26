import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container py-5 mb-5">
      <div className="row text-center justify-content-center">
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p>
          Modern platforms and apps,{" "}
          <i
            className="fa-solid fa-indian-rupee-sign"
            style={{ fontSize: "13px" }}
          ></i>
          0 investments, and flat{" "}
          <i
            className="fa-solid fa-indian-rupee-sign"
            style={{ fontSize: "13px" }}
          ></i>
          20 intraday and F&O trades.
        </p>
        <Link to="/signup" className="p-2 btn btn-primary fs-5 mb-5 cta-button">
          Signup for free
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;
