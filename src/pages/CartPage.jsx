import React from 'react'
import Cart from '../components/Cart'

export default function CartPage({ items, onRemove, onUpdateQty, total }) {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <Cart items={items} onRemove={onRemove} onUpdateQty={onUpdateQty} total={total} />
    </div>
  )
}
