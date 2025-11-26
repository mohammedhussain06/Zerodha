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
    <div className="container p-3 p-lg-5">
      <div className="row gy-4 align-items-center">
        <div className="col-12 col-lg-6 p-3 p-lg-5 text-center text-lg-start">
          <img src={imageURL} alt={productName} className="img-fluid" style={{ maxWidth: "100%" }} />
        </div>

        <div className="col-12 col-lg-6 p-3 p-lg-5 mt-lg-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div className="d-flex flex-wrap gap-3 gap-lg-0">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try demo
            </a>
            <a
              href={learnMore}
              className="ms-lg-5"
              style={{ textDecoration: "none" }}
            >
              Learn more
            </a>
          </div>

          <div className="mt-4 mt-lg-5 d-flex flex-wrap gap-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" className="img-fluid" style={{ maxHeight: "45px" }} />
            </a>

            <a href={appStore} className="ms-lg-5">
              <img
                src="media/images/appStoreBadge.svg"
                alt="App Store"
                className="img-fluid"
                style={{ maxHeight: "45px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
