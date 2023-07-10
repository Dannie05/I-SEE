import Image from 'next/image'
import React from 'react'

function Loading() {
  return (
    <div style={{background:"url(/images/loading.svg)"}} className="dark:bg-black bg-no-repeat bg-center bg-cover overflow-y-scroll dark:text-silver min-w-screen ease-in-out duration-1000 min-h-screen items-center justify-center">
        <Image src={"/images/loading.svg"}  alt='loading'  width={100} height={100} className='w-full h-full'/>
    </div>
  )
}

export default Loading