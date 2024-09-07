import React from 'react'
import { navItems } from '@/constants'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"



const Nav = () => {
  return (
    <div className='flex flex-row gap-4 mx-3 p-2'>
      {navItems.map((nav,i)=>(
       <NavigationMenu key={i}>
        <NavigationMenuItem>
           <NavigationMenuTrigger>
           <NavigationMenuLink>
           {nav.label}
           </NavigationMenuLink>
           </NavigationMenuTrigger>
           <NavigationMenuContent>
            <div className='p-2 w-[250px]  flex flex-row gap-5'>
               <div className='p-1 flex flex-col gap-3'>
                <Link href={nav.set.apps?.route|| `not`}>
                <h1 className='text-xl font-medium text-black'>
                  {nav.set.apps?.label}
                </h1>
                </Link>
                <p className='text-sm font-normal text-black'>
                  {nav.set.apps?.topic}
                </p>
               </div>
            </div>
           </NavigationMenuContent>
           </NavigationMenuItem>
           </NavigationMenu> 
       
      ))}
    </div>
  )
}

export default Nav
