
const FutureOfDM = () => {
  return (
    <div className="relative py-16 px-6 md:px-16 bg-[rgba(255,255,255,0.90)]">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-5xl font-bold text-black">
        Crypto currency is <br />
        <span className="text-orange-300">The future of digital money</span>
      </h2>

      {/* Video Section */}
      <div className="mt-8 flex justify-center">
        <div className="relative w-full max-w-3xl">
          <video controls className="w-full shadow-lg">
            <source src="/images/HomePage%20images/FutureOfDM/future-of-dm-vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default FutureOfDM;
