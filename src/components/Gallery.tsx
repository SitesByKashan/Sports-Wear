import React from 'react';
import Image from 'next/image';

export default function Gallery() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* Heading */}
        <div className="w-full mb-12">
          <h1 className="text-4xl font-bold title-font text-center mb-10 tracking-wider wordTheme">
            OUR GALLERY
          </h1>
        </div>

        {/* Image Grid */}
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Image
                width={2000}
                height={2000}
                alt="gallery"
                className="w-full object-cover h-full rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
                src="/assets/Equipment/eq2.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                width={2000}
                height={2000}
                alt="gallery"
                className="w-full object-cover h-full rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
                src="/assets/Accessories/acc6.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                width={2000}
                height={2000}
                alt="gallery"
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
                src="/assets/Mens/men11.jpg"
              />
            </div>
          </div>

          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image
                width={3000}
                height={3000}
                alt="gallery"
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
                src="/assets/Women/women2.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                width={2000}
                height={2000}
                alt="gallery"
                className="w-full object-cover h-full rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
                src="/assets/Shoes/shoes10.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                width={2000}
                height={2000}
                alt="gallery"
                className="w-full object-cover h-full rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
                src="/assets/banner.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
