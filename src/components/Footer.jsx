import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-8 text-center text-sm text-gray-400">
      <div>© {new Date().getFullYear()} Mini Catalog</div>
      <div>Built with React + Vite</div>
    </footer>
  )
}
