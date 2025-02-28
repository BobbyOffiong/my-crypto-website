import React, { useState, useEffect } from "react";
import axios from "axios";

const CryptoPrices = () => {
  const [prices, setPrices] = useState({});
  const [previousPrices, setPreviousPrices] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price",
          {
            params: {
              ids: "bitcoin,ethereum,dogecoin",
              vs_currencies: "usd",
            },
          }
        );

        if (response.data) {
          setPreviousPrices(prices); // Store the previous price before updating
          setPrices(response.data);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching crypto prices:", error);
        setIsLoading(false);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 300000); // Refresh every 5 minutes

    return () => clearInterval(interval);
  }, ); 

  const calculatePercentageChange = (currentPrice, previousPrice) => {
    if (!currentPrice || !previousPrice || previousPrice === 0) return 0;
    return ((currentPrice - previousPrice) / previousPrice) * 100;
  };

  const renderPriceChangeIndicator = (currentPrice, previousPrice) => {
    if (!currentPrice || !previousPrice) return null;

    const percentageChange = calculatePercentageChange(currentPrice, previousPrice)?.toFixed(2);

    if (currentPrice > previousPrice) {
      return <span className="ml-2 text-green-500">▲ {percentageChange}%</span>;
    } else if (currentPrice < previousPrice) {
      return <span className="ml-2 text-red-500">▼ {percentageChange}%</span>;
    } else {
      return <span className="ml-2 text-gray-500 text-sm">• 0.00%</span>;
    }
  };

  if (isLoading) return <div>Loading prices...</div>;

  return (
    <div className="flex space-x-6 overflow-x-auto">
      {["bitcoin", "ethereum", "dogecoin"].map((coin) => (
        <div key={coin} className="text-center">
          <span className="font-bold text-sm text-orange-200">
            {coin.toUpperCase()}
          </span>
          <div className="text-white text-lg">
            ${prices[coin]?.usd?.toLocaleString()}
            {renderPriceChangeIndicator(prices[coin]?.usd, previousPrices[coin]?.usd)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CryptoPrices;
