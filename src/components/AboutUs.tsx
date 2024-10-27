import Image from "next/image";

export default function AboutUs(){
    return(
        <section className="body-font font-serif">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap w-full">
      <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full theme inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm secondLetter mb-1 tracking-wider">Quality Materials: </h2>
            <p className="leading-relaxed text-black">We believe in providing our customers with only the best. Our sportswear is crafted from high-performance fabrics that are breathable, durable, and designed to withstand the rigors of your active lifestyle.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full theme inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm secondLetter mb-1 tracking-wider">Innovative Design:</h2>
            <p className="leading-relaxed text-black"> Our team of designers combines style with functionality. Each piece of sportswear is meticulously designed to enhance your performance while ensuring you look great.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full theme inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm secondLetter mb-1 tracking-wider">Sustainability:</h2>
            <p className="leading-relaxed text-black"> We are committed to minimizing our environmental impact. Our sportswear is made from sustainable materials, and we continuously seek eco-friendly practices in our production processes.</p>
          </div>
        </div>
        
        <div className="flex relative pb-12">
          <div className="flex-shrink-0 w-10 h-10 rounded-full theme inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm secondLetter mb-1 tracking-wider">Perfect Fit for Everyone:</h2>
            <p className="leading-relaxed text-black"> Our inclusive sizing ensures that everyone can find their perfect fit. We understand that comfort and confidence come from wearing clothing that fits well.</p>
          </div>
        </div>
      </div>
      <Image className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src={'/assets/banner.jpg'} width={3000} height={3000}  alt="step"/>
    </div>
  </div>
</section>
    )
}