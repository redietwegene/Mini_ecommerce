import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center px-4">
      <div className="bg-gray-800 bg-opacity-90 rounded-lg p-8 shadow-lg max-w-2xl w-full">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          Contact Us
        </h2>

        <div className="text-center space-y-2 mb-6">
          <p className="text-gray-300">📧 Email: support@qenetibeb.com</p>
          <p className="text-gray-300">📞 Phone: +251-911-123-456</p>
          <p className="text-gray-300">📍 Address: Siromeda, Addis Ababa, Ethiopia</p>
        </div>

        <div className="text-center mt-6">
          <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="#" aria-label="Facebook">
              <FaFacebook className="text-blue-600 hover:text-blue-400 text-2xl transition-colors duration-200" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-pink-500 hover:text-pink-400 text-2xl transition-colors duration-200" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="text-blue-400 hover:text-blue-200 text-2xl transition-colors duration-200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
