import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center">
        <h1>Pricing</h1>
        <h5 className="text-muted mt-3">
          Free equity investments and flat{" "}
          <i
            class="fa-solid fa-indian-rupee-sign"
            style={{ fontSize: "13px" }}
          ></i>
          20 intraday and F&O trades
        </h5>
      </div>

      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-4">
          <img src="media/images/pricingEquity.svg" />
          <h1 className="fs-4">Free equity delivery</h1>
          <p className="text-muted" style={{ fontSize: "17px" }}>
            All equity delivery investments (NSE, BSE), are absolutely free —{" "}
            <i
              class="fa-solid fa-indian-rupee-sign"
              style={{ fontSize: "13px" }}
            ></i>
            0 brokerage.
          </p>
        </div>

        <div className="col-4 p-4">
          <img src="media/images/intradayTrades.svg" />
          <h1 className="fs-4">Intraday and F&O trades</h1>
          <p className="text-muted" style={{ fontSize: "17px" }}>
            Flat{" "}
            <i
              class="fa-solid fa-indian-rupee-sign"
              style={{ fontSize: "13px" }}
            ></i>
            20 or 0.03% (whichever is lower) per executed order on intraday
            trades across equity, currency, and commodity trades. Flat
            <i
              class="fa-solid fa-indian-rupee-sign"
              style={{ fontSize: "13px" }}
            ></i>
            20 on all option trades.
          </p>
        </div>

        <div className="col-4 p-4">
          <img src="media/images/pricingEquity.svg" />
          <h1 className="fs-4">Free direct MF</h1>
          <p className="text-muted" style={{ fontSize: "17px" }}>
            All direct mutual fund investments are absolutely free —{" "}
            <i
              class="fa-solid fa-indian-rupee-sign"
              style={{ fontSize: "13px" }}
            ></i>
            0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
