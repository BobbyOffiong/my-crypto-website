import { FaBolt, FaClock, FaComments } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="relative bg-cover bg-center py-16 px-6 md:px-16">
      <div className="absolute inset-0 bg-blue-500"></div>
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div className="text-white text-center md:text-left">
          <h2 className="text-4xl font-bold">
            <span className="text-white">Why </span>
            <span className="text-white">Choose </span>
            <span className="text-orange-200 uppercase">US</span>
          </h2>
        </div>

        {/* Right Section */}
        <div className="space-y-6 text-white">
          {/* Point 1 */}
          <div className="flex items-start space-x-4">
            <FaBolt className="text-orange-200 text-2xl" />
            <div>
              <h3 className="text-lg font-bold uppercase text-orange-200">Fast Transaction</h3>
              <p className="text-white text-lg">Experience swift and seamless transactions with our cutting-edge blockchain technology, ensuring efficiency and security.</p>
            </div>
          </div>
          
          {/* Point 2 */}
          <div className="flex items-start space-x-4">
            <FaClock className="text-orange-200 text-2xl" />
            <div>
              <h3 className="text-lg font-bold uppercase text-orange-200">24/7 Trading</h3>
              <p className="text-white text-lg">Trade anytime, anywhere with our round-the-clock access to crypto markets, allowing you to maximize opportunities.</p>
            </div>
          </div>
          
          {/* Point 3 */}
          <div className="flex items-start space-x-4">
            <FaComments className="text-orange-200 text-2xl" />
            <div>
              <h3 className="text-lg font-bold uppercase text-orange-200">Free Consulting</h3>
              <p className="text-white text-lg">Get expert guidance and insights from our professional team to make informed investment decisions without extra charges.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
