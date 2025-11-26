import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>

      <div id="supportContent">
        <div className="row py-5 gy-4">
          <div className="col-12 col-lg-7 p-3">
            <h1 className="fs-3 mb-4">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input
              placeholder="Eg: how do i activate F&O, why is my order getting rejected"
              className="mb-4"
            />
            <br />

            <div className="mt-2 quick-links">
              <a href="">Track account opening</a>{" "}
              <a href="">Track segment activation</a>{" "}
              <a href="">Intraday margins</a> <a href="">Kite manual user</a>
            </div>
          </div>

          <div className="col-12 col-lg-4 p-3 offset-lg-1">
            <h1 className="fs-3 mb-4">Featured</h1>
            <ol className="ps-3">
              <li className="mb-2">
                <a href="">Current Takeovers and Delistings - January 2025</a>
              </li>
              <li className="mb-2">
                <a href="">Latest Intraday leverages - MIS & CO</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
