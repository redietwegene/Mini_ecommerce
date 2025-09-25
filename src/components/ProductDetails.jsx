import React, { useState } from 'react'

export default function ProductDetails({ product, onClose, onAdd }) {
  const [qty, setQty] = useState(1)

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4" onClick={onClose} role="dialog" aria-modal="true">
      <div className="bg-slate-900 text-white rounded-lg max-w-3xl w-full p-4" onClick={(e) => e.stopPropagation()}>
        <header className="flex justify-between items-start">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <button className="text-2xl leading-none" onClick={onClose}>×</button>
        </header>
        <div className="mt-4 flex flex-col md:flex-row gap-4">
          <img src={product.image} alt={product.name} className="w-full md:w-80 h-48 object-cover rounded" />
          <div className="flex-1 text-sm">
            <p className="text-gray-300">{product.description}</p>
            <p className="mt-3 text-lg font-semibold">${product.price.toFixed(2)}</p>
            <p className="text-gray-400">Stock: {product.stock}</p>

            <div className="mt-4 flex items-center gap-3">
              <label className="text-sm">Qty</label>
              <input type="number" min="1" max={product.stock} value={qty} onChange={(e) => setQty(Number(e.target.value))} className="w-20 px-2 py-1 rounded bg-white/5 text-white" />
            </div>

            <div className="mt-4 flex gap-2">
              <button onClick={() => { onAdd(qty) }} disabled={product.stock === 0} className="bg-indigo-600 px-3 py-1 rounded">Add to cart</button>
              <button onClick={onClose} className="px-3 py-1 rounded border border-white/10">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
