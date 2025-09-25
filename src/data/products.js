const products = [
  {
    id: 'p1',
    name: 'Classic White Tee',
    price: 19.99,
    stock: 12,
    category: 'Clothing',
    image: 'https://plus.unsplash.com/premium_photo-1719289799337-9cb436447965?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2xhc3NpYyUyMHdoaXRlJTIwdGVlfGVufDB8fDB8fHww',
    description: 'A comfortable classic white t-shirt made from cotton.'
  },
  {
    id: 'p2',
    name: 'Blue Denim Jacket',
    price: 59.99,
    stock: 5,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1624548140129-74786c5f1279?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsdWUlMjBkYW1pbiUyMGphY2tldHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Stylish denim jacket for spring and fall.'
  },
  {
    id: 'p3',
    name: 'Wireless Headphones',
    price: 129.0,
    stock: 8,
    category: 'Electronics',
    image: 'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lyZWxlc3MlMjBlYXJwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Noise-cancelling over-ear Bluetooth headphones.'
  },
  {
    id: 'p4',
    name: 'Espresso Mug',
    price: 12.5,
    stock: 30,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1639110531170-a88a4953d74c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXNwcmVzc28lMjBtdWd8ZW58MHx8MHx8fDA%3D',
    description: 'Ceramic mug perfect for espresso or small drinks.'
  },
  {
    id: 'p5',
    name: 'Knitted Poncho',
    price: 89.0,
    stock: 7,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1679847628912-4c3e7402abc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a25pdHRlZCUyMHBvbmNob3xlbnwwfHwwfHx8MA%3D%3D',
    description: 'Lightweight knitted poncho for layering.'
  },
  {
    id: 'p6',
    name: 'Leather Backpack',
    price: 120.0,
    stock: 10,
    category: 'Accessories',
    image: 'https://media.istockphoto.com/id/675173818/photo/women-leather-backpack.webp?a=1&b=1&s=612x612&w=0&k=20&c=t1QsWTp6bbvC2IjqXCi48GlOr1wUTYaR_M3v3hKvuCY=',
    description: 'Durable leather backpack perfect for daily use.'
  },
  {
    id: 'p7',
    name: 'Summer Hat',
    price: 35.0,
    stock: 20,
    category: 'Accessories',
    image: 'https://plus.unsplash.com/premium_photo-1693221161784-e6a735e8e4b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VtbWVyJTIwaGF0fGVufDB8fDB8fHww',
    description: 'Stylish summer hat to protect you from the sun.'
  },
  {
    id: 'p8',
    name: 'Casual Sneakers',
    price: 75.0,
    stock: 12,
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1571601035754-5c927f2d7edc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Comfortable sneakers suitable for everyday wear.'
  },
  {
    id: 'p9',
    name: 'Silk Scarf',
    price: 45.0,
    stock: 15,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1517472292914-9570a594783b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2lsayUyMHNjYXJmfGVufDB8fDB8fHww',
    description: 'Elegant silk scarf for casual or formal outfits.'
  },
  {
    id: 'p10',
    name: 'Winter Coat',
    price: 150.0,
    stock: 5,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1706765779494-2705542ebe74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2ludGVyJTIwY29hdHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Warm and cozy winter coat to keep you comfortable.'
  },
  {
    id: 'p11',
    name: 'Smart Watch',
    price: 199.0,
    stock: 6,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Track your fitness and notifications on the go.'
  },
  {
    id: 'p12',
    name: 'Yoga Mat',
    price: 30.0,
    stock: 18,
    category: 'Fitness',
    image: 'https://plus.unsplash.com/premium_photo-1675155952889-abb299df1fe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8eW9nYSUyMG1hdHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Non-slip yoga mat for all types of exercises.'
  },
  {
    id: 'p13',
    name: 'Sunglasses',
    price: 55.0,
    stock: 14,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VuZ2xhc3N8ZW58MHx8MHx8fDA%3D',
    description: 'Trendy sunglasses to protect your eyes in style.'
  },
  {
    id: 'p14',
    name: 'Bluetooth Speaker',
    price: 89.0,
    stock: 9,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Portable speaker with high-quality sound.'
  },
  {
    id: 'p15',
    name: 'Running Shorts',
    price: 25.0,
    stock: 20,
    category: 'Clothing',
    image: 'https://media.istockphoto.com/id/609726900/photo/athletic-shorts-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=k7aLXf6KTILdAagu9FtNDphuyclNAY90PfARUWsKq4c=',
    description: 'Lightweight shorts for running or workouts.'
  },
  {
    id: 'p16',
    name: 'Desk Lamp',
    price: 40.0,
    stock: 12,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1621177555452-bedbe4c28879?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzayUyMGxhbXB8ZW58MHx8MHx8fDA%3D',
    description: 'Adjustable desk lamp for reading or work.'
  },
  {
    id: 'p17',
    name: 'Leather Wallet',
    price: 50.0,
    stock: 11,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1620109176813-e91290f6c795?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGF0aGVyJTIwd2FsbGV0fGVufDB8fDB8fHww',
    description: 'Sleek wallet with multiple card slots.'
  },
  {
    id: 'p18',
    name: 'Fitness Tracker',
    price: 99.0,
    stock: 7,
    category: 'Electronics',
    image: 'https://plus.unsplash.com/premium_photo-1681433383783-661b519b154a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zml0bmVzcyUyMHRyYWNrZXJ8ZW58MHx8MHx8fDA%3D',
    description: 'Monitor your health and daily activity easily.'
  },
  {
    id: 'p19',
    name: 'Hiking Boots',
    price: 130.0,
    stock: 8,
    category: 'Footwear',
    image: 'https://images.unsplash.com/photo-1575987116913-e96e7d490b8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGlraW5nJTIwYm9vdHN8ZW58MHx8MHx8fDA%3D',
    description: 'Durable boots for hiking and outdoor adventures.'
  },
  {
    id: 'p20',
    name: 'Ceramic Vase',
    price: 60.0,
    stock: 10,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1526198049595-f32cde2a219d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNlcmFtaWMlMjB2YXNlfGVufDB8fDB8fHww',
    description: 'Decorative vase perfect for flowers or as a centerpiece.'
  }
];

export default products;
