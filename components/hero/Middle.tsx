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
    </div>
  )
}

export default Middle
