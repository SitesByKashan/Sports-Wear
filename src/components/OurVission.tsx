import Image from 'next/image';

const OurVission = () => {
  return (
    <>
  
      <section className="max-w-screen-xl py-16 mx-auto px-7 sm:px-14" id="projects">
        <div className="flex items-center justify-center gap-12 pb-12">
          <div className="flex-1 hidden h-px bg-slate-50 sm:block"></div>
          <h2 className="text-4xl font-bold text-center wordTheme">Our Vission</h2>
          <div className="flex-1 hidden h-px bg-slate-50 sm:block"></div>
        </div>
        <div>
          <div className="flex flex-col mt-20 sm:flex-row sm:gap-12">

            {/* Left side */}
            <div className="mockup-window border border-base-300 sm:w-1/2 h-[300px] order-2 sm:order-none">
              <div className="featured-project-img-01-div cursor-all-scroll overflow-scroll h-[300px] rounded object-fill">
                <div className="transition-all duration-500 min-h-[50px] featured-project-img-01">
                  <Image
                   width={2000}
                   height={2000}
                    src={"/assets/banner5.jpg"}
                    alt="mission"
                    className="object-fill object-center rounded"
                  />
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="sm:w-1/2 h-[300px] flex flex-col justify-center order-1 sm:order-none">
            <p className="theme text-3xl tracking-wide pl-8 pr-2 py-4 md:mb-2 mb-20 rounded shadow-sm sm:relative sm:right-[10%] lg:right-1/4 text-white">
            Our vision is to empower athletes and fitness enthusiasts with innovative sportswear that enhances performance, boosts confidence, and promotes an active lifestyle. 
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurVission;
