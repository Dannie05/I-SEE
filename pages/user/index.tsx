import React,{ useEffect, useState } from "react";
import { Text, Box,Button, Flex, HStack,useDisclosure,Modal,ModalOverlay,ModalContent, ModalHeader,ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import Router from "next/router";
import Image from "next/image";
import { signOut } from "next-auth/react";
import FilterPage from "../../components/filters";
import Navigation from "../../components/navigation";
import { FaCog, FaHeart, FaChevronRight, FaChevronLeft, FaArrowLeft } from "react-icons/fa";
import Profile from "../../public/images/avatar.png";
import Buy from "../../public/images/buy.png";
import Filter from "../../public/images/Filter.png";
import Carousel from "../../components/carousel"
import Link from "next/link"
// import ModalPage from "../../components/modal";

import microphone from "../../public/images/microphone.png";
import { RenderModalHeader } from "../../components/modal";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState("Home");
  const [display,setDisplay]= useState("none")
  const [openModal,setOpenModal]= useState(false)
  const [source,setSource]= useState("")


  useEffect(() => {
    // Check if the viewport width is less than a certain threshold (e.g., 600px for mobile)
    const handleResize = () => {
      const viewportWidth =
        window.innerWidth || document.documentElement.clientWidth;
      setIsMobile(viewportWidth < 600);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function RenderStock({ imageSource, width, height, price }) {
    return (
      <div className="max-w-[180px] p-1 " onClick={()=>{setSource(imageSource); setOpenModal(true); handleSizeClick("lg")}}>
        <div
          className="bg-no-repeat bg-cover bg-center"
          style={{
            height: height,
            padding: 29,
            width: width,
            backgroundImage: `url(/assets/${imageSource})`,
          }}

          // src={`/assets/${imageSource}`}
          // alt={`${imageSource} image`}
          // className="shrink-0"
        />
        <Flex className="flex-row justify-between">
          <span>
            <h2 className="fontPoppinsBold font-[700] text-[14px] text-center">
              Sollgen monollogi
            </h2>
            <p
              className="-mt-2 font-[400] fontPoppinsBold text-[16px]"
              style={{ fontFamily: "unset" }}
            >
              ₦{price}
            </p>
          </span>

          <Image
            width={30}
            height={30}
            src={microphone}
            alt=""
            className="mt-2 shrink-0 cursor-pointer self-start justify-start"
          />
        </Flex>
      </div>
    );
  }

  function RenderHeader({heading}){
    return(
    <Flex className="justify-between p-6">
    <Text className="pageHeading dark:text-white">{heading}</Text>
    <div className="flex gap-x-2">
       <Link href="/cart">
    
      <Image
        width={22}
        height={22}
        src={Buy}
        alt=""
        className="h-12 bg-secondary-color w-12 rounded-full p-2.5 shrink-0 text-gray-400 ml-2 cursor-pointer"
      />
    </Link>
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

  function RenderHome (){
    return(
      <>
      <RenderHeader heading="Catalog"/>       

      <Flex className="mx-6 my-2.5 self-center">
        <input
          type="search"
          className="w-[75vw] h-[41px] shrink-0 rounded-[180px] border border-[#090909]"
        />
        <Image
          width={24}
          height={24}
          src={Filter}
          alt=""
          onClick={()=>setDisplay("filter")}
          className="h-6 w-6 shrink-0 text-gray-400 ml-2 cursor-pointer"
        />
      </Flex>

      <section className="grid grid-cols-3 pl-2 mt-4">
        <button className="w-[91px] h-[38px] shrink-0 bg-secondary-color">
          <Text className="text-center text-[18px] dark:text-white fontPoppins line-height-normal">
            Trending
          </Text>
        </button>
        <button className="w-fit -ml-3 px-1 h-[38px] shrink-0 ">
          <Text className="text-center text-[18px]  fontPoppins flex flex-row font-[400]">
            New Arrivals
          </Text>
        </button>
        <button className="w-[91px] h-[38px] shrink-0">
          <Text className="text-center text-[18px] fontPoppins line-height-normal">
            Others
          </Text>
        </button>
      </section>

      <main className="grid grid-cols-2 mt-4">
        <RenderStock
          imageSource="blouse.png"
          width="180px"
          height="144px"
          price="1200"
        />

        <RenderStock
          imageSource="shirt-stack.png"
          width="180px"
          height="197px"
          price="1200"
        />
        <RenderStock
          imageSource="gown_cinderella.png"
          width="178px"
          height="197px"
          price="1200"
        />
        <RenderStock
          imageSource="cloth_random.png"
          width="180px"
          height="144px"
          price="1200"
        />
        <RenderStock
          imageSource="trouser.png"
          width="180px"
          height="144px"
          price="1200"
        />

        <RenderStock
          imageSource="trouser_women.png"
          width="178px"
          height="197px"
          price="1200"
        />
        <RenderStock
          imageSource="combo_one.jpg"
          width="178px"
          height="197px"
          price="1200"
        />
        <RenderStock
          imageSource="combo_two.jpg"
          width="178px"
          height="197px"
          price="1200"
        />
        <RenderStock
          imageSource="Vintage_shirt.jpg"
          width="178px"
          height="197px"
          price="1200"
        />
        <RenderStock
          imageSource="combo_four.jpg"
          width="178px"
          height="197px"
          price="1200"
        />
      </main>
      </>
    )
  }

  function RenderFavorites(){
    return(
      <>
      <Text>hello</Text>
      </>
    )
  }
  function Settings(){
    const settingsItems=[
      {name:"Profile", route:"/profile"},
      {name:"History", route:"/History"},
      {name:"Log out", route:"/Settings"},
    ]
    return (
      <>
      <RenderHeader heading="Settings"/>
      <Flex className="justify-center min-h-[50vh] px-3 flex-col ">
      {settingsItems.map(({name, route})=>(
        <div key={name+route} className="w-[330px] flex flex-row justify-between border-b border-b-[#333] my-4" >
        <p className="normalText flex self-end -mb-[3px] dark:text-white">{name}</p>
        <FaChevronRight/>
        </div>
      ))}
      </Flex>
      </>
    )
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState('md')
  
    const handleSizeClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }

  function ModalPage() {
    return (
      <div className="dark:bg-black overflow-y-scroll dark:text-silver min-w-screen ease-in-out duration-1000 min-h-screen pb-32">
         {/* <Image
       width= {428}
       height= {491}
        src={imageSourceOfSelectedStock}
        alt=""
        className="min-w-full shrink-0 text-gray-400 cursor-pointer"
      /> */}
     {/* <div
          className="bg-no-repeat bg-cover bg-center"
          style={{
            height: 491,
            width: "100vw",
            backgroundImage: `url(/assets/${source})`,
          }}>
            <RenderModalHeader closeModalProp={()=>{setOpenModal(false)}}/>

          </div> */}
          <Carousel imageSelected={source} modalState={()=>{setOpenModal(false)}}/>
          <section className="px-2 min-w-full -mt-6">
            <Flex className="items-center justify-between px-1">
              <Text className="normalTextBold">Sollgen Monologi</Text>
              <Text className="normalText">₦1200</Text>
            </Flex>
              <Text className="normalText">Soligen monologi. Mikroliga astroktiga. Homodölig. Liling sore. Soligen monologi. Mikroliga astroktiga. 
Homodölig. Liling sore. 
</Text>

          </section>
  

  
        
      </div>
    )
  }

  if(display=="filter"){
    return <FilterPage onPressFunc={()=>setDisplay("none")}/>
  } 
  if(openModal){
    return <ModalPage  />
  } 

  return (
    <div className="dark:bg-black  dark:text-silver  ease-in-out duration-1000 min-h-screen pb-14">
      <Navigation/>
     
      <RenderHome/>
          {/* {activeNavLink==="Home"&&(
          )}
          {activeNavLink==="Favorites"&&(
            <RenderFavorites/>
          )}
          {activeNavLink==="Settings"&&(
            <Settings/>
          )} */}
    </div>
  );
}
Home.auth = true;
