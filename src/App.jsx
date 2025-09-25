import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import productsData from './data/products'
import Navbar from './components/Navbar'
import Header from './components/Header'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import Footer from './components/Footer'
import CartPage from './pages/CartPage'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
 
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem('mini_cart')
      return raw ? JSON.parse(raw) : {}
    } catch {
      return {}
    }
  })

  useEffect(() => {
    localStorage.setItem('mini_cart', JSON.stringify(cart))
  }, [cart])

  const categories = useMemo(() => {
    const cats = new Set(productsData.map((p) => p.category))
    return ['All', ...Array.from(cats)]
  }, [])

  function addToCart(product, qty = 1) {
    setCart((prev) => {
      const existing = prev[product.id]
      const nextQty = (existing ? existing.qty : 0) + qty
      return {
        ...prev,
        [product.id]: { product, qty: Math.min(nextQty, product.stock) },
      }
    })
  }

  function removeFromCart(productId) {
    setCart((prev) => {
      const copy = { ...prev }
      delete copy[productId]
      return copy
    })
  }

  function updateQty(productId, qty) {
    setCart((prev) => {
      const item = prev[productId]
      if (!item) return prev
      return { ...prev, [productId]: { ...item, qty: Math.max(0, Math.min(qty, item.product.stock)) } }
    })
  }

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return productsData.filter((p) => {
      if (category !== 'All' && p.category !== category) return false
      if (!q) return true
      return p.name.toLowerCase().includes(q)
    })
  }, [search, category])

  const cartCount = Object.values(cart).reduce((s, it) => s + it.qty, 0)
  const cartTotal = Object.values(cart).reduce((s, it) => s + it.qty * it.product.price, 0)

  return (
    <BrowserRouter>
      {/* Dark background and full height */}
      <div className="bg-gray-900 text-white min-h-screen">
        <div className="app-root px-4 max-w-7xl mx-auto">
          <Navbar cartCount={cartCount} />

          <Routes>
            <Route
              path="/"
              element={
                <main>
                  <Header
                    search={search}
                    onSearch={setSearch}
                    categories={categories}
                    category={category}
                    onCategory={setCategory}
                    cartCount={cartCount}
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-start">
                    <ProductList products={filtered} onSelect={setSelectedProduct} onAdd={addToCart} />
                  </div>
                </main>
              }
            />

            <Route path="/cart" element={<CartPage items={cart} onRemove={removeFromCart} onUpdateQty={updateQty} total={cartTotal} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          {selectedProduct && (
            <ProductDetails
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
              onAdd={(qty = 1) => {
                addToCart(selectedProduct, qty)
                setSelectedProduct(null)
              }}
            />
          )}

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
