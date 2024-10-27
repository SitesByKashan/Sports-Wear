"use Client"
import Image from "next/image"
import Link from "next/link"


export default function WhyChoseUs(){
    return(
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-5xl text-3xl mb-4 font-serif "><span className="firstLetter">W</span>
      <span className="secondLetter">hy</span> <span className="firstLetter">C</span>
      <span className="secondLetter">hoose</span> <span className="firstLetter">U</span> 
       <span className="secondLetter">s</span> <span className="firstLetter">?</span>
      </h1>
      <p className="mb-8 leading-relaxed">
  At <b className="wordTheme">SPORTS WEAR</b>, we combine quality, style, and sustainability in every piece of sportswear we create. Our products are crafted from high-performance materials designed for comfort and durability, ensuring you look and feel great during every workout. With an inclusive range of sizes and innovative designs that enhance performance, we cater to all fitness enthusiasts. Our commitment to eco-friendly practices means you can feel good about your purchase, knowing you&apos;re supporting a brand that cares for both you and the planet. Choose us to elevate your fitness journey with gear that empowers and inspires.
</p>

      <div className="flex justify-center">
        <Link href={'/about'}>
        <button className="inline-flex button py-2 px-6 text-lg">Read More</button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
      width={2000}
      height={2000} 
      className="object-fill object-center rounded" 
      alt="hero" 
      src="/assets/banner3.jpg"
      />
    </div>
  </div>
</section>
    )
}