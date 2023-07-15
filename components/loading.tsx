import React from 'react'
import LottieAnimation from '../utilities/LottieAnimation';
import LoadingAnimation from '../public/assets/lottie/dlf10_rbSZi5suM6.json';
import SuccessAnimation from '../public/assets/lottie/loadedStates/dlf10_nB56oX1AVc.json';



const Loading= ()=> {
  return (
    <div className="flex flex-col item-center justify-center pl-[-16px] h-screen dark:bg-black bg-no-repeat bg-center bg-cover overflow-y-scroll dark:text-silver min-w-screen ease-in-out duration-1000" >
    <LottieAnimation animationData={LoadingAnimation} shouldLoop={true}/>
    <p className='capitalize text-center normalTextBolder -mt-24'>Order processing</p>
    
    </div>

  )
}



export default Loading