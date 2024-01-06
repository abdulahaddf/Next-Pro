import getComments from '@/app/lib/getComments'
import getPostById from '@/app/lib/getPostById'
import React from 'react'

export default async function page({params}) {
    const {id} = params
    const blog = await getPostById(id);
    const comments = await getComments(id);
    // console.log(blog)
  return (
    <div>
      <h1 className='text-center text-4xl my-5'>{blog.title}</h1>
      <p className='w-1/2 mx-auto mb-20'>{blog.body}</p>
      <hr />
      <div>
        <h1 className='my-10 text-center'>All comments for the  blog</h1>
<div className='grid grid-cols-3 gap-10 justify-center items-center align-middle h-full w-full mt-20 '>
    {
        comments?.map(comment => <div key={comment.id} className='w-[300px] border p-2 drop-shadow-md'>
            <h1>{comment.name}</h1>
            <p>{comment.body}</p>
        </div>)
    }
</div>
      </div>
    </div>
  )
}
