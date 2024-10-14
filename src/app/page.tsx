import HeroSection from '@/components/HeroSection';
import Reviews from '@/components/Reviews';


const HomePage = () => {
  const images = [
    "/assets/banner.jpg",
    "/assets/banner2.jpg",
    "/assets/banner3.jpg",
     "/assets/banner4.jpg",
    "/assets/banner5.jpg"
  ];
  const title = "SPORTS WEAR";
  const paragraph =
    "Welcome to SportWear, your go-to for stylish Men's and Women's Outfits, trendy Accessories, high-performance Shoes, and top-quality Equipment!";
  return (
    <>
     <HeroSection images={images} title={title} paragraph={paragraph} />
      <Reviews/>
    </>
  );
};

export default HomePage;
