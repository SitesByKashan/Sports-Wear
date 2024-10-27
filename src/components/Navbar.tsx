"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cart from "./Cart"; // Import the Cart component

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setCartOpen(false);
    setCategoriesOpen(false);
  }, [pathname]);

  const pathsWithTransparentBg = ['/', '/about', '/contact', '/shoes', '/accessories', '/equipment', '/menOutfits', '/womenOutfits'];
  const navbarBgColor = pathsWithTransparentBg.includes(pathname) 
    ? (scrolled ? 'theme' : 'bg-transparent') 
    : 'theme';

  return (
    <header
      className={`navbar z-50 transition-colors duration-300 ${navbarBgColor} ${scrolled ? 'text-white shadow-md' : 'text-white'}`}
    >
      <div className="w-full flex items-center justify-between p-5">
        {/* Menu Button on the left (visible on small screens) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <a className="flex title-font font-medium items-center mx-auto md:mx-0 whitespace-nowrap">
          <span className="ml-3 text-xl">SPORTS WEAR</span>
        </a>

        {/* Cart Icon on the right */}
        <div className="md:hidden">
          <button
            onClick={() => setCartOpen(!cartOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 5h12.8L17 13H7z" />
            </svg>
          </button>
        </div>

        {/* Navigation Links for Large Screens */}
        <div className="hidden md:flex justify-center items-center w-full space-x-5 text-base">
          <Link href={'/'} className="hover:text-gray-900">Home</Link>

          {/* Categories Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              className="hover:text-gray-900 flex items-center"
            >
              Categories
              <svg
                className={`ml-1 w-5 h-5 transition-transform duration-300 ${categoriesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Dropdown Menu */}
            <div className={`absolute left-0 mt-2 w-[600px] bg-white shadow-lg rounded-md py-2 z-50 ${categoriesOpen ? 'block' : 'hidden'}`}>
              <div className="grid grid-cols-2 gap-4 p-4">
                {/* First Column with 3 Options */}
                <div>
                  <Link href="/menOutfits" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Men Outfits
                    <p className="text-sm text-gray-500">Latest styles for men including jackets, shirts, and sportswear.</p>
                  </Link>
                  <Link href="/womenOutfits" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Women Outfits
                    <p className="text-sm text-gray-500">Elegant and trendy outfits for women in all seasons.</p>
                  </Link>
                  <Link href="/accessories" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Accessories
                    <p className="text-sm text-gray-500">Stylish accessories to complete your look.</p>
                  </Link>
                </div>

                {/* Second Column with 2 Options */}
                <div>
                  <Link href="/equipment" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Equipment
                    <p className="text-sm text-gray-500">High-quality sports equipment for all levels.</p>
                  </Link>
                  <Link href="/shoes" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Shoes
                    <p className="text-sm text-gray-500">Sports shoes for comfort and performance.</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link href={'/about'} className="hover:text-gray-900">About Us</Link>
          <Link href={'/contact'} className="hover:text-gray-900">Contact Us</Link>
        </div>

        {/* Cart Icon for Large Screens */}
        <div className="hidden md:block">
          <button onClick={() => setCartOpen(!cartOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 5h12.8L17 13H7z" />
            </svg>
          </button>
        </div>
      </div>
      

      {/* Sliding Menu Panel for Small Screens */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full theme shadow-lg transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:hidden z-40`}
      >
        <div className="p-5 flex justify-end">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center p-5 space-y-4">
          <Link href={'/'} className="hover:text-gray-900">Home</Link>
          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              className="hover:text-gray-900 flex items-center"
            >
              Categories
              <svg
                className={`ml-1 w-5 h-5 transition-transform duration-300 ${categoriesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Dropdown Menu */}
            <div className={`absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-md py-2 z-50 ${categoriesOpen ? 'block' : 'hidden'}`}>
              <div className="flex flex-col p-4">
                <Link href="/menOutfits" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Men Outfits</Link>
                <Link href="/womenOutfits" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Women Outfits</Link>
                <Link href="/accessories" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Accessories</Link>
                <Link href="/equipment" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Equipment</Link>
                <Link href="/shoes" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Shoes</Link>
              </div>
            </div>
          </div>
          <Link href={'/about'} className="hover:text-gray-900">About Us</Link>
          <Link href={'/contact'} className="hover:text-gray-900">Contact Us</Link>
        </nav>
      </div>
       {/* Cart Component */}
       <Cart  isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
}
