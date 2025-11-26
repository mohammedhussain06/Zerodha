import React from "react";

function Universe() {
  return (
    <div className="container p-3 p-lg-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-6 col-md-4 p-3 mt-4 mt-lg-5">
          <img src="media/images/smallcaseLogo.png" alt="Smallcase" className="img-fluid partner-logo" />
          <p className="text-small text-muted mt-2">
            Thematic investment platform
          </p>
        </div>

        <div className="col-6 col-md-4 p-3 mt-4 mt-lg-5">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            className="img-fluid partner-logo"
          />
          <p className="text-small text-muted mt-2">
            Algo and strategy platform
          </p>
        </div>

        <div className="col-6 col-md-4 p-3 mt-4 mt-lg-5">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            className="img-fluid partner-logo"
          />
          <p className="text-small text-muted mt-1">Options trading platform</p>
        </div>

        <div className="col-6 col-md-4 p-3 mt-4 mt-lg-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fundhouse"
            className="img-fluid partner-logo"
          />
          <p className="text-small text-muted mt-2">Asset management</p>
        </div>

        <div className="col-6 col-md-4 p-3 mt-4 mt-lg-5">
          <img
            src="media/images/goldenpiLogo.png"
            alt="GoldenPi"
            className="img-fluid partner-logo"
          />
          <p className="text-small text-muted mt-2">Bonds trading platform</p>
        </div>

        <div className="col-6 col-md-4 p-3 mt-4 mt-lg-5">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            className="img-fluid partner-logo"
          />
          <p className="text-small text-muted mt-2">Insurance</p>
        </div>
        <div className="col-12 mt-4">
          <button className="p-2 btn btn-primary fs-5 mb-5 cta-button">
            Signup now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
