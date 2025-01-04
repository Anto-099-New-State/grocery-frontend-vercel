import React from 'react'
import ProductItem from './ProductItem'

function ProductList({productList}) {
  return (
    <div className='ml-5 px-5 py-2'>
        <h2 className='text-green-600 font-extrabold text-lg'>Our Popular Products</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-6'>
            {productList.map((product,index)=>index<=7&&(
                <ProductItem product={product}/>
            ))}
        </div>
    </div>
  )
}

export default ProductList