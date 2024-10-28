"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function TopSelling() {
const products = [
    {
        "id": 1,
        "name": "Running Shoes",
        "price": 59.99,
        "slug": "running-shoes",
        "category": "shoes",
        "img": "/assets/Shoes/shoes.jpg",
        "description": "Lightweight running shoes designed for comfort and long-distance running."
      },
      {
        "id": 2,
        "name": "Basketball Shoes",
        "price": 89.99,
        "slug": "basketball-shoes",
        "category": "shoes",
        "img": "/assets/Shoes/shoes2.jpg",
        "description": "Durable basketball shoes providing excellent grip and ankle support."
      },
      {
        "id": 3,
        "name": "Running Shoes",
        "price": 59.99,
        "slug": "running-shoes1",
        "category": "shoes",
        "img": "/assets/Shoes/shoes3.jpg",
        "description": "Performance running shoes with breathable mesh upper and cushioned sole."
      },
      {
        "id": 13,
        "name": "Trail Runner Outfit",
        "price": 59.99,
        "slug": "trail-runner-outfit",
        "category": "men",
        "img": "/assets/Mens/men.jpg",
        "description": "Perfect for running enthusiasts, this outfit offers lightweight shorts, a breathable T-shirt, and moisture-wicking socks for ultimate comfort."
      },
      {
        "id": 14,
        "name": "Pro Basketball Kit",
        "price": 89.99,
        "slug": "pro-basketball-kit",
        "category": "men",
        "img": "/assets/Mens/men2.jpg",
        "description": "A complete basketball set featuring a performance jersey, breathable shorts, and cushioned socks to enhance your game on the court."
      },
      {
        "id": 15,
        "name": "City Runner Set",
        "price": 59.99,
        "slug": "city-runner-set",
        "category": "men",
        "img": "/assets/Mens/men3.jpg",
        "description": "Designed for urban runners, this set includes a sweat-resistant T-shirt and running tights, helping you stay fresh during morning jogs."
      },
      {
        "id": 25,
        "name": "Ultimate Running Gear",
        "price": 59.99,
        "slug": "ultimate-running-gear",
        "category": "Equipment",
        "img": "/assets/Equipment/eq.jpg",
        "description": "Get the most out of your runs with our ultimate running gear, featuring a high-performance GPS watch, hydration belt, and reflective accessories for safety."
      },
      {
        "id": 26,
        "name": "Pro Basketball Gear",
        "price": 89.99,
        "slug": "pro-basketball-gear",
        "category": "Equipment",
        "img": "/assets/Equipment/eq2.jpg",
        "description": "Elevate your game with professional basketball gear, including a premium ball, adjustable hoop, and practice cones for skill development."
      },
      {
        "id": 27,
        "name": "Lightweight Running Essentials",
        "price": 59.99,
        "slug": "lightweight-running-essentials",
        "category": "Equipment",
        "img": "/assets/Equipment/eq3.jpg",
        "description": "These lightweight essentials include a running belt, moisture-wicking headband, and grip socks to enhance your running experience."
      },
      {
        "id": 37,
        "name": "Essential Running Accessories",
        "price": 59.99,
        "slug": "essential-running-accessories",
        "category": "Accessories",
        "img": "/assets/Accessories/acc.jpg",
        "description": "Upgrade your run with essential accessories, including a lightweight running belt, moisture-wicking headband, and reflective arm bands for safety."
      },
      {
        "id": 38,
        "name": "Pro Basketball Accessories",
        "price": 89.99,
        "slug": "pro-basketball-accessories",
        "category": "Accessories",
        "img": "/assets/Accessories/acc2.jpg",
        "description": "Dominate the court with pro basketball accessories, featuring a durable backpack, sweat-wicking wristbands, and a versatile ball pump."
      },
      {
        "id": 39,
        "name": "Premium Running Gear",
        "price": 59.99,
        "slug": "premium-running-gear",
        "category": "Accessories",
        "img": "/assets/Accessories/acc3.jpg",
        "description": "Ensure comfort and performance with premium running gear, including cushioned insoles, anti-chafing cream, and a reflective vest."
      },
      {
        "id": 49,
        "name": "Women's Running Essentials",
        "price": 59.99,
        "slug": "womens-running-essentials",
        "category": "Women",
        "img": "/assets/Women/women.jpg",
        "description": "Stay comfortable and stylish during your runs with these essentials, featuring breathable tank tops, high-performance leggings, and lightweight running shoes."
      },
      {
        "id": 50,
        "name": "Women's Basketball Performance Set",
        "price": 89.99,
        "slug": "womens-basketball-performance-set",
        "category": "Women",
        "img": "/assets/Women/women2.jpg",
        "description": "Elevate your game with this performance set, which includes moisture-wicking jerseys, supportive sports bras, and durable shorts designed for agility."
      },
      {
        "id": 51,
        "name": "Women's Running Gear",
        "price": 59.99,
        "slug": "womens-running-gear",
        "category": "Women",
        "img": "/assets/Women/women3.jpg",
        "description": "Designed for optimal comfort, this running gear features padded running shoes, adjustable headbands, and lightweight windbreakers for unpredictable weather."
      }
]

const slideProducts = [...products, ...products.slice(0, 3)]; 

const [currentSlide, setCurrentSlide] = useState(0);
const totalSlides = slideProducts.length;

const nextSlide = () => {
  setCurrentSlide((prev) => (prev + 1) % totalSlides);
};

const prevSlide = () => {
  setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
};

// Auto slide functionality
useEffect(() => {
  const intervalId = setInterval(nextSlide, 3000); 
  return () => clearInterval(intervalId); 
}, []);

return (
  <section className="body-font">
    <div className="container px-5 py-24 mx-auto">
      <h2 className="text-3xl font-extrabold mb-6 text-center wordTheme italic">Top Selling Products</h2>
      <div className="relative">
        <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}>
          {slideProducts.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-full lg:w-1/3 md:w-1/2 p-4">
              <Link href={`/${product.slug}`} className="block relative h-96 md:h-72 rounded overflow-hidden">
                <Image
                  width={2000}
                  height={2000}
                  alt="ecommerce"
                  className="object-fill object-center w-full h-full block"
                  src={product.img}
                />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                <p className="mt-1">Price: ${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2">
          &#10094; 
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2">
          &#10095; 
        </button>
      </div>
    </div>
  </section>
);
}