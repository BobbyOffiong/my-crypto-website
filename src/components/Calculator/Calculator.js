import React, { useState, useEffect } from "react";

const Calculator = () => {
  const [crypto, setCrypto] = useState("bitcoin");
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(null);
  const [usdValue, setUsdValue] = useState(0);

  const cryptocurrencies = [
    { id: "bitcoin", name: "Bitcoin (BTC)" },
    { id: "ethereum", name: "Ethereum (ETH)" },
    { id: "dogecoin", name: "Dogecoin (DOGE)" },
    { id: "solana", name: "Solana (SOL)" }
  ];

  useEffect(() => {
    const fetchCryptoPrice = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`
        );
        const data = await response.json();
        setPrice(data[crypto]?.usd || 0);
      } catch (error) {
        console.error("Error fetching crypto prices:", error);
      }
    };

    fetchCryptoPrice();
  }, [crypto]);

  useEffect(() => {
    if (price) {
      setUsdValue(amount > 0 ? amount * price : 0);
    }
  }, [amount, price]);

  return (
    <div className="py-10 px-6 text-center bg-[rgba(255,255,255,0.90)]">
      <h2 className="text-3xl font-bold text-gray-800">
        Cryptocurrency <span className="text-orange-300">Calculator</span>
      </h2>

      <div className="mt-6 bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
        <label className="block text-gray-700 font-medium mb-2">Select Coin:</label>
        <select
          value={crypto}
          onChange={(e) => setCrypto(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        >
          {cryptocurrencies.map((coin) => (
            <option key={coin.id} value={coin.id}>{coin.name}</option>
          ))}
        </select>

        <label className="block text-gray-700 font-medium mb-2">Enter Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Math.max(0, parseFloat(e.target.value)))}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />

        <div className="mt-4 text-lg font-semibold text-gray-700">
          <span>💰 USD Value: </span>
          <span className="text-blue-600">${new Intl.NumberFormat("en-US").format(usdValue.toFixed(2))}</span>
        </div>
      </div>
    </div>
  );
};

export default Calculator;