
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-5 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="scroll-m-20 text-lg font-semibold tracking-tight text-myBlackHead mb-3">
          Company
        </h2>
        <nav className="list-none mb-10">
          <li>
           <Link href={"/"}
           className='text-base font-semibold tracking-tight text-myBlackPara hover:text-myBlackPara/70'
           >Home</Link>
          </li>
          <li>
           <Link href={"/"}
           className='text-base font-semibold tracking-tight text-myBlackPara hover:text-myBlackPara/70'
           >About Us</Link>
          </li>
          <li>
           <Link href={"/"}
           className='text-base font-semibold tracking-tight text-myBlackPara hover:text-myBlackPara/70'
           >Contact Us</Link>
          </li> 
        </nav>
      </div>

      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="scroll-m-20 text-lg font-semibold tracking-tight text-myBlackHead mb-3">
          Services
        </h2>
        <nav className="list-none mb-10">
        <li>
           <Link href={"#"}
           className='text-base font-semibold tracking-tight text-myBlackPara hover:text-myBlackPara/70'
           >Branding</Link>
          </li> 
        <li>
           <Link href={"#"}
           className='text-base font-semibold tracking-tight text-myBlackPara hover:text-myBlackPara/70'
           >Design</Link>
          </li> 
        <li>
           <Link href={"#"}
           className='text-base font-semibold tracking-tight text-myBlackPara hover:text-myBlackPara/70'
           >Advertisement</Link>
          </li> 
        <li>
           <Link href={"#"}
           className='text-base font-semibold tracking-tight text-myBlackPara hover:text-myBlackPara/70'
           >Services</Link>
          </li> 
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="scroll-m-20 text-lg font-semibold tracking-tight text-myBlackHead mb-3">
          Legal
        </h2>
        <nav className="list-none mb-10">
        <li>
           <Link href={"#"}
           className='text-base font-semibold tracking-tight text-myBlackPara hover:text-myBlackPara/70'
           >Privacy Policy</Link>
          </li>
        <li>
           <Link href={"#"}
           className='text-base font-semibold tracking-tight text-myBlackPara hover:text-myBlackPara/70'
           >Terms & Conditions</Link>
          </li>
        <li>
           <Link href={"#"}
           className='text-base font-semibold tracking-tight text-myBlackPara hover:text-myBlackPara/70'
           >Return Policy</Link>
          </li>
        <li>
           <Link href={"#"}
           className='text-base font-semibold tracking-tight text-myBlackPara hover:text-myBlackPara/70'
           >Cookie Policy</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="scroll-m-20 text-lg font-semibold tracking-tight text-myBlackHead mb-3">
          Subscribe
        </h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label
              htmlFor="footer-field"
              className="text-sm font-semibold tracking-tight text-myBlackPara hover:text-myBlackPara/70"
            >
              Your Email Here
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-black focus:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="mt-4 mb-3 lg:mb-0 lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-mywhite bg-myBlackPara border-0 py-2 px-6 focus:outline-none hover:bg-myBlackHead rounded">
           Get Notified
          </button>
        </div>
        <p className="text-sm mt-2 md:text-left text-center font-semibold text-myBlackPara hover:text-myBlackPara/70">
          please provide your email to get notified 
          <br className="lg:block hidden" />
          about new arrivals, discounts and offers
        </p>
      </div>
    </div>
  </div>
  <div>
    <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <Image src={"/images/logo1.avif"} 
           alt='logo' 
           width={100} 
           height={100}
           className='rounded-full'
           />
       
      </a>
      <p className="text-sm sm:ml-6 sm:mt-0 mt-4 font-semibold tracking-tight text-myBlackPara hover:text-myBlackPara/70">
        © 2025—
        <a
          href="https://twitter.com/knyttneve"
          rel="noopener noreferrer"
          className="font-semibold tracking-tight text-myBlackPara hover:text-myBlackPara/70 ml-1"
          target="_blank"
        >
         Shopping Women
        </a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a className="text-gray-500">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
