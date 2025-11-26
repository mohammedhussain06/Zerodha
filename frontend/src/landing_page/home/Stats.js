import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-3 p-lg-5 gy-4 align-items-center">
        <div className="col-12 col-lg-6 p-1 order-2 order-lg-1">
          <h1 className="fs-2 mb-4 mb-lg-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crores customers trust Zerodha with{" "}
            <i
              className="fa-solid fa-indian-rupee-sign"
              style={{ fontSize: "13px" }}
            ></i>3.5+ lakh crores worth of equity investments
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like
          </p>

          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but whole ecosystem. Our investments in 30+ fintech
            startups offer you tailored services specific to your needs
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiative like Nudge and Kill Switch, we don't just facilitate
            transactions, but actively help you do better with your money
          </p>
        </div>
        <div className="col-12 col-lg-6 p-3 p-lg-5 order-1 order-lg-2 text-center">
          <img src="media/images/ecosystem.png" alt="Ecosystem" className="img-fluid" style={{ maxWidth: "90%" }} />
          <div className="text-center mt-3">
            <a className="me-3 me-lg-5" style={{ textDecoration: "none" }} href="">
              Explore our products <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Kite your demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
