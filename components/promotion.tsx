
import React from 'react'

const Promotion = () => {
    return (
        <div className='mb-[100px] mt-[100px]'>
            <div className="text-center mb-10">
                <h1 className="text-myBlackHead scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
                    Our Promotions
                </h1>
                <div className="flex mt-2 justify-center">
                    <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
                </div>
            </div>
            {/* here is the promotion */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* child 01 */}
                <div
                    className="hero h-[25rem] promo-1 rounded-xl"
                >
                    <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="scroll-m-20 text-4xl tracking-tight font-bold uppercase text-mywhite">Get up to <span className='text-myOrange'>60%</span> off</h1>
                            <p className="scroll-m-20 text-base font-medium tracking-tight text-mywhite mt-3">
                                Flash sale, Limited time offer. Get up to 60% off selected items.
                            </p>
                        </div>
                    </div>
                </div>
                {/* child 02 */}
                <div
                    className="hero h-[25rem] promo-2 rounded-xl"
                >
                    <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="scroll-m-20 text-4xl tracking-tight font-bold uppercase text-mywhite">Get up to <span className='text-myOrange'>30%</span> off</h1>
                            <p className="scroll-m-20 text-base font-medium tracking-tight text-mywhite mt-3">
                                Flash sale, Limited time offer. Get up to 30% off on New Jewlary Arrival.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Promotion
