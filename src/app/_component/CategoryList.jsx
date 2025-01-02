import React from 'react'
import Image from 'next/image'

function CategoryList({categoryList}) {
     console.log(categoryList);
  return (
    
    <div className='mt-5'>
       <h2
       className='text-green-600 font-bold text-2xl px-5'
       >Shop by Category</h2>
     
       {categoryList.map((category,index)=>(
        <div>
         <Image className='flex gap-2 items-center cursor-pointer'
                             src={
                              process.env.NEXT_PUBLIC_BACKEND_BASE_URL+
                              category?.icon[0]?.url}                      
                              alt='img' width={25} height={25}
                              unoptimized={true}
                             />
         </div> 
       ))}    
   
    </div>
  )
}

export default CategoryList