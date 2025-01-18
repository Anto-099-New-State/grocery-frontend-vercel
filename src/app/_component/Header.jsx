"use client"
import { CircleUserRoundIcon, LayoutGrid, Search, ShoppingBag } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import GLobalapi from '../_utils/GLobalapi'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function Header() {
  const [category,setCategory] = useState([]);
  useEffect(()=>{
    getCatgeoryList();
  },[])
  const getCatgeoryList =()=>{
    GLobalapi.getCatgeory().then(res=>{
      setCategory(res.data.data);
    })
  }
  const router = useRouter();
  const isLogin = sessionStorage.getItem('jwt')?true:false
  const onLogout=()=>{
    sessionStorage.clear();
    router.push('/sign-in');
  } 
  return (
    <div className='p-5 shadow-md flex justify-between'>
        <div className='flex items-center gap-8'>
        <Image 
            src='https://cdn-icons-png.flaticon.com/256/9394/9394600.png'
            width={40}
            height={40}
            alt='logo'
            unoptimized={true}
            />       
            
             <DropdownMenu>
               <DropdownMenuTrigger asChild>
               <h1 className='hidden md:flex gap-2 items-center border rounded-full p-2 px-10 bg-state-200 cursor-pointer'>
           
                   <LayoutGrid className='h-5 w-5'/> Category
                </h1>
               </DropdownMenuTrigger>
               <DropdownMenuContent>
               <DropdownMenuLabel>Browse Categories</DropdownMenuLabel>
               <DropdownMenuSeparator />
               {
                category.map((category,index)=>(
                  <Link key={index} href={'/products-category/'+category?.name} >
                  <DropdownMenuItem key={index}>
                     <Image className='flex gap-2 items-center cursor-pointer'
                     src={
                      process.env.NEXT_PUBLIC_BACKEND_BASE_URL+
                      category?.icon[0]?.url}                      
                      alt='img' width={25} height={25}
                      unoptimized={true}
                     />
                    <h2>{category?.name}</h2>
                  </DropdownMenuItem>
                  </Link>
                ))
               }
            </DropdownMenuContent>
            </DropdownMenu>
             <div className='md:flex gap-3 items-center border rounded-full p-2 px-5 hidden '>
            <Search/>
            <input type='text' placeholder='search' className='outline-none'/>
         </div>
        </div>
        <div className='flex gap-5 items-center'>
            <h2 className='flex gap-2 items-center text-lg'><ShoppingBag/>0</h2>
           {!isLogin? <Link href={'/sign-in'}> <Button>Login</Button> </Link> 
           :
           <CircleUserRoundIcon/>
}
        </div>
        
    </div>
  )
}

export default Header