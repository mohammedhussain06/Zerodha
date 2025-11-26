import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-1 text-center">
        <div className="col-11 mx-auto p-1">
          <div
            className="d-flex mb-4"
            style={{ borderBottom: "1px solid #e0e0e0" }}
          >
            <h3
              style={{
                fontSize: "20px",
                color: "#387ed1",
                padding: "15px 30px",
                borderBottom: "2px solid #387ed1",
                marginBottom: "-1px",
                cursor: "pointer",
              }}
            >
              Equity
            </h3>
            <h3
              style={{
                fontSize: "20px",
                color: "#666",
                padding: "15px 30px",
                cursor: "pointer",
              }}
            >
              Currency
            </h3>
            <h3
              style={{
                fontSize: "20px",
                color: "#666",
                padding: "15px 30px",
                cursor: "pointer",
              }}
            >
              Commodity
            </h3>
          </div>

          <div className="table-responsive">
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "14px",
                textAlign: "left",
                color: "#444",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  ></th>
                  <th
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                      color: "#666",
                      fontWeight: "normal",
                    }}
                  >
                    Equity delivery
                  </th>
                  <th
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                      color: "#666",
                      fontWeight: "normal",
                    }}
                  >
                    Equity intraday
                  </th>
                  <th
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                      color: "#666",
                      fontWeight: "normal",
                    }}
                  >
                    F&O - Futures
                  </th>
                  <th
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                      color: "#666",
                      fontWeight: "normal",
                    }}
                  >
                    F&O - Options
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1: Brokerage */}
                <tr>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                      color: "#666",
                    }}
                  >
                    Brokerage
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    Zero Brokerage
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    0.03% or Rs. 20/executed order whichever is lower
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    0.03% or Rs. 20/executed order whichever is lower
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    Flat Rs. 20 per executed order
                  </td>
                </tr>
                {/* Row 2: STT/CTT */}
                <tr>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                      color: "#666",
                    }}
                  >
                    STT/CTT
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    0.1% on buy & sell
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    0.025% on the sell side
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    0.02% on the sell side
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    <ul style={{ paddingLeft: "15px", margin: 0 }}>
                      <li style={{ marginBottom: "5px" }}>
                        0.125% of the intrinsic value on options that are bought
                        and exercised
                      </li>
                      <li>0.1% on sell side (on premium)</li>
                    </ul>
                  </td>
                </tr>
                {/* Row 3: Transaction Charges */}
                <tr>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                      color: "#666",
                    }}
                  >
                    Transaction charges
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    NSE: 0.00297%
                    <br />
                    BSE: 0.00375%
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    NSE: 0.00297%
                    <br />
                    BSE: 0.00375%
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    NSE: 0.00173%
                    <br />
                    BSE: 0
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    NSE: 0.03503% (on premium)
                    <br />
                    BSE: 0.0325% (on premium)
                  </td>
                </tr>
                {/* Row 4: GST */}
                <tr>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                      color: "#666",
                    }}
                  >
                    GST
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                </tr>
                {/* Row 5: SEBI Charges */}
                <tr>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                      color: "#666",
                    }}
                  >
                    SEBI charges
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    <i
                      className="fa-solid fa-indian-rupee-sign"
                      style={{ fontSize: "12px" }}
                    ></i>{" "}
                    10 / crore
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    <i
                      className="fa-solid fa-indian-rupee-sign"
                      style={{ fontSize: "12px" }}
                    ></i>{" "}
                    10 / crore
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    <i
                      className="fa-solid fa-indian-rupee-sign"
                      style={{ fontSize: "12px" }}
                    ></i>{" "}
                    10 / crore
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    <i
                      className="fa-solid fa-indian-rupee-sign"
                      style={{ fontSize: "12px" }}
                    ></i>{" "}
                    10 / crore
                  </td>
                </tr>
                {/* Row 6: Stamp Charges */}
                <tr>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                      color: "#666",
                    }}
                  >
                    Stamp charges
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    0.015% or{" "}
                    <i
                      className="fa-solid fa-indian-rupee-sign"
                      style={{ fontSize: "12px" }}
                    ></i>{" "}
                    1500 / crore on buy side
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    0.003% or{" "}
                    <i
                      className="fa-solid fa-indian-rupee-sign"
                      style={{ fontSize: "12px" }}
                    ></i>{" "}
                    300 / crore on buy side
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    0.002% or{" "}
                    <i
                      className="fa-solid fa-indian-rupee-sign"
                      style={{ fontSize: "12px" }}
                    ></i>{" "}
                    200 / crore on buy side
                  </td>
                  <td
                    style={{
                      padding: "15px",
                      borderBottom: "1px solid #e0e0e0",
                    }}
                  >
                    0.003% or{" "}
                    <i
                      className="fa-solid fa-indian-rupee-sign"
                      style={{ fontSize: "12px" }}
                    ></i>{" "}
                    300 / crore on buy side
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-4">
            <a
              href="#"
              style={{
                color: "#387ed1",
                textDecoration: "none",
                fontSize: "16px",
              }}
            >
              Calculate your costs upfront
            </a>{" "}
            using our brokerage calculator
          </div>
        </div>
      </div>

      {/* --- Existing Section: Brokerage Calculator List & Side Badges --- */}
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "14px" }}
            className="text-muted p-3"
          >
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of{" "}
              <i
                className="fa-solid fa-indian-rupee-sign"
                style={{ fontSize: "12px" }}
              ></i>
              50 + GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              <i
                className="fa-solid fa-indian-rupee-sign"
                style={{ fontSize: "12px" }}
              ></i>
              20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or{" "}
              <i
                className="fa-solid fa-indian-rupee-sign"
                style={{ fontSize: "12px" }}
              ></i>
              100 per executed order for equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or{" "}
              <i
                className="fa-solid fa-indian-rupee-sign"
                style={{ fontSize: "12px" }}
              ></i>
              200 per executed order for equity (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged{" "}
              <i
                className="fa-solid fa-indian-rupee-sign"
                style={{ fontSize: "12px" }}
              ></i>
              40 per executed order instead of{" "}
              <i
                className="fa-solid fa-indian-rupee-sign"
                style={{ fontSize: "12px" }}
              ></i>
              20 per executed order.
            </li>
          </ul>
        </div>

        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
          <span
            className="mt-3"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "2px 8px",
              borderRadius: "3px",
              fontSize: "12px",
              fontWeight: "bold",
              display: "inline-block",
              marginLeft: "10px",
            }}
          >
            FREE
          </span>

          <p className="mt-3 text-muted">
            <i
              className="fa-solid fa-indian-rupee-sign"
              style={{ fontSize: "12px" }}
            ></i>{" "}
            500
          </p>
          <p className="mt-3 text-muted">
            <i
              className="fa-solid fa-indian-rupee-sign"
              style={{ fontSize: "12px" }}
            ></i>{" "}
            300
          </p>
          <p className="text-muted" style={{ marginTop: "41px" }}>
            <i
              className="fa-solid fa-indian-rupee-sign"
              style={{ fontSize: "12px" }}
            ></i>{" "}
            400
          </p>

          <span
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "2px 8px",
              borderRadius: "3px",
              fontSize: "12px",
              fontWeight: "bold",
              display: "inline-block",
              marginLeft: "10px",
              marginTop: "1.5px",
            }}
          >
            FREE
          </span>

          <br />
          <span
            className="mt-3"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "2px 8px",
              borderRadius: "3px",
              fontSize: "12px",
              fontWeight: "bold",
              display: "inline-block",
              marginLeft: "10px",
            }}
          >
            FREE
          </span>
        </div>
      </div>

      <div className="row p-5 text-center border-top">
        <div className="col-12 p-4">
          <h3
            style={{
              fontSize: "22px",
              fontWeight: "400",
              color: "#333",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Demat AMC (Annual Maintenance Charge)
          </h3>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              border: "1px solid #e0e0e0",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    textAlign: "left",
                    padding: "12px 15px",
                    borderBottom: "1px solid #e0e0e0",
                    color: "#666",
                    fontSize: "14px",
                    fontWeight: "normal",
                  }}
                >
                  Value of holdings
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "12px 15px",
                    borderBottom: "1px solid #e0e0e0",
                    color: "#666",
                    fontSize: "14px",
                    fontWeight: "normal",
                  }}
                >
                  AMC
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    padding: "15px",
                    borderBottom: "1px solid #e0e0e0",
                    color: "#444",
                    fontSize: "14px",
                    textAlign: "left",
                  }}
                >
                  Up to{" "}
                  <i
                    className="fa-solid fa-indian-rupee-sign"
                    style={{ fontSize: "12px" }}
                  ></i>{" "}
                  4 lakh
                </td>
                <td
                  style={{
                    padding: "15px",
                    borderBottom: "1px solid #e0e0e0",
                    color: "#444",
                    fontSize: "14px",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "#4CAF50",
                      color: "white",
                      padding: "2px 8px",
                      borderRadius: "3px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      display: "inline-block",
                      textTransform: "uppercase",
                    }}
                  >
                    FREE*
                  </span>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "15px",
                    borderBottom: "1px solid #e0e0e0",
                    color: "#444",
                    fontSize: "14px",
                    textAlign: "left",
                  }}
                >
                  <i
                    className="fa-solid fa-indian-rupee-sign"
                    style={{ fontSize: "12px" }}
                  ></i>{" "}
                  4 lakh -{" "}
                  <i
                    className="fa-solid fa-indian-rupee-sign"
                    style={{ fontSize: "12px" }}
                  ></i>{" "}
                  10 lakh
                </td>
                <td
                  style={{
                    padding: "15px",
                    borderBottom: "1px solid #e0e0e0",
                    color: "#444",
                    fontSize: "14px",
                    textAlign: "left",
                  }}
                >
                  <i
                    className="fa-solid fa-indian-rupee-sign"
                    style={{ fontSize: "12px" }}
                  ></i>{" "}
                  100 per year, charged quarterly*
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "15px",
                    color: "#444",
                    fontSize: "14px",
                    borderBottom: "none",
                    textAlign: "left",
                  }}
                >
                  Above{" "}
                  <i
                    className="fa-solid fa-indian-rupee-sign"
                    style={{ fontSize: "12px" }}
                  ></i>{" "}
                  10 lakh
                </td>
                <td
                  style={{
                    padding: "15px",
                    color: "#444",
                    fontSize: "14px",
                    borderBottom: "none",
                    textAlign: "left",
                  }}
                >
                  <i
                    className="fa-solid fa-indian-rupee-sign"
                    style={{ fontSize: "12px" }}
                  ></i>{" "}
                  300 per year, charged quarterly
                </td>
              </tr>
            </tbody>
          </table>
          <p
            style={{
              marginTop: "15px",
              fontSize: "12px",
              color: "#666",
              lineHeight: "1.6",
              textAlign: "left",
            }}
          >
            * Lower AMC is applicable only if the account qualifies as a Basic
            Services Demat Account (BSDA). BSDA account holders cannot hold more
            than one demat account. To learn more about BSDA,{" "}
            <a
              href="#"
              style={{
                color: "#387ed1",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              click here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
