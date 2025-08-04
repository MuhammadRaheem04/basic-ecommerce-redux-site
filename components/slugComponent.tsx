'use client'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'

type Props = {
  image: string[] | StaticImageData[];
};

const SlugComponent = ({ image }: Props) => {

   const [path, setPath] = useState<string | StaticImageData>("");
  return (
    <div>
      <Image src= {path ? path : image[0]} alt='ecomerce' width={400} height={400}/>
      <div className='flex items-center justify-evenly mx-auto mt-2'>

        {image.map((item, i) => (
          <div key={i} className='cursor-pointer'>
            <Image
              src={item}
              alt='product thumbnail'
              width={60}
              height={60}
              onClick={() => setPath(item)}
            />
          </div>
        ))}

      </div>
    </div>
  )
}

export default SlugComponent
