import { useEffect, useState } from "react";

const AboutPage = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        console.log("Fetching...");

        const res = await fetch("https://api.coingecko.com/api/v3/global");
        
        console.log("Response:", res);

        const data = await res.json();
        console.log("Data:", data);

        setStats(data.data);
      } catch (err) {
        console.error("ERROR:", err);
      }     
    };

    fetchStats();
  }, []);
  return (
    <>
    <section className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center overflow-hidden bg-gradient-to-r from-sky-400 to-blue-900">

  {/* Background image */}
  <img
    src="/images/HomePage images/GetStartedSection/dotted-world-map.jpg"
    alt="Dotted World Map"
    className="absolute inset-0 w-full h-full object-cover opacity-20"
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 max-w-3xl space-y-6">

    <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
      About Us
    </h1>

    <div className="w-24 h-1.5 bg-orange-500 rounded" />

    <p className="text-sm md:text-base text-white/90 leading-relaxed">
      We are dedicated to empowering individuals and institutions through smart,
      secure, and forward-thinking cryptocurrency investments. With a deep understanding
      of blockchain technology and market trends, our team of seasoned professionals offers
      tailored strategies that help our clients navigate the evolving digital asset space with confidence and clarity.
    </p>

    <p className="text-sm md:text-base text-white/90 leading-relaxed">
      We prioritize transparency, education, and performance. Whether you're new to crypto
      or a seasoned investor, we provide the tools, insights, and support needed to make informed decisions.
      Our mission is to bridge the gap between traditional finance and the future of decentralized wealth.
    </p>

  </div>
</section>
  

    <section className="bg-gray-900 text-white py-10 text-center">
      <h2 className="text-2xl font-bold mb-4">Live Crypto Stats</h2>

      {!stats ? (
        <p>Loading stats...</p>
      ) : (
        <div className="space-y-2">
          <p>
            Market Cap: ${stats.total_market_cap.usd.toLocaleString()}
          </p>
          <p>
            BTC Dominance: {stats.market_cap_percentage.btc.toFixed(2)}%
          </p>
          <p>
            Active Coins: {stats.active_cryptocurrencies}
          </p>
        </div>
     
      )}
    </section>
    </>
  );
};

export default AboutPage;
