import Gallery from '@/components/Gallery';
import HeroSection from '@/components/HeroSection';
import Reviews from '@/components/Reviews';
import Stats from '@/components/Stats';
import TopSelling from '@/components/TopSelling';
import WhyChoseUs from '@/components/WhyChooseUs';


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
     <WhyChoseUs/>
     <TopSelling/>
     <Gallery/>
     <Stats/>
      <Reviews/>
    </>
  );
};

export default HomePage;
