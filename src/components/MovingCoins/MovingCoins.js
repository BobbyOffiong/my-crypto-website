import React from "react";
import "./MovingCoins.css";

const coinIcons = [
  "bitcoin", "ethereum", "litecoin", "dash", "monero", "ripple", "dogecoin", 
  "tether", "binance", "cardano", "polkadot", "solana", "stellar", "tron",
  "avalanche", "chainlink", "uniswap", "vechain", "tezos", "cosmos",
  "shiba", "algorand", "zcash", "decred", "nem", "iota", "polygon", "aave", "dai", "kucoin"
];

const MovingCoins = () => {
  return (
    <div className="overflow-hidden bg-blue-500 movingCoinsDiv">
      <div className="moving-coins gap-7">
        {[...coinIcons, ...coinIcons].map((coin, index) => (
          <div
            key={index}
            className="coin-icon py-3 rounded-full"
          >
            <img
              src={`/images/HomePage images/MovingCoins/${coin}.png`}
              alt={coin}
              className="coin-image rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingCoins;
