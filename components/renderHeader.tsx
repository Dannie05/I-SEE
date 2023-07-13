import { Text, Button, Flex, HStack } from "@chakra-ui/react";
import Image from "next/image"
import Buy from "../public/images/Buy.png";
import Profile from "../public/images/avatar.png";
import Link from "next/link"

function RenderHeader({ heading }) {
  return (
    <Flex className="justify-between p-6">
      <Text className="pageHeading dark:text-white">{heading}</Text>
      <div className="flex gap-x-2">
        <Link href="/cart">

          <Image
            width={22}
            height={22}
            src={Buy}
            alt=""
            className="h-12 bg-secondary-color w-12 rounded-full p-2.5 shrink-0  cursor-pointer"
          />
        </Link>

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

export default RenderHeader 