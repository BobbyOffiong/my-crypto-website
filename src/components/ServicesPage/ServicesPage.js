import React, {useEffect, useState} from "react";

const ServicesPage = () => {
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await fetch(
          "https://baconipsum.com/api/?type=all-meat&paras=2"
        );

        if(!res.ok) {
          throw new Error("Failed to fetch content");          
        }

        const data = await res.json();
        console.log(data); //inspecting data

        setContent(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    fetchContent();
  }, []);
  return (
    <>
    {/* HERO */}
    <section
      className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center bg-gradient-to-r from-sky-400 to-blue-900 overflow-hidden"
    >
      <img
        src="/images/HomePage images/GetStartedSection/dotted-world-map.jpg" // Replace with your actual path
        alt="Dotted World Map"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* Overlay to enhance text contrast */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center text-white flex flex-col
      item-center justify-center px-6 max-w-3xl space-y-6">

        <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
          Our Services
        </h1>
        <div className="w-full h-1.5 bg-orange-500 rounded"/>

      {/* BODY */}
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : !content ? (
      <p>Loading content...</p>
    ) : (
      <div>
      <p>{content[0]}</p>
      <p>{content[1]}</p>
      </div>
    )}
    </div>
    </div>
    </section>
    </>
  );
};

export default ServicesPage;
