
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div>
      <section className="body-font mb-[100px] mt-[100px]">
  <div className="container px-5 mx-auto">
    <div className="text-center mb-10">
      <h1 className="text-myBlackHead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
        Our Services
      </h1>
      <div className="flex mt-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">

      {/* delivery  */}
      <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0 ">
         <Image 
         alt="delivery"
         src="/images/delivery truck.jpg"
         height={100}
         width={100}
         className="w-15 h-15 rounded-full"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-myBlackHead scroll-m-20 text-lg font-bold tracking-tight lg:text-xl mb-3 group-hover:text-myOrange duration-300">
            Free Delivery
          </h2>
          <p className="scroll-m-20 font-semibold tracking-tight first:mt-0 text-base text-myBlackPara group-hover:text-myBlackPara/80 duration-300 line-clamp-2">
            Free delivery on orders above $1000 
          </p>
        </div>
      </div>

       {/* 24/7 Services */}
       <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
         <Image 
         alt="delivery"
         src="/images/customer-service.png"
         height={100}
         width={100}
         className="w-15 h-15 rounded"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-myBlackHead scroll-m-20 text-lg font-bold tracking-tight lg:text-xl mb-3 group-hover:text-myOrange duration-300">
          24/7 Customer Service
          </h2>
          <p className="scroll-m-20 font-semibold tracking-tight first:mt-0 text-base text-myBlackPara group-hover:text-myBlackPara/80 duration-300 line-clamp-2">
            For questions and inquiries, feel free to contact us anytime 
          </p>
        </div>
      </div>

       {/* money back */}
       <div className="group p-4 mx-auto lg:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
         <Image 
         alt="delivery"
         src="/images/money.png"
         height={100}
         width={100}
         className="w-15 h-15 rounded"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-myBlackHead scroll-m-20 text-lg font-bold tracking-tight lg:text-xl mb-3 group-hover:text-myOrange duration-300">
            Money Back Guarantee
          </h2>
          <p className="scroll-m-20 font-semibold tracking-tight first:mt-0 text-base text-myBlackPara group-hover:text-myBlackPara/80 duration-300 line-clamp-2">
            If you are not satisfied with our product, we offer a money back guarantee
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

export default Services
