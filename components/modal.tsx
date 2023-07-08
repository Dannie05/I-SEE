import React from "react"
import { Text, Button, Flex, HStack,useDisclosure,Modal,ModalOverlay,ModalContent, ModalHeader,ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

export const RenderModalHeader = ({closeModalProp}) => {
  return(
  <Flex className="justify-between px-3 pt-6">
      <FaArrowLeft size={20} fontWeight={400} className="mt-2" onClick={closeModalProp}/>
  <div className="flex gap-x-2">
    <Image
      width={50}
      height={50}
      src={"/images/cart.png"}
      style={{ zoom: 1 }}
      alt=""
      className=" shrink-0 scale-1 ml-2 cursor-pointer rounded-[50px] bg-[#6CB564] shadow"
    />
    <Image
      width={50}
      height={50}
      src={"/images/heart_icon.png"}
      alt=""
      className="p-2 shrink-0 cursor-pointer rounded-[50px] bg-[#6CB564]"
    />
  </div>
</Flex>
)
}

  