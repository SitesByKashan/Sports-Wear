"use client";
import { useEffect, useRef, useState } from "react";

interface HeroSectionProps {
  images: string[];
  title: string;
  paragraph: string;
}

export default function HeroSection({ images, title, paragraph }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);
  const slideCount = images.length;

  useEffect(() => {
    if (slideCount > 1) {
      const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
      };

      slideInterval.current = setInterval(goToNextSlide, 3000);

      return () => {
        if (slideInterval.current) {
          clearInterval(slideInterval.current);
        }
      };
    }
  }, [slideCount]);

  return (
    <main className="heroSection relative flex min-h-screen flex-col items-center justify-center p-0">
      <div
        className="slider absolute top-0 left-0 w-full h-full flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="slide w-full h-full flex items-center justify-center relative"
          >
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            <div className="overlay"></div>
          </div>
        ))}
      </div>

      <div className="container overlay">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[750px]">
          <div className="text-gray-300 mt-[100px] md:mt-0 p-4 space-y-20">
            <h1 className="text-4xl font-semibold leading-tight ml-14">-{title}</h1>
            <div className="relative">
              <div className="relative z-10 space-y-3">
                <p className="ml-10 space-x-3 font-medium text-gray-100 lg:tracking-widest lg:text-2xl mb-14">
                  {paragraph}
                </p>
              </div>
              <div className="absolute -top-6 -left-10 w-[410px] lg:h-[260px] bg-gray-950"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
