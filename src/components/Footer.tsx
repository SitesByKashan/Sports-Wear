import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">

              <span className="ml-3 text-3xl wordTheme font-extrabold italic">SPORTS WEAR</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">Gear Up for Greatness – Your Ultimate Sportswear Destination!</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium wordTheme tracking-widest text-sm mb-3">PAGES</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href={'/'} className="text-gray-600 hover:text-lg">Home</Link>
                </li>
                <li>
                  <Link href={'/about'} className="text-gray-600 hover:text-lg">About Us</Link>
                </li>
                <li>
                  <Link href={'/contact'} className="text-gray-600 hover:text-lg">Contact Us</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium wordTheme tracking-widest text-sm mb-3">OUR SHOPES</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href={'/menOutfits'} className="text-gray-600 hover:text-lg">Men Outfits</Link>
                </li>
                <li>
                  <Link href={'/womenOutfits'} className="text-gray-600 hover:text-lg">Women Outfits</Link>
                </li>
                <li>
                  <Link href={'/shoes'} className="text-gray-600 hover:text-lg">Shoes</Link>
                </li>
                <li>
                  <Link href={'/equipment'} className="text-gray-600 hover:text-lg">Equipments</Link>
                </li>
                <li>
                  <Link href={'/accessories'} className="text-gray-600 hover:text-lg">Accessories</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium wordTheme tracking-widest text-sm mb-3">FOLLOW ON SOCIAL MEDIA</h2>
              <nav className="list-none mb-10">
                <li className="flex items-center md:justify-start justify-center mb-2">
                  <Link href="https://www.linkedin.com/in/kashan-malik-47374422a/" className="text-gray-600 flex items-center hover:text-lg">
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                    Linkedin
                  </Link>
                </li>
                <li className="flex items-center md:justify-start justify-center mb-2">
                  <Link href="https://www.instagram.com/sites_by_kashan/" className="text-gray-600 flex items-center hover:text-lg">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                    Instagram
                  </Link>
                </li>
                <li className="flex items-center md:justify-start justify-center mb-2">
                  <Link href="https://www.facebook.com/kashanmalik.kashanmalik.9" className="text-gray-600 flex items-center hover:text-lg">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                    Facebook
                  </Link>
                </li>
                <li className="flex items-center md:justify-start justify-center mb-2">
                  <Link href="https://github.com/SitesByKashan" className="text-gray-600 flex items-center hover:text-lg">
                    <svg fill="currentColor" viewBox="0 0 16 16" className="w-5 h-5 mr-2">
                      <path d="M8 .2a8 8 0 00-2.53 15.6c.4.07.55-.17.55-.39 0-.18-.01-.76-.01-1.38-2.25.49-2.73-1.09-2.73-1.09-.37-.93-.9-1.18-.9-1.18-.74-.5.06-.49.06-.49.82.06 1.25.84 1.25.84.73 1.25 1.91.89 2.37.68.07-.52.28-.89.51-1.09-1.77-.2-3.63-.89-3.63-3.95 0-.87.31-1.58.82-2.14-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.84a7.66 7.66 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.06 2.2-.84 2.2-.84.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.14 0 3.07-1.86 3.75-3.63 3.95.29.25.54.75.54 1.5 0 1.09-.01 1.97-.01 2.23 0 .22.15.47.55.39A8 8 0 008 .2z"></path>
                    </svg>
                    Github
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="theme bg-opacity-90 text-white">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className=" text-sm text-center sm:text-left">© 2024 SPORTS WEAR —
              <Link href="https://sitesbykashan.netlify.app/" rel="noopener noreferrer" className=" ml-1" target="_blank">@sitesbykashan</Link>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <Link href={"https://www.facebook.com/kashanmalik.kashanmalik.9"}>
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </Link>
              <Link href={"https://github.com/SitesByKashan"} className="ml-3">
                <svg fill="currentColor" viewBox="0 0 16 16" className="w-5 h-5">
                  <path d="M8 .2a8 8 0 00-2.53 15.6c.4.07.55-.17.55-.39 0-.18-.01-.76-.01-1.38-2.25.49-2.73-1.09-2.73-1.09-.37-.93-.9-1.18-.9-1.18-.74-.5.06-.49.06-.49.82.06 1.25.84 1.25.84.73 1.25 1.91.89 2.37.68.07-.52.28-.89.51-1.09-1.77-.2-3.63-.89-3.63-3.95 0-.87.31-1.58.82-2.14-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.84a7.66 7.66 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.06 2.2-.84 2.2-.84.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.14 0 3.07-1.86 3.75-3.63 3.95.29.25.54.75.54 1.5 0 1.09-.01 1.97-.01 2.23 0 .22.15.47.55.39A8 8 0 008 .2z"></path>
                </svg>

              </Link>
              <Link href={"https://www.instagram.com/sites_by_kashan/"} className="ml-3 ">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/in/kashan-malik-47374422a/" className="ml-3 ">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}
