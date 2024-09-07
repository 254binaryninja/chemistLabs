import React from 'react'
import Info from './Info'
import { showRoom } from '@/constants'
import Card from '../Card'
const Middle = () => {
  return (
    <div>
      <Info/>
      <div className='mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4'>
        {showRoom.map((framework,i)=>(
         <Card
          key={i}
          Title={framework.label}
          Icon={framework.icon}
          Content={framework.content}
         />
        ))}
      </div>
      <div className='mt-9 p-5 flex-center'>
       <p className='text-white font-semibold text-2xl'>Prices may vary depending on tools and framework used : <span className='text-color cursor-pointer underline'><a href="tel:+254701729985">Call for more Info</a></span></p>
      </div>
    </div>
  )
}

export default Middle
