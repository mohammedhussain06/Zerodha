import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row gy-4 align-items-center">
        <div className="col-12 col-lg-6">
          <h1 className="mb-4">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div className="col-12 col-lg-6 mb-5">
          <div className="row g-3">
            <div className="col-12 col-sm-4 p-3 d-flex flex-column flex-sm-row align-items-center text-center text-sm-start">
              <img src="media/images/pricing-eq.svg" alt="Pricing" className="img-fluid mb-2 mb-sm-0" style={{ maxWidth: "80px" }} />
              <p className="text-muted mb-0 ms-sm-2 small">
                Free account opening
              </p>
            </div>

            <div className="col-12 col-sm-4 p-3 d-flex flex-column flex-sm-row align-items-center text-center text-sm-start">
              <img src="media/images/pricing-eq.svg" alt="Pricing" className="img-fluid mb-2 mb-sm-0" style={{ maxWidth: "80px" }} />
              <p className="text-muted mb-0 ms-sm-2 small">
                Free equity delivery and direct mutual funds
              </p>
            </div>

            <div className="col-12 col-sm-4 p-3 d-flex flex-column flex-sm-row align-items-center text-center text-sm-start">
              <img src="media/images/other-trades.svg" alt="Trades" className="img-fluid mb-2 mb-sm-0" style={{ maxWidth: "80px" }} />
              <p className="text-muted mb-0 ms-sm-2 small">
                Intraday and F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
