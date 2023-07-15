import React, { useEffect, useState } from "react";
import {
  Text,
  Box,
  Button,
  Flex,
  HStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import Router from "next/router";
import Image from "next/image";
import { signOut } from "next-auth/react";
import FilterPage from "../../components/filters";
import Navigation from "../../components/navigation";
import {
  FaCog,
  FaHeart,
  FaChevronRight,
  FaChevronLeft,
  FaArrowLeft,
} from "react-icons/fa";
import Profile from "../../public/images/avatar.png";
import Buy from "../../public/images/Buy.png";
import Filter from "../../public/images/Filter.png";
import Carousel from "../../components/carousel";
import Link from "next/link";
import microphone from "../../public/images/microphone.png";
import { RenderModalHeader } from "../../components/modal";

export default function Home({ userInfo }: any) {
  const [isMobile, setIsMobile] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState("Home");
  const [display, setDisplay] = useState("none");
  const [productDisplay, setProductDisplay] = useState("Trending");
  const [openModal, setOpenModal] = useState(false);
  const [source, setSource] = useState("");
  const [synth, setSynth] = useState(null);
  const sizes = ["XM", "S", "M", "L", "XL"];
  const [activeCircle, setActiveCircle] = useState("one");

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

  function FilterBySize({ size }) {
    return (
      <div className="flex justify-evenly">
        <button className="focus:text-black hover:bg-secondary-color border w-8 h-8 mx-1 rounded-sm">
          {size}
        </button>
      </div>
    );
  }

  function RenderStock({
    imageSource,
    width,
    height,
    price,
    productDetail = "Sollgen monollogi",
  }) {
    return (
      <div className="max-w-[180px] p-1 ">
        <div
          className="bg-no-repeat bg-cover bg-center"
          onClick={() => {
            setSource(imageSource);
            setOpenModal(true);
            handleSizeClick("lg");
          }}
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
              {productDetail}
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
            onClick={() => speakText(`${productDetail} ${price}`)}
          />
        </Flex>
      </div>
    );
  }

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
    );
  }

  function RenderHome() {
    return (
      <>
        <RenderHeader heading="Catalog" />

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
            onClick={() => setDisplay("filter")}
            className="h-6 w-6 shrink-0 text-gray-400 ml-2 cursor-pointer"
          />
        </Flex>

        <section className="grid grid-cols-3 pl-2 mt-4">
          <button
            className={`w-[91px] h-[38px] shrink-0 ${
              productDisplay === "Trending"
                ? "bg-secondary-color"
                : "bg-transparent"
            } `}
            onClick={() => setProductDisplay("Trending")}
          >
            <Text className="text-center text-[18px] dark:text-white fontPoppins line-height-normal">
              Trending
            </Text>
          </button>
          <button
            className={`w-fit -ml-3 px-1 h-[38px] shrink-0 ${
              productDisplay === "New Arrivals"
                ? "bg-secondary-color"
                : "bg-transparent"
            } `}
            onClick={() => setProductDisplay("New Arrivals")}
          >
            <Text className="text-center text-[18px]  fontPoppins flex flex-row font-[400]">
              New Arrivals
            </Text>
          </button>
          <button
            className={`w-[91px] h-[38px] shrink-0 ${
              productDisplay === "others"
                ? "bg-secondary-color"
                : "bg-transparent"
            } `}
            onClick={() => setProductDisplay("others")}
          >
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
    );
  }

  const Circle = ({ isActiveCircle }) => {
    return (
      <span
      onClick={()=>setActiveCircle(isActiveCircle)}
        className={`${
          activeCircle == isActiveCircle ? "bg-[#031E2C]" : "bg-transparent"
        }  rounded-full h-2.5 w-2.5 outline outline-[#031E2C] space-2 inline-block text-center`}
      />
    );
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

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
        <Carousel
          imageSelected={source}
          modalState={() => {
            setOpenModal(false);
          }}
        />
        <section className="px-2 min-w-full -mt-6">
          <Flex className="items-center justify-between px-1">
            <Text className="normalTextBold">Sollgen Monologi</Text>
            <Text className="normalText">₦1200</Text>
          </Flex>
          <Text className="normalText">
            Soligen monologi. Mikroliga astroktiga. Homodölig. Liling sore.
            Soligen monologi. Mikroliga astroktiga. Homodölig. Liling sore.
          </Text>

          <Flex className="flex-row items-center justify-between my-2">
            <span className=" flex items-center justify-between pb-1 h-12">
              {sizes.map((size, index) => (
                <FilterBySize key={index} size={size} />
              ))}
            </span>
            <div className="flex gap-x-2.5">
              <Circle isActiveCircle="one" />
              <Circle isActiveCircle="two"/>
              <Circle isActiveCircle="three"/>
            </div>
          </Flex>

          <div>
            
          </div>
        </section>
      </div>
    );
  }

  if (display == "filter") {
    return <FilterPage onPressFunc={() => setDisplay("none")} />;
  }
  if (openModal) {
    return <ModalPage />;
  }

  return (
    <div className="dark:bg-black  dark:text-silver  ease-in-out duration-1000 min-h-screen pb-14">
      <Navigation />

      <RenderHome />
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
