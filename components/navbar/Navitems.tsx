import React, { ReactNode } from 'react'
import Link from 'next/link'

type Navprops = {
    title:string,
    content:string,
    link:string,
    children:ReactNode
}
const Navitems = ({title,content,link,children}:Navprops) => {
  return (
    <div className='bg-gray-800 rounded-md p-4 flex flex-col gap-2'>
      <Link href={link}> 
      <h1 className='text-xl font-medium text-white hover:opacity-70 p-2 underline cursor-pointer'>
        {title}
      </h1>
      </Link> 
      <p className='text-sm font-normal text-white hover:opacity-65 p-3 cursor-pointer'>
       {content}
      </p>
    </div>
  )
}

export default Navitems
