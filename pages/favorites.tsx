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
  const [filterCriteria, setFilterCriteria] = useState(null);

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
        {/* <Image
        width={30}
        height={30}
        src={"/images/heart_icon.png"}
        alt=""
        className="shrink-0 ml-1 my-1 cursor-pointer"
      /> */}
      <svg  className="shrink-0 ml-1 my-1 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.761 20.8538C9.5904 19.5179 7.57111 17.9456 5.73929 16.1652C4.45144 14.8829 3.47101 13.3198 2.8731 11.5954C1.79714 8.25031 3.05393 4.42083 6.57112 3.28752C8.41961 2.69243 10.4384 3.03255 11.9961 4.20148C13.5543 3.03398 15.5725 2.69398 17.4211 3.28752C20.9383 4.42083 22.2041 8.25031 21.1281 11.5954C20.5302 13.3198 19.5498 14.8829 18.2619 16.1652C16.4301 17.9456 14.4108 19.5179 12.2402 20.8538L12.0051 21L11.761 20.8538Z" fill="#6CB564" stroke="#6CB564" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7402 7.05298C16.8055 7.39328 17.5625 8.34968 17.6571 9.47496L15.7402 7.05298Z" fill="#D9D9D9"/>
  <path d="M15.7402 7.05298C16.8055 7.39328 17.5625 8.34968 17.6571 9.47496" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        <div
          className="bg-no-repeat bg-cover bg-center self-center flex mx-4"
          style={{
            height: 199,
            width: "95vw",
            backgroundImage: `url(/assets/${imageSource})`,
          }}
        />
        <Flex alignItems="center" justifyContent="space-between" px="3">
          <Text className="normalTextBolder">sollgen monologi</Text>
          <Text> ₦{price}</Text>
        </Flex>
      </div>
    );
  };
  const [display,setDisplay]= useState("none")

  if(display=="filter"){
    return <FilterPage onPressFunc={()=>setDisplay("none")} setFilterCriteria={setFilterCriteria}/>
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
   
{/* <div className="flex items-center">
    <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
</div> */}

    </div>
  );
}

Favorites.auth = true;
