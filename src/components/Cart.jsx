import React from 'react'

function CartItem({ item, onRemove, onUpdateQty }) {
  return (
    <div className="flex items-center gap-3 mb-3 p-2 rounded bg-gray-800 border border-gray-700">
      <img 
        src={item.product.image} 
        alt={item.product.name} 
        className="w-16 h-16 object-cover rounded"
      />
      <div className="flex-1">
        <div className="text-white font-semibold">{item.product.name}</div>
        <div className="text-blue-400 text-sm">${(item.product.price * item.qty).toFixed(2)}</div>
        <div className="flex items-center gap-2 mt-1">
          <input
            type="number"
            min="1"
            max={item.product.stock}
            value={item.qty}
            onChange={(e) => onUpdateQty(item.product.id, Number(e.target.value))}
            className="w-16 px-2 py-1 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={() => onRemove(item.product.id)}
            className="text-red-500 hover:text-red-400 text-sm transition-colors duration-200"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Cart({ items, onRemove, onUpdateQty, total }) {
  const arr = Object.values(items)
  return (
    <div className="sticky top-4">
      <div className="bg-gray-800 p-4 rounded shadow-md w-80">
        <h3 className="font-semibold text-white text-lg mb-2">Your Cart</h3>
        {arr.length === 0 && <div className="text-gray-400 text-sm">Cart is empty</div>}

        <div className="mt-2">
          {arr.map((it) => (
            <CartItem key={it.product.id} item={it} onRemove={onRemove} onUpdateQty={onUpdateQty} />
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="font-semibold text-white">Total: ${total.toFixed(2)}</div>
          <button
            className="bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded text-white disabled:opacity-50 transition-colors duration-200"
            disabled={arr.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}
