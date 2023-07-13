import { Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Loading from "./loading";
import Image from "next/image";

function RenderCartItemsWithPriceTag({ item, price }) {
  return (
    <Flex justifyContent={"space-between"} px={5}>
      <p className="normalText capitalize">{item}</p>
      <p>₦{price}</p>
    </Flex>
  );
}

function BottomSheet({load}) {

  return (
    <div className="fixed bottom-0 left-0 z-40 min-w-full h-[50vh] shadow-lg bg-white dark:bg-blend-darken  rounded-t-3xl justify-between flex border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="w-full font-medium mt-3 dark:text-black">
        <RenderCartItemsWithPriceTag item="subtotal" price={1200} />
        <RenderCartItemsWithPriceTag item="Delivery" price={1200} />

        <div className="w-11/12 mx-3">
          <hr />
        </div>

        <Flex justifyContent={"space-between"} px={5}>
          <p className="normalTextBolder capitalize">Total</p>
          <p className="normalTextBolder capitalize">₦2400</p>
        </Flex>

        <div className="flex items-center justify-center ">
          <button
            onClick={load}
            className="bg-secondary-color w-1/2 h-8 rounded-sm normalTextBolder text-white"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default BottomSheet;
