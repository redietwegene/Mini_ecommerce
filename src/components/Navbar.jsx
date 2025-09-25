import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ cartCount }) {
  return (
    <nav className="bg-gray-900 text-white w-full shadow-md px-6 py-4 flex items-center">
     
      <div className="text-2xl font-bold text-blue-400">
        <Link to="/">Mini ecommerce</Link>
      </div>

      <div className="ml-auto flex items-center space-x-6">
        <Link 
          to="/about" 
          className="hover:text-blue-400 transition-colors duration-200"
        >
          About
        </Link>
        <Link 
          to="/contact" 
          className="hover:text-blue-400 transition-colors duration-200"
        >
          Contact
        </Link>

    
        <Link 
          to="/cart" 
          className="relative bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition-colors duration-200"
        >
          Cart
          <span className="ml-2 bg-white text-blue-600 font-bold px-2 py-1 rounded-full text-sm">
            {cartCount}
          </span>
        </Link>
      </div>
    </nav>
  )
}
