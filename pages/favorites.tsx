import Navigation from "../components/navigation";
import RenderHeader from "../components/renderHeader";
import FilterPage from "../components/filters";
import { useEffect, useState } from "react";
import { Text, Button, Flex, HStack } from "@chakra-ui/react";
import Router from "next/router";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { RiEdit2Line } from "react-icons/ri";
import { FaChevronLeft } from "react-icons/fa";
import profile from "../public/images/avatar.png";
import Cart from "../public/images/cart.png";
import Filter from "../public/images/Filter.png";
import microphone from "../public/images/microphone.png";
import { sizes } from "../components/filters";
export default function Favorites() {

  function FilterBySize({ size }) {
    return (
      <div className="flex justify-evenly">
        <Button
        maxH={2}
          variant="outline"
          className="focus:text-black hover:bg-secondary-color"
        >
          {size}
        </Button>
      </div>
    );
  }

  const RenderFavorites = ({ imageSource, price }) => {
    return (
      <div className="justify-center justify-self-center flex flex-col my-7">
        <Image
        width={24}
        height={24}
        src={"/images/Heart.png"}
        alt=""
        className="shrink-0 ml-1 w-2 my-1 cursor-pointer"
      />
        <div
          className="bg-no-repeat bg-cover bg-center self-center flex mx-4"
          style={{
            height: 199,
            width: 380,
            backgroundImage: `url(/assets/${imageSource})`,
          }}
        />
        <Flex alignItems="center" justifyContent="space-between">
          <Text className="normalTextBolder">sollgen monologi</Text>
          <Text> ₦{price}</Text>
        </Flex>
      </div>
    );
  };
  const [display,setDisplay]= useState("none")

  if(display=="filter"){
    return <FilterPage onPressFunc={()=>setDisplay("none")}/>
  }


  return (
    <div className="dark:bg-black dark:text-silver  ease-in-out duration-1000 min-h-screen pb-14 pt-4" >
      <Navigation />
      <RenderHeader heading="Favorites" />
      
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

      <RenderFavorites imageSource="gown_cinderella.png" price="1200"/>
      <RenderFavorites imageSource="cloth_random.png" price="1200"/>

      <div>
          <span className="mb-4 min-w-full flex items-center justify-between pb-1 h-5">
            {sizes.map((size, index) => (
              <FilterBySize key={index} size={size}  />
            ))}
          </span>
          <p className="flex items-center gap-x-3">
              <span className="bg-[#031E2C] outline-double rounded-full h-5 w-5 inline-block text-center" />
            </p>
        </div>
   
{/* <div className="flex items-center">
    <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
</div> */}

    </div>
  );
}

Favorites.auth = true;
