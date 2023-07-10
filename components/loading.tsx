import Image from 'next/image'
import React from 'react'
<<<<<<< HEAD
import lottieAnimation from "lottie-web"
import LottieAnimation from '../utilities/LottieAnimation';
import animationData from '../public/assets/lottie/dlf10_rbSZi5suM6.json';





function Loading() {
  return (
    // <div style={{background:"url(/images/loading.svg)"}} className="dark:bg-black bg-no-repeat bg-center bg-cover overflow-y-scroll dark:text-silver min-w-screen ease-in-out duration-1000 min-h-screen items-center justify-center">
    //     <Image src={"/images/loading.svg"}  alt='loading'  width={100} height={100} className='w-full h-full'/>
    // </div>
    <div className="flex item-center justify-center pl-[-16px] h-screen" >
    <LottieAnimation animationData={animationData} />
    
    </div>

=======

function Loading() {
  return (
    <div style={{background:"url(/images/loading.svg)"}} className="dark:bg-black bg-no-repeat bg-center bg-cover overflow-y-scroll dark:text-silver min-w-screen ease-in-out duration-1000 min-h-screen items-center justify-center">
        <Image src={"/images/loading.svg"}  alt='loading'  width={100} height={100} className='w-full h-full'/>
    </div>
>>>>>>> 3597b722d24466e0fc249d80f03922199caf2f08
  )
}

export default Loading