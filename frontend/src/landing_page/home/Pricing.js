import React from "react";

function Pricing() {
  const highlights = [
    {
      icon: "media/images/pricing-eq.svg",
      text: "Free account opening",
    },
    {
      icon: "media/images/pricing-eq.svg",
      text: "Free equity delivery & direct mutual funds",
    },
    {
      icon: "media/images/other-trades.svg",
      text: "Intraday & F&O at flat ₹20",
    },
  ];

  return (
    <section className="pricing-section">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-12 col-lg-6 pricing-copy">
            <p className="eyebrow">Pricing that scales with you</p>
            <h2>Unbeatable pricing</h2>
            <p>
              We pioneered the concept of discount broking and price transparency
              in India. Enjoy flat fees, zero hidden charges, and industry-leading
              execution whether you are a casual investor or an active trader.
            </p>
            <a className="pricing-link" href="">
              See pricing <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="col-12 col-lg-6">
            <div className="pricing-grid">
              {highlights.map((item) => (
                <article className="pricing-card" key={item.text}>
                  <img src={item.icon} alt="" className="pricing-icon" />
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
