import React from 'react'
import getAllPost from '../lib/getAllPost'
import Link from 'next/link'
import getComments from '../lib/getComments'

export default async function page() {
    const blogs = await getAllPost()
    const comments = await getComments()
    // console.log(blogs.length)
  return (
    <div>
      <h1>All blogs</h1>
      <div>
        {
            blogs?.map((blog, i) => <div key={blog.id}> <Link href={`blog/${blog.id}`} className='my-2 w-1/2 mx-auto text-lg'> {i+1}. {blog?.title}</Link></div>)
        }
      </div>
    </div>
  )
}
