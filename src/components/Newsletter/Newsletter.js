import React, { useState } from "react";
import "./Newsletter.css"; // Import the custom CSS file

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setMessage("Thank you for subscribing to our daily Newsletter!");
      setEmail("");
    } catch (error) {
      setMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="bg-blue-500 p-4 text-center">
      <div className="newsletter-container max-w-4xl mx-auto bg-blue-600 text-white p-4 rounded-lg">
        <h2 className="text-lg font-bold">Subscribe to Our Newsletter</h2>
        <form onSubmit={handleSubscribe} className="newsletter-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="newsletter-input flex-1 p-2 text-gray-900 
            text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="newsletter-button bg-white text-blue-600 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
      {message && <p className="mt-2 text-green-600 font-medium">{message}</p>}
    </div>
  );
};

export default Newsletter;
