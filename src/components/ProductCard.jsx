import React from 'react'

export default function ProductCard({ product, onSelect, onAdd }) {
  return (
    <article className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-md hover:shadow-lg transition-shadow">
      {/* Product Image */}
      <button 
        className="block w-full bg-transparent p-0" 
        onClick={onSelect} 
        aria-label={`View ${product.name}`}
      >
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-200"
        />
      </button>

      {/* Product Details */}
      <div className="p-4 flex flex-col">
        <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>

        <div className="flex justify-between text-sm text-gray-400 mb-3">
          <span className="font-medium text-blue-400">${product.price.toFixed(2)}</span>
          <span>{product.stock} in stock</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button 
            onClick={() => onAdd(1)} 
            disabled={product.stock === 0} 
            className="flex-1 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-3 py-2 rounded transition-colors duration-200"
          >
            Add
          </button>
          <button 
            onClick={onSelect} 
            className="flex-1 border border-gray-600 hover:border-blue-400 text-white px-3 py-2 rounded transition-colors duration-200"
          >
            Details
          </button>
        </div>
      </div>
    </article>
  )
}
