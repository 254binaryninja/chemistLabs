import React from 'react'
import { navItems } from '@/constants'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className='flex flex-row gap-4 mx-3 p-2'>
      {navItems.map((nav,i)=>(
        <Link key={i} href={nav.route}>
        <div  className='p-3 font-bold text-white hover:underline  rounded-md m-3 cursor-pointer'>
           <h1 className='text-sm'>{nav.label}</h1>
        </div>
        </Link>
      ))}
    </div>
  )
}

export default Nav
