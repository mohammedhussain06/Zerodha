import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container p-3 p-lg-5">
      <div className="row gy-4 align-items-center">
        <div className="col-12 col-lg-6 p-3 p-lg-5 mt-lg-5 order-2 order-lg-1">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn more
            </a>
          </div>
        </div>

        <div className="col-12 col-lg-6 text-center order-1 order-lg-2">
          <img src={imageURL} alt={productName} className="img-fluid" style={{ maxWidth: "35rem" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
