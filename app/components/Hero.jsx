import Image from 'next/image'
import React from 'react'

import img from "../assets/pic.jpg"
export default function Hero() {
  return (
    <div className='w-1/2 mx-auto'>
      <Image placeholder="blur" src={img} alt='fg'/>
    </div>
  )
}
