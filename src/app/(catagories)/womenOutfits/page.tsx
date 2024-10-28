"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  slug: string;
  category: string;
  img: string;
}

const WomenOutfits = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products.json'); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Product[] = await response.json();
        const shoes = data.filter(product => product.category === 'Women');
        setProducts(shoes);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setError("Failed to fetch products. Please try again later.");
      }
    };

    fetchProducts();
  }, []);

  const title = "WOMEN OUTFITS";
  const paragraph =
    "Explore SportWear’s top-tier Women’s Outfits, crafted for style, comfort, & performance—perfect for running, training, & competition!";
  return (
    <div>
      <HeroSection
        images={["/assets/Women/women.jpg"]}
        title={title} paragraph={paragraph}
      />
      {error && <p>{error}</p>}
      <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
    {products.map(product => (
      <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
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
  </div>
</section>
      </div>
    </div>
  );
};

export default WomenOutfits;
