import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";

const OrderActionWindow = ({ uid, mode = "BUY" }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const generalContext = useContext(GeneralContext);

  const isBuy = mode === "BUY";

  const handleOrderClick = async () => {
    if (stockQuantity <= 0) {
      setError("Quantity must be greater than 0");
      return;
    }
    if (stockPrice <= 0) {
      setError("Price must be greater than 0");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      await axios.post(`${API_URL}/newOrder`, {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: mode,
      });

      if (isBuy) {
        generalContext.closeBuyWindow();
      } else {
        generalContext.closeSellWindow();
      }
    } catch (err) {
      setError("Order failed. Please try again.");
      console.error("Order error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancelClick = () => {
    if (isBuy) {
      generalContext.closeBuyWindow();
    } else {
      generalContext.closeSellWindow();
    }
  };

  const marginRequired = (stockQuantity * stockPrice * 0.2).toFixed(2);

  return (
    <div className="order-overlay" onClick={handleCancelClick}>
      <div
        className={`order-container ${isBuy ? "buy-mode" : "sell-mode"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`order-header ${isBuy ? "header-buy" : "header-sell"}`}>
          <div className="header-content">
            <h3>
              {uid} <span className="order-type-badge">{mode}</span>
            </h3>
            <p className="market-type">NSE</p>
          </div>
          <button className="close-btn" onClick={handleCancelClick}>
            ×
          </button>
        </div>

        <div className="order-tabs">
          <button className="tab-btn active">Regular</button>
          <button className="tab-btn" disabled>
            Cover
          </button>
          <button className="tab-btn" disabled>
            AMO
          </button>
        </div>

        <div className="order-body">
          <div className="order-type-row">
            <label className="radio-label">
              <input type="radio" name="productType" defaultChecked /> Intraday
              <span className="radio-hint">MIS</span>
            </label>
            <label className="radio-label">
              <input type="radio" name="productType" /> Longterm
              <span className="radio-hint">CNC</span>
            </label>
          </div>

          <div className="input-row">
            <div className="input-group">
              <label>Qty.</label>
              <input
                type="number"
                min="1"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(e.target.value)}
                className="order-input"
              />
            </div>
            <div className="input-group">
              <label>Price</label>
              <input
                type="number"
                min="0"
                step="0.05"
                value={stockPrice}
                onChange={(e) => setStockPrice(e.target.value)}
                className="order-input"
              />
            </div>
            <div className="input-group">
              <label>Trigger</label>
              <input
                type="number"
                className="order-input disabled"
                disabled
                placeholder="—"
              />
            </div>
          </div>

          {error && <div className="order-error">{error}</div>}

          <div className="order-footer">
            <div className="margin-info">
              <span className="margin-label">Margin required</span>
              <span className="margin-value">₹{marginRequired}</span>
            </div>
            <div className="action-buttons">
              <button
                className={`order-btn ${isBuy ? "btn-buy" : "btn-sell"}`}
                onClick={handleOrderClick}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : mode}
              </button>
              <button className="order-btn btn-cancel" onClick={handleCancelClick}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderActionWindow;

