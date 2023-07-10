// import RenderHeader from "../components/renderHeader"
import {useState} from "react"
import Navigation from "../components/navigation"
import BottomSheet from "../components/bottomSheet"
import Profile from "../public/images/avatar.png";
import { Flex, Text } from "@chakra-ui/react"
import Link from "next/link"
import Image from "next/image"
import Loading from "../components/loading";

function RenderHeader({heading}){
    return (
        <Flex className="justify-between p-6">
        <Text className="pageHeading dark:text-white">{heading}</Text>
        <div className="flex gap-x-2">
  
          <Link href={"/profile"}>
            <Image
              width={50}
              height={50}
              src={Profile}
              alt=""
              className="h-12 w-12 shrink-0 text-gray-400 ml-1 cursor-pointer"
            />
  
          </Link>
        </div>
      </Flex>
    )
}


export default function Cart() {
  const [isLoading, setIsLoading] = useState(false);

  function DisplayLoadingAnimation() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false)
      
    }, 4000);

  }

  if (isLoading) {
    return (
      // <Image
      //   src={"/images/loading.svg"}
      //   alt="loading"
      //   width={100}
      //   height={100}
      //   className="w-full h-full"
      // />
      <Loading/>
    );
  }
    return (
        <div className="ease-in-out duration-700 overflow-none before:absolute inset-0 min-h-screen dark:bg-black dark:text-silver pb-8 signupPage">
            <RenderHeader heading={"Cart"}/>
            <Navigation/>
            <BottomSheet load={()=>DisplayLoadingAnimation()}/>
        </div>
    )
}