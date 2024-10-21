import React from 'react'
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
import { blogItems, serviceItems } from '@/constants'

// Reusable Link Item
const NavigationMenuLinkItem = ({ route, label }: { route: string, label: string }) => {
  return (
      <Link href={route} className='w-full'>
        <NavigationMenuItem className='py-2 px-4 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors rounded-md'>
          {label}
        </NavigationMenuItem>
      </Link>
  )
}

// Reusable Navigation Menu
const NavigationMenuItems = ({ title, items }: { title: string, items: { route: string, label: string }[] }) => {
  return (
      <NavigationMenu>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='text-lg font-medium'>
            {title}
          </NavigationMenuTrigger>
          <NavigationMenuContent className='bg-white shadow-md rounded-md p-4'>
            <NavigationMenuList className='flex flex-col gap-2'>
              {items.map((item, i) => (
                  <NavigationMenuLinkItem key={i} route={item.route} label={item.label} />
              ))}
            </NavigationMenuList>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenu>
  )
}

const Nav = () => {
  return (
      <div className='flex flex-row gap-4 mx-3 p-2'>
        <NavigationMenuItems title="Services" items={serviceItems} />
        <NavigationMenuItems title="Blogs" items={blogItems} />
      </div>
  )
}

export default Nav
