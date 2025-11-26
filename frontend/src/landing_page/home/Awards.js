import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center gy-4">
        <div className="col-12 col-lg-6 p-4 p-lg-5 text-center text-lg-start">
          <img src="media/images/largestBroker.svg" alt="Largest broker" className="img-fluid" />
        </div>
        <div className="col-12 col-lg-6 p-4 p-lg-5 mt-lg-2">
          <h1>Largest stock broker in India</h1>
          <p className="mb-4 mb-lg-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
                <ul>
                <li>
                  <p>Stocks and IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Growth</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" alt="Press logos" className="img-fluid" style={{maxWidth: "90%"}} />
        </div>
      </div>
    </div>
  );
}

export default Awards;
