import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import ProductItemDetail from './ProductItemDetail';
  
function ProductItem({product}) {
  return (
    <div className='p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg
    hover:scale-110 hover:shadow-lg transition-all ease-in-out cursor-pointer'
    >
        <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+product?.image[0]?.url}
        width={400}height={200} alt='img'
        className='h-[200px] w-[500px] object-contain'
        />
                <h2 className='font-bold text-lg'>{product?.name}</h2>
        <div className='flex gap-3'>
        {product?.sellingprice&&
        <h2 className='font-bold text-lg'>${product?.sellingprice}</h2>}
        <h2 className={`font-bold text-lg ${product?.sellingprice&& 'line-through text-gray-500' }`}>${product?.mrp}</h2>
        </div>
        
        <Dialog>
  <DialogTrigger asChild><Button 
        className='text-green-600 hover:text-white hover:bg-green-600'
        variant="outline">Add to cart</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogDescription>
         <ProductItemDetail product={product}/>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default ProductItem