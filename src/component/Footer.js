import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaYoutubeSquare, // You can add this icon if needed
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-14 px-4 grid lg:grid-cols-3 gap-8 text-neutral-800 dark:bg-text-neutral-800">
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#38bdf8]">Shoe Company</h1>
          <p className="py-4 text-font_color">
            Welcome to Shoe Company, your one-stop shop for the latest in footwear fashion. We are dedicated to providing you with the best quality shoes.
          </p>
        </div>
        <div className="flex justify-between md:w-[75%] my-6 text-font_color">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          {/* Add any additional social icons as needed */}
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h6 className="font-medium text-black">Support</h6>
          <ul>
            <li className="py-2 text-sm h5">Contact Us</li>
            <li className="py-2 text-sm h5">Shipping Information</li>
            <li className="py-2 text-sm h5">Returns and Exchanges</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h6 className="font-medium text-black">Subscribe to Our Newsletter</h6>
          <input
            type="email"
            placeholder="Enter your email"
            className="py-2 px-4 mt-2 rounded-md border border-text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#38bdf8] dark:bg-gray dark:text-white"
          />
          <button className="bg-[#38bdf8] py-2 px-4 mt-2 rounded-md text-white">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
