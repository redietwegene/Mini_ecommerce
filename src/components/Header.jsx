import React from 'react'

export default function Header({ search, onSearch, categories, category, onCategory, cartCount }) {
  return (
    <header className="bg-gray-900 w-full px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
     
      <div className="flex flex-col sm:flex-row gap-3 items-center w-full md:w-auto">
     
        <input
          aria-label="Search"
          className="px-3 py-2 rounded bg-gray-800 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          placeholder="Search products..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
        />

     
        <select
          value={category}
          onChange={(e) => onCategory(e.target.value)}
          className="px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

       
      </div>
    </header>
  )
}
