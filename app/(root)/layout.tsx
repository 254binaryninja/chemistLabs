import Section from '@/components/Section'
import React,{ReactNode} from 'react'



const Lablayout = ({children}:{children:ReactNode}) => {
  return (
    <div className='flex flex-col'>
      <section>
       <Section/>
      </section>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Lablayout
