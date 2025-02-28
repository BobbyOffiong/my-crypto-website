const Partnership = () => {
    const partners = [
      { name: "HEXAGON", logo: "/images/HomePage images/Patnership/hexagon.png", url: "https://hexagon.com" },
      { name: "CONSTRUCTION SOLUTIONS", logo: "/images/HomePage images/Patnership/construction.png", url: "https://construction.com" },
      { name: "OVERSEAS TRANSPORT", logo: "/images/HomePage images/Patnership/overseas.png", url: "https://overseas.com" },
      { name: "PLUS INFINITY", logo: "/images/HomePage images/Patnership/infinity.png", url: "https://infinity.com" },
      { name: "LOGISTICS", logo: "/images/HomePage images/Patnership/logistics.png", url: "https://logistics.com" },
      { name: "HEALTH", logo: "/images/HomePage images/Patnership/health.png", url: "https://health.com" }
    ];
  
    return (
      <div className="py-16 px-6 md:px-16 text-center bg-white">
        <h2 className="text-3xl md:text-5xl font-bold text-black">
          Currencyzen <span className="text-orange-300">for Good</span>
        </h2>
        <p className="mt-4 text-grey-600">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem.
        </p>
  
        {/* Partners Logos */}
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {partners.map((partner, index) => (
            <a key={index} href={partner.url} target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition text-white">
              <img src={partner.logo} alt={partner.name} className="h-12 md:h-16" />
            </a>
          ))}
        </div>
      </div>
    );
  };
  
  export default Partnership;
  