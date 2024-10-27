import React from 'react'
import Ourstory from '@/components/OurStory'
import HeroSection from '@/components/HeroSection'
import AboutUs from '@/components/AboutUs';
import OurVission from '@/components/OurVission';

export default function About() {
  const title = "ABOUT US";
  const paragraph =
    "Explore SportWear’s top-tier Sports Shoes, built for comfort, support, and durability—perfect for running, training, and competition!";
  return (
    <div>
       <HeroSection
        images={["/assets/Shoes/shoes4.jpg"]}
        title={title} paragraph={paragraph}
      />
      <AboutUs/>
      <OurVission/>
      <Ourstory/>
    </div>
  )
}
