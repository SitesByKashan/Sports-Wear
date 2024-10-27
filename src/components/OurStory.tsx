import React from 'react'
import Image from 'next/image'

const Ourstory = () => {
  return (
    <>
    <section className='bg-white '>

<div className="items-center max-w-screen-xl gap-16 px-4 py-8 mx-auto lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg ">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold wordTheme">We  reinvent the wheel</h2>
            <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">

        <Image
        width={2000}
        height={2000}
      src={"/assets/banner.jpg"}
       alt="office content 1"
      className="w-full rounded-lg"
    />
    <Image
     width={2000}
     height={2000}
      src={"/assets/banner2.jpg"}
       alt="office content 2"
      className="w-full mt-4 rounded-lg lg:mt-10"
    />
            
        </div>
    </div>

    </section>
    
    </>
  )
}

export default Ourstory
