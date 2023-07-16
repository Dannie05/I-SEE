import React from "react";
import LottieAnimation from "../utilities/LottieAnimation";
import LoadingAnimation from "../public/assets/lottie/dlf10_rbSZi5suM6.json";
import SuccessAnimation from "../public/assets/lottie/loadedStates/lf20_lk80fpsm.json";
import Link from "next/link";

const SuccessFul = (props:{stopAnimation?:any}) => {
  return (
    <div className="flex flex-col item-center justify-center pl-[-16px] h-screen dark:bg-black bg-no-repeat bg-center bg-cover overflow-y-scroll dark:text-silver min-w-screen ease-in-out duration-1000">
      <div className="lg">
        <LottieAnimation animationData={SuccessAnimation} shouldLoop={false} />
      </div>
      <p className="capitalize text-center normalTextBolder ">confirmed</p>
      <span className="flex item-center justify-center w-full my-4">
        <Link
          href="/dashboard"
          onClick={props.stopAnimation}
          className="p-2 capitalize text-center normalText text-black bg-secondary-color pt-10 rounded-md text-lg w-1/2 "
        >
          Dashboard
        </Link>
      </span>
    </div>
  );
};
export default SuccessFul;
