import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function TopCategoryList({categoryList,selectedCategory }) {
  return (
    <div>
        <div className='flex gap-5 mt-2 overflow-auto mx-7 md:mx-20 justify-center'>
     {categoryList.map((category,index)=>(
      
        <div  className={`flex flex-col items-center bg-green-50 gap-2 p-3 rounded-lg group cursor-pointer hover:bg-green-200 w-[150px] min-w-[100px] ${selectedCategory==category?.name&&'bg-green-600 text-white'}`}>
         <Image 
                             src={
                              process.env.NEXT_PUBLIC_BACKEND_BASE_URL+
                              category?.icon[0]?.url}                      
                              alt='img' width={25} height={25}
                              unoptimized={true}
                              className='group-hover:scale-125 transition-all ease-in-out' 
                             />
         
          <h2 className={`text-green-800 ${selectedCategory==category?.name&&'bg-green-600 text-white'} `}>{category?.name}</h2>
         <Link href={'/products-category/'+category?.name} className='cursor-pointer'>touch</Link>
         </div> 
      
       ))} 
       </div>
    </div>
  )
}

export default TopCategoryList