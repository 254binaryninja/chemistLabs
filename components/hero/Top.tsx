'use client'

import React from 'react'
import Lottie from 'lottie-react'
import Animation from '../../public/animations/Api.json'
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'

const Top = () => {
    const router = useRouter()

    useGSAP(()=>{
        gsap.fromTo("#text",{
         opacity:0,
         y:20,
        },{
         opacity:1,
         y:0,
         delay:1,
         stagger:0.5,
        })
     },[])
     

  return (
    <div className='flex mt-10 flex-row gap-24 max-sm:flex-wrap max-md:flex-col'>
      <div className='ml-80 max-md:ml-28 max-sm:ml-10 my-5 p-7 max-sm:p-4 max-w-[450px] text-white'>
       <p id="text" className='font-extrabold text-4xl p-2 '>Welcome to <span className='text-color font-extrabold m-2'>Binary Labs </span></p>
       <p id="text" className='font-extrabold text-4xl p-2 my-5 '> Your <span className='text-color font-extrabold m-2'>GO TO</span> for innovative software solutions.</p>
       <Button id="text" className='m-5 bg-black hover:bg-black text-white rounded-full p-7 w-40'>
         Get a quote
       </Button>
      </div>

      <div className='p-16 mx-10 w-full min-w-[500px] aspect-square max-sm:hidden'>
         <Lottie animationData={Animation}  height={300} width={300}/>
      </div>
    </div>
  )
}

export default Top
