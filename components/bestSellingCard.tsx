 "use client"
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { FaHeart } from 'react-icons/fa'
import Link from 'next/link'
import BestSellingCardAddToCart from './bestSellingCardAddToCart'

const BestSellingCard = ({ src, alt, title, description, price, catagory, slug, discount }: {
    src: string
    alt: string
    title: string
    description: string
    price: number
    catagory: string
    slug: string
    discount:number
}) => {
    return (
        <div>
            {/* Best Selling Products starts from here */}
            <div className="max-w-[350px] h-[35rem] p-4 mx-auto rounded-xl shadow-md relative group">
                <Link href={`/${catagory}/${slug}`}>
                {/* Image div  */}
                <div className='block relative h-[20rem] rounded overflow-hidden '>
                    <Image
                        src={src}
                        alt={alt}
                        height={400}
                        width={400}
                        className='rounded-xl'
                    />
                </div>
                {/* Typography div  */}
                <div className="mt-4">
                    {title && (
                     <h2 className="scroll-m-20 border-b pb-2 text-xl text-myBlackHead font-semibold tracking-tight first:mt-0 line-clamp-1">{title}</h2>
                    )}
                    {description && (
                    <p className="scroll-m-20 text-sm text-myBlackPara font-semibold tracking-tight first:mt-0 line-clamp-1">{description}</p>
                    )}
                    {price && (
                        <div className='flex items-center gap-3'>
                            <p className={`mt-2 scroll-m-20 text-base text-myBlackHead font-semibold tracking-tight line-clamp-1 ${discount>0 && "line-through decoration-2 decoration-myOrange/70" }`}>${price}</p>
                            {/* discounted value  */}
                            {discount>0 && (
                            <p className="mt-2 scroll-m-20 text-base text-myBlackHead font-semibold tracking-tight line-clamp-1">${price- (price*discount)/100}</p>
                            )}
                        </div>
                )}   
                </div>
                {/* Button div  */}
                </Link>
                <div>
                    <div className='absolute bottom-2 right-2'>
                        <BestSellingCardAddToCart slug={slug}/>
                    </div>
                    <Link href={`/${catagory}/${slug}`}>
                    <Button className='group bg-myBlackHead hover:bg-transparent text-mywhite hover:text-myBlackHead border border-myBlackHead duration-300 scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-2 left-2'>
                        <FaHeart className='mr-2 h-4 w-4 group-hover:text-myOrange duration-300 ' />
                        View Details
                    </Button>
                    </Link>
                      { discount>0 && (
                        <div className="scroll-m-20 text-sm font-semibold tracking-tight text-mywhite bg-myOrange absolute top-2 left-2 rounded-l-xl p-1 w-[87px] text-center uppercase myDiscount">
                            {`${discount}% off`}
                        </div>
                      )}
                </div>
            </div>
        </div>
    )
}

export default BestSellingCard
