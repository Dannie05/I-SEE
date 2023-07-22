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
import { TbMinus, TbPlus } from "react-icons/tb";
import Loading from "../../components/loading";
import SuccessFul from "../../components/success";
import ConfirmOrderDetails from "../../components/confirmDetails";
import products from "../../data/products";

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
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [confirm, setIsConfirm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCriteria, setFilterCriteria] = useState(null); // Track the selected filter criteria
  const [filteredProducts, setFilteredProducts] = useState(products);




  let dummyText =
    "Soligen monologi. Mikroliga astroktiga. Homodölig. Liling sore";

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
    // Apply filtering whenever the filter criteria change
    if (filterCriteria) {
      const { brand, size, color, price } = filterCriteria;
      let filtered = products;

      if (brand) {
        filtered = filtered.filter((product) => product.brand === brand);
      }

      if (size) {
        filtered = filtered.filter((product) => product.size === size);
      }

      if (color) {
        filtered = filtered.filter((product) => product.color === color);
      }

      if (price) {
        filtered = filtered.filter((product) => product.price <= price);
      }

      setFilteredProducts(filtered);
    }
  }, [filterCriteria]);

  const [numberOfOrderedItems, setNumberOfOrderedItems] = useState<number>(1);

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
  const filteredProductsBySearch = products.filter((product) =>
    product.productDetail.toLowerCase().includes(searchQuery.toLowerCase())||product.price.toLowerCase().includes(searchQuery.toLowerCase())
  );
  function FilterBySize({ size }) {
    return (
      <div className="flex justify-evenly">
        <button
          className="focus:text-black hover:bg-secondary-color border w-8 h-8 mx-1 rounded-sm"
          onClick={() =>
            speakText(
              `${size} clicked, this will pick this item with a size of ${size}; Remember to use the buy now button to add to cart`
            )
          }
        >
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
    color,
    brand,
    size,
    productDetail = "Sollgen monollogi",
  }) {
    let sizeToBeRead;
    switch (size) {
      case "XM":
        sizeToBeRead = "extra small";
        // return sizeToBeRead;
        break;
      case "SM":
        sizeToBeRead = "small";
        break;
      case "L":
        sizeToBeRead = "Large";
        break;
      case "XL":
        sizeToBeRead = "extra large";
        break;
      case "M":
        sizeToBeRead = "medium";
        break;

      default:
        sizeToBeRead = "large";
    }

    return (
      <div className="max-w-[180px] p-1 ">
        <div
          className="bg-no-repeat bg-cover bg-center items-center flex justify-center md:min-h-[12v] rounded-none"
          onClick={() => {
            setSource(imageSource);
            setOpenModal(true);
            handleSizeClick("lg");
            speakText(
              `product clicked. This product tagged: ${productDetail} is a ${color} dress produced by ${brand}. It's Size is ${sizeToBeRead} and it is sold for ₦${price}.`
            );
          }}
          style={{
            height: height,
            padding: 29,
            // width: width,
            width: "45vw",
            backgroundImage: `url(/assets/${imageSource})`,
          }}

          // src={`/assets/${imageSource}`}
          // alt={`${imageSource} image`}
          // className="shrink-0"
        />
        <Flex className="flex-row justify-between">
          <span>
            <h2 className="fontPoppinsBold font-[700] text-[14px]">
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
        <Text
          className="pageHeading dark:text-white"
          onClick={() => speakText(`You are on the Home page,  ${heading}`)}
        >
          {heading}
        </Text>
        <div className="flex gap-x-2">
          <Link
            href="/cart"
            onClick={() =>
              speakText("Cart icon clicked, redirecting to cart page")
            }
          >
            <Image
              width={22}
              height={22}
              src={Buy}
              alt=""
              className="h-12 bg-secondary-color w-12 rounded-full p-2.5 shrink-0 text-gray-400 ml-2 cursor-pointer"
            />
          </Link>
          <Link
            href={"/profile"}
            onClick={() =>
              speakText("Profile icon clicked, redirecting to Profile page")
            }
          >
            <Image
              width={50}
              height={50}
              src={Profile}
              alt=""
              className="h-12 w-12 shrink-0 text-gray-400 ml-2 cursor-pointer"
            />
          </Link>
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
            name="search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[75vw] h-[41px] shrink-0 rounded-[180px] border border-[#090909]"
          />
          <Image
            width={24}
            height={24}
            src={Filter}
            alt=""
            onClick={async () => {
              await speakText(
                "opening filter,In this filter screen there are options like brand, size, color where you can determine how you would like the products to be rendered. After selecting from the options you prefer, click the generate button to proceed. "
              );
              setDisplay("filter");
            }}
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
            onClick={() => {
              setProductDisplay("Trending");
              speakText("Displaying Trending products");
            }}
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
            onClick={() => {
              setProductDisplay("New Arrivals");
              speakText("Displaying New Arrivals ");
            }}
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
            onClick={() => {
              setProductDisplay("others");
              speakText("Displaying other products");
            }}
          >
            <Text className="text-center text-[18px] fontPoppins line-height-normal">
              Others
            </Text>
          </button>
        </section>

        {/* <main className="grid grid-cols-2 mt-4 flex-1 w-full">
          {products.map(
            ({ imageSource, width, height, price, color, brand, size }) => (
              <>
                <RenderStock
                  imageSource={imageSource}
                  width={width}
                  height={height}
                  price={price}
                  color={color}
                  brand={brand}
                  size={size}
                />
              </>
            )
          )}
        </main> */}
        
        <main className="grid grid-cols-2 mt-4 flex-1 w-full">
          {filteredProducts.map(
            ({
              imageSource,
              width,
              height,
              price,
              color,
              brand,
              size,
              productDetail,
            }) => (
              <RenderStock
                key={imageSource}
                imageSource={imageSource}
                width={width}
                height={height}
                price={price}
                color={color}
                brand={brand}
                size={size}
                productDetail={productDetail}
              />
            )
          )}
        </main>
      </>
    );
  }

  const Circle = ({ isActiveCircle, color }) => {
    return (
      <span
        style={{ backgroundColor: color }}
        onClick={() => {
          setActiveCircle(isActiveCircle);
          speakText(
            `${color} clicked, this will pick the cloth displayed with a color of ${color} when adding to cart`
          );
        }}
        className={`${
          activeCircle == isActiveCircle ? `bg-[${color}]` : "bg-transparent"
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
      <div className="dark:bg-black dark:text-silver min-w-screen ease-in-out duration-1000 min-h-screen pb-8">

        <Carousel
          imageSelected={source}
          modalState={() => {
            setOpenModal(false);
          }}
        />
        <section className="px-2 min-w-full">
          <Flex className="items-center justify-between px-1 ">
            <Text
              onClick={() => speakText("sollgen Monologi")}
              className="normalTextBold"
            >
              Sollgen Monologi
            </Text>
            <Text className="normalText" onClick={() => speakText("₦1200")}>
              ₦1200
            </Text>
          </Flex>

          <div onClick={() => speakText(`${dummyText} ${dummyText}`)}>
            <Text className="normalText">
              {dummyText}
              <br />
              {dummyText}
            </Text>
          </div>

          <Flex className="flex-row items-center justify-between my-2">
            <span className=" flex items-center justify-between pb-1 h-12">
              {sizes.map((size, index) => (
                <FilterBySize key={index} size={size} />
              ))}
            </span>
            <div className="flex gap-x-2.5">
              <Circle isActiveCircle="one" color="red" />
              <Circle isActiveCircle="two" color="purple" />
              <Circle isActiveCircle="three" color="green" />
            </div>
          </Flex>

          <Flex w={"40vw"} direction={"row"} className="gap-x-3 items-center">
            <button
              className="btn btn-outline-success"
              onClick={() => setNumberOfOrderedItems(numberOfOrderedItems + 1)}
            >
              <TbPlus />
            </button>
            <p className="text-center pt-2.5">{numberOfOrderedItems}</p>
            <button
              className="btn btn-outline-danger rounded-none"
              onClick={() => setNumberOfOrderedItems(numberOfOrderedItems - 1)}
            >
              <TbMinus />
            </button>
          </Flex>
          <div className="flex items-center justify-center mt-4 ">
            <button
              onClick={DisplayLoadingAnimation}
              className="bg-secondary-color w-1/2 h-8 rounded-sm normalTextBolder text-white"
            >
              Buy Now
            </button>
          </div>
        </section>
      </div>
    );
  }

  function DisplayLoadingAnimation() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    setIsConfirm(true);
  }

  function DisplaySuccessAnimation() {
    setIsSuccessful(true);
  }

  if (isLoading) {
    return <Loading />;
  }

  if (isSuccessful) {
    return (
      <SuccessFul
        stopAnimation={() => {
          Router.reload();
          setIsSuccessful(false);
        }}
      />
    );
  }

  if (confirm) {
    return (
      <ConfirmOrderDetails
        close={() => setIsConfirm(false)}
        showSuccessAnimation={(e) => {
          e.preventDefault();
          DisplaySuccessAnimation();
        }}
      />
    );
  }

  if (display == "filter") {
    return <FilterPage onPressFunc={() => setDisplay("none")} setFilterCriteria={setFilterCriteria} />;
  }
  if (openModal) {
    return <ModalPage />;
  }

  return (
    <div className="dark:bg-black  dark:text-silver  ease-in-out duration-1000 min-h-screen pb-14">
      <Navigation />
      <RenderHome />
    </div>
  );
}
Home.auth = true;
