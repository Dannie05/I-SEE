// import RenderHeader from "../components/renderHeader"
import { useState } from "react";
import Navigation from "../components/navigation";
import BottomSheet from "../components/bottomSheet";
import Profile from "../public/images/avatar.png";
import { Flex, Text, Button } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { TbPlus } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import Loading from "../components/loading";

function RenderHeader({ heading }) {
  return (
    <Flex className="justify-between p-6 ">
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
  );
}

function RenderHistoryItems({ image }) {
  return (
    <div className="flex justify-center w-full">
      <Flex
        className="border-b-[0.1px] border-b-[#333] my-2 self-center md:flex-col mx-1"
        justifyContent={"space-between"}
      >
        <div
          className="w-40 mr-2 md:h-32 max-sm:h-[25vh] shrink-0 bg-center bg-no-repeat bg-cover max-sm:flex-[0.3] -ml-1"
          style={{ backgroundImage: `url(/assets/${image})` }}
        />
        <span className="max-sm:flex-[0.7] gap-y-[-15px]">
          <div className="flex justify-between gap-y-[-15px]">
            <Text className="normalTextBolder -mb-0.5">In style exclusive</Text>
            <Text className="border border-[#333] rounded-md p-1">
              <AiOutlineClose />
            </Text>
          </div>
          <p className="normalText text-[12px]">Soligen monologi. </p>
          <Flex className="gap-x-3 gap-y-[-15px]">
            <p className="flex items-center gap-x-3">
              color:{" "}
              <span className="bg-[#031E2C] rounded-full h-5 w-5 inline-block text-center" />
            </p>
            <p className="flex items-center gap-x-3">
              Size: <span className="">M</span>
            </p>
          </Flex>
          <p>Price: N1200</p>
          <p className="text-right -mt-8">QTY: 1</p>
        </span>
      </Flex>
    </div>
  );
}

export default function Cart() {
  const [isLoading, setIsLoading] = useState(false);

  function DisplayLoadingAnimation() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="ease-in-out duration-700 overflow-none before:absolute inset-0 min-h-screen dark:bg-black dark:text-silver pb-8 signupPage">
      <RenderHeader heading={"Cart"} />
      <Navigation />
      <BottomSheet load={() => DisplayLoadingAnimation()} />
      <section className=" pb-[50vh] overflow-y-scroll md:flex ">
        <RenderHistoryItems image="Vintage_shirt.jpg" />
        <RenderHistoryItems image="blouse.png" />
        <RenderHistoryItems image="combo_one.jpg" />
      </section>
    </div>
  );
}
