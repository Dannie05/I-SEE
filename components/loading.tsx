import Image from 'next/image'
import React from 'react'
import LottieAnimation from '../utilities/LottieAnimation';
import animationData from '../public/assets/lottie/dlf10_rbSZi5suM6.json';


function Loading() {
  return (
    <div className="flex flex-col item-center justify-center pl-[-16px] h-screen dark:bg-black bg-no-repeat bg-center bg-cover overflow-y-scroll dark:text-silver min-w-screen ease-in-out duration-1000" >
    <LottieAnimation animationData={animationData} />
    <p className='capitalize text-center normalTextBolder -mt-24'>Order processing</p>
    
    </div>

  )
}

export default Loading