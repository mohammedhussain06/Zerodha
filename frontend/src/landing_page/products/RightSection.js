import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <section className="product-section">
      <div className="container p-3 p-lg-5">
        <div className="row gy-4 align-items-center">
          <div className="col-12 col-lg-6 product-content mt-lg-4 order-2 order-lg-1">
            <h2>{productName}</h2>
            <p>{productDescription}</p>

            <div className="product-links">
              <a href={learnMore} aria-label={`Learn more about ${productName}`}>
                Learn more
              </a>
            </div>
          </div>

          <div className="col-12 col-lg-6 product-media order-1 order-lg-2 text-center">
            <img src={imageURL} alt={productName} className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RightSection;
