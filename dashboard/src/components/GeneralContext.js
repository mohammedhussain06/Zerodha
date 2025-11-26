import React, { useState } from "react";

import OrderActionWindow from "./OrderActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isOrderWindowOpen, setIsOrderWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [orderMode, setOrderMode] = useState("BUY");

  const handleOpenBuyWindow = (uid) => {
    setOrderMode("BUY");
    setSelectedStockUID(uid);
    setIsOrderWindowOpen(true);
  };

  const handleCloseBuyWindow = () => {
    setIsOrderWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleOpenSellWindow = (uid) => {
    setOrderMode("SELL");
    setSelectedStockUID(uid);
    setIsOrderWindowOpen(true);
  };

  const handleCloseSellWindow = () => {
    setIsOrderWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {props.children}
      {isOrderWindowOpen && (
        <OrderActionWindow uid={selectedStockUID} mode={orderMode} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
