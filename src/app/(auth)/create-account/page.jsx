"use client"
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import Link  from 'next/link'
import { Button } from '@/components/ui/button'
import GLobalapi from '@/app/_utils/GLobalapi'
import { toast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

function createAccount() {
    const [username,setUsername] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const router = useRouter();
    const onCreateAccount=()=>{
        GLobalapi.registerUser(username,email,password).then(res=>{
            console.log(res.data.user),
            console.log(res.data.jwt);
            sessionStorage.setItem('user',JSON.stringify(res.data.user));
            sessionStorage.setItem('jwt',res.data.jwt);
            toast("Account created successfully.")
            router.push('/');
        },(e)=>{
            toast('Error in creating account.')
        })

    }
    useEffect(()=>{
       const jwt=sessionStorage.getItem('jwt');
       if(jwt){
        router.push('/');
       }
      },[])
  return (
    <div className='flex items-baseline justify-center my-10'>
        <div className='flex flex-col items-center justify-center p-10 bg-slate-100 border border-gra
        y-200'>
            <h1>Img-Logo</h1>
            <h2 className='font-bold text-3xl'>Create an account</h2>
            <h2 className='text-gray-500'>Enter your Email and Password to create an account</h2>
            <div className='w-full flex flex-col gap-5 mt-20'>
               <Input placeholder='username' onChange={(e)=>setUsername(e.target.value)} />
               <Input placeholder='example@gmail.com' onChange={(e)=>setEmail(e.target.value)}/>
               <Input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
               <Button className='text-white bg-green-600' onClick={()=>onCreateAccount()} disabled={!(username||email||password)} >Create an account</Button>
               <p>Already have an account? 
                <Link href={'/sign-in'} className='text-blue-500 cursor-pointer' > Sign-In
                </Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default createAccount