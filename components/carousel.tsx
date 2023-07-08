import { useState } from "react";
import Image from "next/image";
import { RenderModalHeader } from "./modal";

export default function Carousel({imageSelected,modalState}) {
  const [activeItem, setActiveItem] = useState(0);

  const handlePrevClick = () => {
    setActiveItem((prevItem) => (prevItem === 0 ? 3 : prevItem - 1));
  };

  const handleNextClick = () => {
    setActiveItem((prevItem) => (prevItem === 3? 0 : prevItem + 1));
  };

  const handleIndicatorClick = (index) => {
    setActiveItem(index);
  };
const activeItemIndex=[0,1,2,3]
  function RenderCarouselImages({id, image}){
    return (
      <div
          className={`duration-700 ease-in-out ${
            activeItem === id ? "block" : "hidden"
          }`}
          data-carousel-item="active"
        >
          <div
          className="bg-no-repeat bg-cover bg-center"
          style={{
            height: 400,
            width: "100vw",
            backgroundImage: `url(/assets/${image})`,
          }}>
            <RenderModalHeader closeModalProp={modalState}/>

          </div> 
        </div>
    )
  }

  return (
    <div id="indicators-carousel" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-[491px] overflow-hidden rounded-lg md:h-96">
        {/* Item 1 */}
        {/* <div
          className={`duration-700 ease-in-out ${
            activeItem === 0 ? "block" : "hidden"
          }`}
          data-carousel-item="active"
        >
          <div
          className="bg-no-repeat bg-cover bg-center"
          style={{
            height: 491,
            width: "100vw",
            backgroundImage: `url(/assets/${image})`,
          }}>
            <p>hello world</p>

          </div> 
          <p>hello</p>
        </div> */}
        {activeItemIndex.map((_,index)=>(
          <RenderCarouselImages key={index} id={index} image={imageSelected}/>

        ))}
        {/* Item 2 */}
        {/* <div
          className={`duration-700 ease-in-out ${
            activeItem === 1 ? "block" : "hidden"
          }`}
          data-carousel-item
        >
          <Image
            width={100}
            height={100}
            src="/assets/blouse.png"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div> */}
                {/* <RenderCarouselImages id={1} image={"Vintage_shirt.jpg"}/> */}

        {/* Item 3 */}
        {/* <div
          className={`duration-700 ease-in-out ${
            activeItem === 2 ? "block" : "hidden"
          }`}
          data-carousel-item
        >
          <Image
            width={100}
            height={100}
            src="/assets/Vintage_shirt.jpg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div> */}
        {/* Item 4 */}
        {/* <div
          className={`duration-700 ease-in-out ${
            activeItem === 3 ? "block" : "hidden"
          }`}
          data-carousel-item
        >
          <Image
            width={100}
            height={100}
            src="/assets/Vintage_shirt.jpg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div> */}
        {/* Item 5 */}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-14 left-1/2">
        {activeItemIndex.map((index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === activeItem ? "bg-secondary-color" : "bg-[#333]"
            }`}
            aria-current={index === activeItem}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className=" hidden absolute top-0 left-0 z-30 items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev="3"
        onClick={handlePrevClick}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 right-0 z-30 hidden items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={handleNextClick}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
