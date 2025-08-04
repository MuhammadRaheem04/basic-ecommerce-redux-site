
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Catagory = () => {
    return (
        <div className='mb-[100px] mt-[100px]'>
            <div className="text-center mb-10">
                {/* Heading  */}
                <h1 className="text-myBlackHead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
                    Our Catagories
                </h1>
                <div className="flex mt-2 justify-center">
                    <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
                </div>
            </div>
            {/* Catagories starts from here */}
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5 lg:grid-cols-4'>
                {/* catagory 01 */}
                <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative bg-gray-200'>
                    <Link href={'/tops'}>
                    <Image
                        src={'/images/top.webp'}
                        alt='tops'
                        width={350}
                        height={350}
                        className='rounded-xl duration-500 group-hover:scale-125 h-[350px] w-[350px]'
                    />
                    <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-mywhite text-center w-full'>
                        <h1 className='uppercase'>Tops</h1>
                    </div>
                    <div className='block lg:hidden absolute bottom-16 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-mywhite text-center w-full'>
                        <h1 className='uppercase'>Tops</h1>
                    </div>
                    </Link>
                </div>
            {/* catagory 02 */}
            <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
                    <Link href={'/pants'}>
                    <Image
                        src={'/images/pants.jpg'}
                        alt='tops'
                        width={350}
                        height={350}
                        className='rounded-xl duration-500 group-hover:scale-125 w-[350px] h-[350px]'
                    />
                    <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-mywhite text-center w-full'>
                        <h1 className='uppercase'>Pants</h1>
                    </div>
                    <div className='block lg:hidden absolute bottom-16 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-mywhite text-center w-full'>
                        <h1 className='uppercase'>pants</h1>
                    </div>
                    </Link>
                </div>
            {/* catagory 03 */}
            <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
                    <Link href={'/accessories'}>
                    <Image
                        src={'/images/accessories.avif'}
                        alt='Accessories'
                        width={350}
                        height={350}
                        className='rounded-xl duration-500 group-hover:scale-125 w-[350px] h-[350px]'
                    />
                    <div className='hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-mywhite text-center w-full'>
                        <h1 className='uppercase'>Jewelry</h1>
                    </div>
                    <div className='block lg:hidden absolute bottom-16 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-mywhite text-center w-full'>
                        <h1 className='uppercase'>Jewelry</h1>
                    </div>
                    </Link>
                </div>
            {/* catagory 04 */}
            <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
                    <Link href={'/shoes'}>
                    <Image
                        src={'/images/shoes.avif'}
                        alt='shoes'
                        width={350}
                        height={350}
                        className='rounded-xl duration-500 group-hover:scale-125 w-[350px] h-[350px]'
                    />
                    <div className=' hidden lg:block absolute -bottom-24 group-hover:bottom-2 duration-500 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-mywhite text-center w-full'>
                        <h1 className='uppercase'>shoes</h1>
                    </div>
                    <div className='block lg:hidden absolute bottom-16 duration-500 z-[100] scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-mywhite text-center w-full'>
                        <h1 className='uppercase'>shoes</h1>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Catagory
