import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList({ products, onSelect, onAdd }) {
  if (!products || products.length === 0) return <div className="empty">No products found.</div>

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onSelect={() => onSelect(p)} onAdd={() => onAdd(p)} />
      ))}
    </section>
  )
}
