import { AiOutlineClose } from "react-icons/ai";
import { Flex, Text } from "@chakra-ui/react";
import { FaChevronLeft } from "react-icons/fa";

export default function ConfirmOrderDetails({ close, showSuccessAnimation }) {
  function RenderHeader({ heading }) {
    return (
      <Flex className="gap-x-2 py-8 mb-3">
        <FaChevronLeft
          size={25}
          className="bg-transparent ml-3"
          onClick={close}
        />
        <Text className="pageHeading dark:text-white">{heading}</Text>
      </Flex>
    );
  }

  function RenderInput({ type, name, placeholder }) {
    return (
      <div className="w-full items-center flex justify-center flex-col ">
        <h3
          className="m
        py-2 normalTextBolder text-left flex self-start"
        >
          {placeholder}
        </h3>

        <input
          required
          type={type}
          name={name}
          placeholder={placeholder}
          className="my-3 h-10 text-black normalTextBolder rounded-md self-center w-[85%] bg-secondary-color"
        />
      </div>
    );
  }
  return (
    <div className="ease-in-out duration-700 overflow-none before:absolute inset-0 min-h-screen dark:bg-black dark:text-silver px-2">
      <RenderHeader heading="Confirm details" />

      <form onSubmit={showSuccessAnimation} className="items-center ">
        <RenderInput
          name="address"
          placeholder="Delivery Address"
          type="text"
        />
        <RenderInput name="phone" placeholder="Phone Number" type="text" />

        <span className="flex item-center justify-center w-full">
          <button
            type="submit"
            //   onClick={showSuccessAnimation}
            className="p-2 capitalize bg-secondary-color my-2.5 rounded-md text-lg w-1/2"
          >
            confirm
          </button>
        </span>
      </form>
    </div>
  );
}
