"use client"
import GLobalapi from '@/app/_utils/GLobalapi';
import { Button } from '@/components/ui/button'
import  Link  from 'next/link'
import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { toast } from '@/hooks/use-toast';

function SignIn() {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const router = useRouter();

  const onSigIn=()=>{
    GLobalapi.signIn(email,password).then(res=>{
      console.log(res.data.user),
      console.log(res.data.jwt);
      sessionStorage.setItem('user',JSON.stringify(res.data.user));
      sessionStorage.setItem('jwt',res.data.jwt);
      toast({
        description: "Logged In successfully.",
      })
      router.push('/');
  },(e)=>{
      toast('Error in logging in.')
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
        <div className='flex flex-col items-center justify-center p-10 bg-slate-100 border border-gray-200'>
            <h1>Img-Logo</h1>
            <h2 className='font-bold text-3xl'>Login in to your account</h2>
            <h2 className='text-gray-500'>Enter your Email and Password to login in to your account</h2>
            <div className='w-full flex flex-col gap-5 mt-20'>
               <Input placeholder='example@gmail.com' onChange={(e)=>setEmail(e.target.value)}/>
               <Input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
               <Button className='text-white bg-green-600' onClick={()=>onSigIn()} disabled={!(email||password)} >Log-In</Button>
               <p>Don't have an account? 
                <Link href={'/sign-in'} className='text-blue-500 cursor-pointer' > Sign-Up</Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default SignIn