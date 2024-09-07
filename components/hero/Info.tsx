import React from 'react'
import { Button } from '../ui/button'

const Info = () => {
  return (
    <section className='flex flex-col  gap-10 z-10 mx-16 max-sm:mx-9 my-8 p-10 rounded-md bg-blue-950'>
      <div className='text-white flex-center p-5'>
        <h1 className='text-2xl font-bold'>Who are we ?</h1>
      </div>
      <div className='flex-center  p-5'>
        <p className='font-medium text-xl text-white'>We are a software company with a passion to improve business across Kenya with all the necessary software tools so that
            they can realize their potential. In this everchanging market <strong>from{" "}<span className='text-color'>websites to apps and custom APIs </span> we got you</strong>  all you need 
            is to get in contact with us.
        </p>
      </div>

      <div className='mt-2 p-4'>
         <Button className='p-7 rounded-md'>
            Get a quote
         </Button>
      </div>
    </section>
  )
}

export default Info
