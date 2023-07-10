import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function History() {
  function RenderHeader({ heading }) {
    return (
      <Flex className="justify-between pt-10">
        <Text className="pageHeading dark:text-white">{heading}</Text>
      </Flex>
    );
  }

  function RenderHistoryItems({ image }) {
    return (
      <Flex
        className="border-b-[0.1px] border-b-[#333] my-5"
        justifyContent={"space-between"}
      >
        <div
          className="w-20 h-12 shrink-0 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(/assets/${image})` }}
        />
        <span className="">
          <Text className="normalTextBolder -mb-0.5">In style exclusive</Text>
          <p className="normalText text-[12px]">Soligen monologi. </p>
        </span>
        <Text>₦1200</Text>
      </Flex>
    );
  }

  return (
    <div className="dark:bg-black overflow-y-scroll dark:text-silver  ease-in-out duration-1000 min-h-screen pb-14 px-3">
      <section>
        <RenderHeader heading="History" />
        <Text>Recent Transactions</Text>
        <RenderHistoryItems image={"blouse.png"} />
        <RenderHistoryItems image={"gown_cinderella.png"} />
        <RenderHistoryItems image={"Vintage_shirt.jpg"} />
      </section>

      <section>
      <Text className="normalTextBolder text-[18px] dark:text-white">Yesterday&apos;s Transactions</Text>

        <RenderHistoryItems image={"blouse.png"} />
        <RenderHistoryItems image={"gown_cinderella.png"} />
        <RenderHistoryItems image={"Vintage_shirt.jpg"} />
      </section>
    </div>
  );
}
