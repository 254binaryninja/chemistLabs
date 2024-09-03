'use client'

import React, { useState,useEffect } from 'react'
import Mobile from './Mobile'
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
    <div className={cn("flex-between sticky left-0 top-0 right-0 px-6 py-4 lg:px-10",{
      "bg-gray-500 z-10 ":isIscrolled,
      "bg-transparent":!isIscrolled
    })}>
      <Link href="/" className="flex items-center gap-1 p-2">
       <Image
         src="/images/logo.png"
         alt="Logo"
         width={40}
         height={40}
       />
       <p className='font-extrabold text-[26px] text-white p-5  max-sm:hidden '>Chemist Labs</p>
      </Link>
      <div className='flex-center sm:hidden'><Mobile/></div>
      <div><Nav/></div>
    </div>
  )
}

export default Navbar
