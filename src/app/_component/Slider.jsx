import React from 'react'
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
function Slider({sliderList}) {
  return (
    <div className="p-5 md:p-10 px-16">
        <Carousel>
    <CarouselContent>
        {sliderList.map((slider,index)=>(
                 <CarouselItem
                 key={index}
                 >
                    <Image
                     src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL+slider?.icon[0]?.url}
                     alt='slider-img'
                     width={1000}
                     height={400}
                     className='w-full h-[300px] object-cover rounded-2xl'
                    />
                 </CarouselItem>
        ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
  </div>
  )
}

export default Slider