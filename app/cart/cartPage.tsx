   "use client";

import CartCard from '@/components/cartCard'
import React from 'react'
import { useAppSelector } from '../store/hooks';
import Link from 'next/link';

const CartPage = () => {

    const cartArray = useAppSelector((state) => state.cart)
    const total = cartArray.reduce((total, arr) => {
        const discount = arr.discount ?? 0;
        return (total + (arr.price - (arr.price * discount) / 100) * arr.qty);
    }, 0);
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3'>
        {/* items  */}
        <div className='col-span-2'>
        <CartCard />
        </div>
        {/* summary  */}
        <div className='bg-myBlackHead/5 p-5 rounded-xl'>
          {/* heading */}
          <h2 className='scroll-m-20 text-lg font-semibold tracking-tight uppercase'>Order Summary</h2>
          {/* divider  */}
          <div className="divider mt-0 mb-1"></div>
          {/* pricing  */}
          <div className='text-sm font-medium tracking-tight text-myBlackPara'>
            {/* product price */}
            <div className='flex items-center justify-between capitalize'>
                <h2>Subtotal</h2>
                <h2>${total}</h2>
            </div>
            {/* delivery charges  */}
            <div className='flex items-center justify-between capitalize'>
                <h2>delivery charges</h2>
                <h2>TBD</h2>
            </div>
            {/* services charge  */}
            <div className='flex items-center justify-between capitalize'>
                <h2>sales charges</h2>
                <h2>TBD</h2>
            </div>
            {/* divider  */}
            <div className="divider mt-0 mb-1"></div>
                {/* total  */}
            <div className='flex items-center justify-between capitalize text-sm font-medium tracking-tight text-myBlackHead'>
                <h2>estimated total</h2>
                <h2>${total}</h2>
            </div>
            {/* divider  */}
            <div className="divider mt-0 mb-1"></div>
            {/* checkout button  */}
            <div className='flex items-center justify-center w-full'>
              <button className='bg-myBlackHead hover:bg-transparent duration-300 text-mywhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight hover:shadow-md py-2 px-3 rounded-xl'><Link href={'/checkout'}>Proceed to Checkout</Link></button>
            </div>
            {/* divider  */}
            <div className="divider mt-1 mb-1"></div>
            {/* note  */}
            <p className='text-xs font-semibold tracking-tight text-myBlackHead w-[97%] text-center italic'>
                { `*The delivery Charges and the sales tax will be calculated on checkout page`}
            </p>
          </div>
        </div>

     </div>
  )
}

export default CartPage
