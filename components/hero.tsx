
import React from 'react'
import { Button } from './ui/button'
import { AiFillShopping } from 'react-icons/ai'

const Hero = () => {
  return (
    <div>
      <div className="mb-[100px]">
      <div
  className="hero min-h-[80vh] custom-bg-img bg-fixed bg-center bg-no-repeat">
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-mywhite">Futuristic <span className="text-myOrange">Clothes</span></h1>
      <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight text-mywhite">
        The best clothes you can find in the market. Made with the best
        materials and the latest technologies.
      </p>
      <Button className=" text-mywhite outline outline-offset-2 group rounded-2xl hover:outline-myOrange text-xl">
      <AiFillShopping className="mr-2 !w-6 !h-6 group-hover:text-myOrange group-hover:animate-bounce"/> Shop now
    </Button>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}

export default Hero
