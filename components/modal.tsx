import React,{useState,useEffect} from "react"
import { Text, Button, Flex, HStack,useDisclosure,Modal,ModalOverlay,ModalContent, ModalHeader,ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export const RenderModalHeader = ({closeModalProp}) => {

  const [synth, setSynth] = useState(null);

  useEffect(() => {
    if ("speechSynthesis" in window) {
      const synth = window.speechSynthesis;
      setSynth(synth);
    }
  }, []);

  const speakText = (text) => {
    if (synth && synth.speaking) {
      synth.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };


  return(
  <Flex className="justify-between px-3 pt-6">
      <FaArrowLeft size={20} fontWeight={400} className="mt-2" onClick={closeModalProp}/>
  <div className="flex gap-x-2">
  <Link href="/cart">
    
    <Image
      width={22}
      height={22}
      src={"/images/buy.png"}
      alt=""
      className="h-10 bg-secondary-color w-10 rounded-full p-2.5 shrink-0  cursor-pointer"
    />
  </Link>
  <Link href="/favorites">
    
    <Image
      width={22}
      height={22}
      src={"/images/heart.png"}
      alt=""
      className="h-10 bg-secondary-color w-10 rounded-full p-2.5 shrink-0  cursor-pointer"
    />
  </Link>
  </div>
</Flex>
)
}

  