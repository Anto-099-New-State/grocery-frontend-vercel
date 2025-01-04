import React from 'react'
import Image from 'next/image'

function ProductItemDetail({product}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+product.image[0]?.url}
        width={300}
        height={300}
        alt='img'
        className='bg-slate-200 p-5 h-[320px] object-contain rounded-lg'
        />
        <div className='flex flex-col gap-3 ml-3'>
            <h2 className='text-2xl font-extrabold text-black'>{product?.name}</h2>
            <h2 className='text-sm font-bold text-grey-500'>{product?.description}</h2>
            <div className='flex gap-3'>
                   {product?.sellingprice&&
                    <h2 className='font-bold text-3xl text-black'>${product?.sellingprice}</h2>}
                  <h2 className={`font-bold text-3xl ${product?.sellingprice&& 'line-through text-gray-500' }`}>${product?.mrp}</h2>
        </div>
        <h2>Quantity{product?.itemQuantitytype}</h2>
        </div>
    </div>
  )
}

export default ProductItemDetail