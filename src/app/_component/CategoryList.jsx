import React from 'react'
import Image from 'next/image'
import  Link  from 'next/link'

function CategoryList({categoryList}) {
  return (
    
    <div className='ml-5 px-5 py-2'>
       <h2
       className='text-green-600 font-extrabold text-lg'
       >Shop by Category</h2>
     <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-5 mt-2'>
     {categoryList.map((category,index)=>(
      
        <Link href={'/products-category/'+category?.name}  className='flex flex-col items-center bg-green-50 gap-2 p-3 rounded-lg group cursor-pointer hover:bg-green-200'>
         <Image 
                             src={
                              process.env.NEXT_PUBLIC_BACKEND_BASE_URL+
                              category?.icon[0]?.url}                      
                              alt='img' width={25} height={25}
                              unoptimized={true}
                              className='group-hover:scale-125 transition-all ease-in-out' 
                             />
         
          <h2 className='text-green-800'>{category?.name}</h2>
         </Link> 
      
       ))} 
       </div>   
   
    </div>
  )
}

export default CategoryList