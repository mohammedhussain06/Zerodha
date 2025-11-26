import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <section className="product-section">
      <div className="container p-3 p-lg-5">
        <div className="row gy-4 align-items-center">
          <div className="col-12 col-lg-6 product-media text-center text-lg-start">
            <img src={imageURL} alt={productName} className="img-fluid" />
          </div>

          <div className="col-12 col-lg-6 product-content">
            <h2>{productName}</h2>
            <p>{productDescription}</p>

            <div className="product-links">
              <a href={tryDemo} aria-label={`Try ${productName} demo`}>
                Try demo
              </a>
              <a
                href={learnMore}
                className="ms-lg-4"
                aria-label={`Learn more about ${productName}`}
              >
                Learn more
              </a>
            </div>

            <div className="store-badges">
              <a href={googlePlay} aria-label={`${productName} on Google Play`}>
                <img
                  src="media/images/googlePlayBadge.svg"
                  alt="Download on Google Play"
                  className="store-badge"
                />
              </a>

              <a
                href={appStore}
                className="ms-lg-3"
                aria-label={`${productName} on the App Store`}
              >
                <img
                  src="media/images/appstoreBadge.svg"
                  alt="Download on the App Store"
                  className="store-badge"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftSection;

