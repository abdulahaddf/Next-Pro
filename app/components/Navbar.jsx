import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
      <ul className='flex gap-6 justify-center py-10 text-xl bg-blue-400 text-white'>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/blog">Blog</Link>
        </li>
        <li>
            <Link href="/about">About Us</Link>
        </li>
      </ul>
    </div>
  )
}
