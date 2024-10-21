'use client'

import React, { useState,useEffect } from 'react'
import Nav from './Nav'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const [isIscrolled,setIscrolled] = useState<boolean>(false)

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY > 0){
        setIscrolled(true)
      }else{
        setIscrolled(false)
      }
    }
    window.addEventListener("scroll",handleScroll)
    return ()=>window.removeEventListener("scroll",handleScroll)
  },[])

  return (
    <div className={cn("flex-between",{
      "glassmorphism mx-7 z-50 rounded-md sticky top-5":isIscrolled,
      "bg-transparent z-10 left-0 top-0 right-0 px-6 py-4 lg:px-10":!isIscrolled
    })}>
      <Link href="/" className="flex items-center gap-1 p-2">
       <Image
         src="/images/IMG_1.png"
         alt="Logo"
         width={40}
         height={40}
       />
       <p className='font-extrabold text-[26px] text-white p-5  max-sm:hidden'>Binary Labs</p>
      </Link>
      <div><Nav/></div>
    </div>
  )
}

export default Navbar
