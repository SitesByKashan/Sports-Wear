"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  slug: string;
  category: string;
  img: string;
}
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  color: string;
  size: string;
}

const ProductDetailPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [color, setColor] = useState<string>('');
  const [size, setSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch('/products.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Product[] = await response.json();
        const foundProduct = data.find(product => product.slug === slug);
        if (!foundProduct) {
          throw new Error('Product not found');
        }
        setProduct(foundProduct);
      } catch (error) {
        console.error('Failed to fetch product details:', error);
        setError('Failed to fetch product details. Please try again later.');
      }
    };

    if (slug) {
      fetchProductDetails();
    }
  }, [slug]);

  const handleAddToCart = () => {
    if (product) {
      const cartItem: CartItem = {
        id: product.id.toString(),
        name: product.name,
        price: product.price,
        quantity,
        color,
        size,
      };

      const existingCart: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
      const existingItemIndex = existingCart.findIndex(
        (item: CartItem) =>
          item.name === cartItem.name && item.color === cartItem.color && item.size === cartItem.size
      );

      if (existingItemIndex > -1) {
        existingCart[existingItemIndex].quantity += cartItem.quantity;
      } else {
        existingCart.push(cartItem);
      }
      localStorage.setItem('cart', JSON.stringify(existingCart));

      toast.success('Item added to cart!', { position: 'top-right', autoClose: 2000 });
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    }
  };

  const handleColorChange = (selectedColor: string) => {
    setColor(selectedColor);
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(event.target.value);
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ToastContainer /> {/* Add ToastContainer to render toasts */}
      <section className="text-gray-600 body-font overflow-hidden mt-20">
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              width={4000}
              height={4000}
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-[500px] h-96 object-fill object-center rounded"
              src={product.img}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-16 mt-6 lg:mt-0">
              <h2 className="text-sm title-font wordTheme tracking-widest">SPORTS WEAR</h2>
              <h1 className="wordTheme text-3xl title-font font-medium pb-3">{product.name}</h1>
              <p className="leading-relaxed">{product.description}</p>
              <div className="flex flex-wrap md:flex-nowrap mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5 gap-4">
  {/* Color Options */}
  <div className="flex items-center">
    <span className="mr-3 text-sm md:text-base">Color</span>
    <button
      className={`border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none ${
        color === '' ? 'bg-white' : ''
      }`}
      onClick={() => handleColorChange('')}>
      <span
        className="block w-full h-full"
        style={{ backgroundColor: 'transparent' }}></span>
    </button>
    <button
      className={`border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none ${
        color === 'gray' ? 'ring-2 ring-indigo-500' : ''
      }`}
      onClick={() => handleColorChange('gray')}
    />
    <button
      className={`border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none ${
        color === 'blue' ? 'ring-2 ring-indigo-500' : ''
      }`}
      onClick={() => handleColorChange('blue')}
    />
  </div>

  {/* Quantity Selector */}
  <div className="flex items-center ml-6 md:ml-0 border border-gray-300 rounded">
    <button
      className="border-0 py-2 px-4 focus:outline-none"
      onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
      -
    </button>
    <input
      type="number"
      className="border-0 text-center w-12 focus:outline-none"
      value={quantity}
      onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
      min="1"
    />
    <button
      className="border-0 py-2 px-4 focus:outline-none"
      onClick={() => setQuantity(quantity + 1)}>
      +
    </button>
  </div>

  {/* Size Selector */}
  <div className="flex items-center">
    <span className="mr-3 text-sm md:text-base">Size</span>
    <div className="relative">
      <select
        className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-sm md:text-base pl-3 pr-10"
        onChange={handleSizeChange}
        value={size}>
        <option value="">Select Size</option>
        <option value="SM">SM</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
    </div>
  </div>
</div>

              <div className="flex flex-col md:flex-row items-start">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Price: ${product.price.toFixed(2)}
                </span>
                <div className="flex flex-col md:flex-row w-full md:w-auto md:ml-auto space-y-2 md:space-y-0 md:space-x-2 mt-2 md:mt-0">
                  
                  <button
                    className="button w-full md:w-auto border-0 py-2 px-6 focus:outline-none text-center "
                    onClick={handleAddToCart}>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
