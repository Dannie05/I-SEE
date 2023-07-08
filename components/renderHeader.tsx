import { Text, Button, Flex, HStack } from "@chakra-ui/react";
import Image from "next/image"
import Cart from "../public/images/cart.png";
import Profile from "../public/images/avatar.png";

function RenderHeader({heading}){
    return(
    <Flex className="justify-between p-6">
    <Text className="pageHeading dark:text-white">{heading}</Text>
    <div className="flex gap-x-2">
      <Image
        width={50}
        height={50}
        src={Cart}
        style={{ zoom: 1 }}
        alt=""
        className=" shrink-0 scale-1 ml-2 cursor-pointer rounded-[50px] bg-[#6CB564] shadow"
      />
      <Image
        width={50}
        height={50}
        src={Profile}
        alt=""
        className="h-12 w-12 shrink-0 text-gray-400 ml-2 cursor-pointer"
      />
    </div>
  </Flex>
  )
  }

  export default RenderHeader 