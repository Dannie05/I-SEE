import {useState} from "react"
import Navigation from "./navigation";
import RenderHeader from "./renderHeader";
import { FaChevronLeft } from "react-icons/fa";
import microphone from "../public/images/microphone.png";
import Image from "next/image";
import { Text, Button, Box, Slider, SliderMark,SliderTrack, SliderThumb,SliderFilledTrack } from "@chakra-ui/react";

 export const sizes = ["XM", "S", "M", "L", "XL"];
 
export default function FilterPage({ onPressFunc }) {
  function FilterByBrandCheckList({ brand }) {
    return (
      <div className="my-2 ml-1">
        <span>
          <input
            id="link-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-secondary-color bg-primary-color border-gray-300 rounded focus:ring-primary-color dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="link-checkbox"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {brand}
          </label>
        </span>
      </div>
    );
  }

    const colors = [
        "#fff",
        "#200E32",
        "#635BFF",
        "#F8A8AB",
        "#490055",
        "#105F39",
        "#2521EE",
        "#3D2C00",
        "#D017EE",
        "#20ECA3",
        "#F8BD00",
        "#E33629",
    ];
  const brandNames = ["H&M", "Gucci", "Prada", "Levi's", "Zara", "Hermes"];

  function FilterBySize({ size }) {
    return (
      <div className="flex justify-evenly">
        <Button
          variant="outline"
          className="focus:text-black hover:bg-secondary-color"
        >
          {size}
        </Button>
      </div>
    );
  }

  function FilterByColor({ color }) {
    return (
      <div className="my-2.5 ml-1.5">
        <button style={{background:color}}   className={`w-5 h-5`} onClick={()=>console.log(color)}>
          {/* {color} */}
        </button>
      </div>
    );
  }

  function PriceSlider() {
    const [sliderValue, setSliderValue] = useState(50)
  
    const labelStyles = {
      mt: '2',
      ml: '-2.5',
      fontSize: 'sm',
    }
  
    return (
      <Box pt={6} pb={2}>
        <Slider colorScheme="green" aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)} onChangeEnd={(val) => console.log(val)}>
          <SliderMark value={5} {...labelStyles}>
            {/* 25% */}
            cheap
          </SliderMark>
          <SliderMark value={45} {...labelStyles}>
            {/* 50% */}
            moderate
          </SliderMark>
          <SliderMark value={85} {...labelStyles}>
            {/* 75% */}
            expensive
          </SliderMark>
          {/* <SliderMark
            value={sliderValue}
            textAlign='center'
            bg='blue.500'
            color='white'
            mt='-10'
            ml='-5'
            w='12'
          >
            {sliderValue}%
          </SliderMark> */}
          <SliderTrack className="bg-secondary-color">
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    )
  }
  

  return (
    <div className="dark:bg-black overflow-y-scroll dark:text-silver  ease-in-out duration-1000 min-h-screen pb-28 pt-4 ">
      <Navigation />
      <FaChevronLeft
        size={20}
        className="bg-transparent ml-3"
        onClick={onPressFunc}
      />
      <RenderHeader heading="Filter" />
      <section className="px-6">
        <Text className="normalText">Brand</Text>
        <div className="mb-4 min-w-full border border-[#333] relative flex items-center self-center pb-1 h-10">
          <input
            className="outline-none w-11/12  self-center pl-6  
                font-medium text-xl bg-transparent"
            type="text"
            id="email"
            name="email"
            //   value={details.email}
            //   onChange={handleChange}
          />
          <Image
            width={200}
            height={150}
            src={microphone}
            alt=""
            //   onClick={() => {
            //     speakText(`${details.email}`);
            //   }}
            className="h-5 w-5 mr-2.5 text-gray-400 cursor-pointer"
          />
        </div>

        <div className="grid grid-cols-2 mt-4">          
            {brandNames.map((brand, index) => (
              <FilterByBrandCheckList key={index} brand={brand} />
            ))}
        </div>

        {/*========================================== size =========================================*/}
        <div>
          <Text className="normalText my-3">Size</Text>
          <span className="mb-4 min-w-full flex items-center justify-between pb-1 h-12">
            {sizes.map((size, index) => (
              <FilterBySize key={index} size={size} />
            ))}
          </span>
        </div>
        {/*========================================== size =========================================*/}

        {/*========================================== COLOR =========================================*/}
        <div>
          <Text className="normalText">Color</Text>
          <span className="grid grid-cols-6 my-p4">
            {colors.map((color, index) => (
              <FilterByColor key={index} color={color} />
            ))}
          </span>
        </div>
        {/*========================================== COLOR =========================================*/}

        {/*========================================== Price Slider =========================================*/}
        <div>
          <Text className="normalText mt-2 -mb-1.5">Price</Text>
          <PriceSlider/>
        </div>
        {/*========================================== Price Slider =========================================*/}
      </section>
    </div>
  );
}
