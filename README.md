# Mini E-commerce (Mini Catalog)

This is a small frontend-only e-commerce demo built with React + Vite. It includes a product catalog, search & filter, product details modal, and a cart. The project uses simple CSS in `src/App.css` and small React components under `src/components`.

## Features

- Product listing (image, name, price, stock)
- Search by name and category filter
- Product details modal with quantity selection
- Cart page: add/remove items, update quantities, and show total price
- Routes: Home (`/`), Cart (`/cart`), About (`/about`), Contact (`/contact`)

## Files to know

- `src/App.jsx` — app entry and routing
- `src/index.css` & `src/App.css` — styles
- `src/data/products.js` — product seed data and image URLs
- `src/components/` — UI components (Navbar, Header, ProductList, ProductCard, ProductDetails, Cart, Footer)
- `src/pages/` — `CartPage.jsx`, `About.jsx`, `Contact.jsx`


## Installation

1. Clone the repository:

```bash
git clone https://github.com/USERNAME/mini_ecommerce.git

2. Navigate to the project folder:

cd mini_ecommerce
3.Install dependencies:

npm install
# or
yarn


4.Start the development server:

npm run dev
# or
yarn dev





## Troubleshooting

- "Images not showing": try opening the image URL directly in a browser. If external images are blocked, switch to local images in `src/assets/`.
- "Port in use": Vite will try a different port or stop the process using that port and restart.
- If you see PostCSS/Tailwind build errors, check `postcss.config.js` or remove Tailwind directives if you prefer plain CSS.

