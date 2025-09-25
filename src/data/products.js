const products = [
  {
    id: 'p1',
    name: 'Classic White Tee',
    price: 19.99,
    stock: 12,
    category: 'Clothing',
    image: 'https://picsum.photos/id/101/400/300',
    description: 'A comfortable classic white t-shirt made from cotton.'
  },
  {
    id: 'p2',
    name: 'Blue Denim Jacket',
    price: 59.99,
    stock: 5,
    category: 'Clothing',
    image: 'https://picsum.photos/id/101/400/300',
    description: 'Stylish denim jacket for spring and fall.'
  },
  {
    id: 'p3',
    name: 'Wireless Headphones',
    price: 129.0,
    stock: 8,
    category: 'Electronics',
    image: 'https://picsum.photos/id/102/400/300',
    description: 'Noise-cancelling over-ear Bluetooth headphones.'
  },
  {
    id: 'p4',
    name: 'Espresso Mug',
    price: 12.5,
    stock: 30,
    category: 'Home',
    image: 'https://picsum.photos/id/103/400/300',
    description: 'Ceramic mug perfect for espresso or small drinks.'
  },
  {
    id: 'p5',
    name: 'Knitted Poncho',
    price: 89.0,
    stock: 7,
    category: 'Clothing',
    image: 'https://picsum.photos/id/104/400/300',
    description: 'Lightweight knitted poncho for layering.'
  },
  {
    id: 'p6',
    name: 'Leather Backpack',
    price: 120.0,
    stock: 10,
    category: 'Accessories',
    image: 'https://picsum.photos/id/104/400/300',
    description: 'Durable leather backpack perfect for daily use.'
  },
  {
    id: 'p7',
    name: 'Summer Hat',
    price: 35.0,
    stock: 20,
    category: 'Accessories',
    image: 'https://picsum.photos/id/106/400/300',
    description: 'Stylish summer hat to protect you from the sun.'
  },
  {
    id: 'p8',
    name: 'Casual Sneakers',
    price: 75.0,
    stock: 12,
    category: 'Footwear',
    image: 'https://picsum.photos/id/107/400/300',
    description: 'Comfortable sneakers suitable for everyday wear.'
  },
  {
    id: 'p9',
    name: 'Silk Scarf',
    price: 45.0,
    stock: 15,
    category: 'Accessories',
    image: 'https://picsum.photos/id/108/400/300',
    description: 'Elegant silk scarf for casual or formal outfits.'
  },
  {
    id: 'p10',
    name: 'Winter Coat',
    price: 150.0,
    stock: 5,
    category: 'Clothing',
    image: 'https://picsum.photos/id/109/400/300',
    description: 'Warm and cozy winter coat to keep you comfortable.'
  },
  {
    id: 'p11',
    name: 'Smart Watch',
    price: 199.0,
    stock: 6,
    category: 'Electronics',
    image: 'https://picsum.photos/id/110/400/300',
    description: 'Track your fitness and notifications on the go.'
  },
  {
    id: 'p12',
    name: 'Yoga Mat',
    price: 30.0,
    stock: 18,
    category: 'Fitness',
    image: 'https://picsum.photos/id/111/400/300',
    description: 'Non-slip yoga mat for all types of exercises.'
  },
  {
    id: 'p13',
    name: 'Sunglasses',
    price: 55.0,
    stock: 14,
    category: 'Accessories',
    image: 'https://picsum.photos/id/112/400/300',
    description: 'Trendy sunglasses to protect your eyes in style.'
  },
  {
    id: 'p14',
    name: 'Bluetooth Speaker',
    price: 89.0,
    stock: 9,
    category: 'Electronics',
    image: 'https://picsum.photos/id/113/400/300',
    description: 'Portable speaker with high-quality sound.'
  },
  {
    id: 'p15',
    name: 'Running Shorts',
    price: 25.0,
    stock: 20,
    category: 'Clothing',
    image: 'https://picsum.photos/id/114/400/300',
    description: 'Lightweight shorts for running or workouts.'
  },
  {
    id: 'p16',
    name: 'Desk Lamp',
    price: 40.0,
    stock: 12,
    category: 'Home',
    image: 'https://picsum.photos/id/115/400/300',
    description: 'Adjustable desk lamp for reading or work.'
  },
  {
    id: 'p17',
    name: 'Leather Wallet',
    price: 50.0,
    stock: 11,
    category: 'Accessories',
    image: 'https://picsum.photos/id/116/400/300',
    description: 'Sleek wallet with multiple card slots.'
  },
  {
    id: 'p18',
    name: 'Fitness Tracker',
    price: 99.0,
    stock: 7,
    category: 'Electronics',
    image: 'https://picsum.photos/id/117/400/300',
    description: 'Monitor your health and daily activity easily.'
  },
  {
    id: 'p19',
    name: 'Hiking Boots',
    price: 130.0,
    stock: 8,
    category: 'Footwear',
    image: 'https://picsum.photos/id/118/400/300',
    description: 'Durable boots for hiking and outdoor adventures.'
  },
  {
    id: 'p20',
    name: 'Ceramic Vase',
    price: 60.0,
    stock: 10,
    category: 'Home',
    image: 'https://picsum.photos/id/119/400/300',
    description: 'Decorative vase perfect for flowers or as a centerpiece.'
  }
];

export default products;
