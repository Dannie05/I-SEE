import { useEffect, useState } from "react";
import {Text,Button} from "@chakra-ui/react"
import Router from "next/router"
import { signOut,  } from 'next-auth/react'
export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the viewport width is less than a certain threshold (e.g., 600px for mobile)
    const handleResize = () => {
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
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

  return (
    <div>
      {isMobile ? (
        <div className="navbar-bottom flex-1  dark:bg-black dark:text-silver  ease-in-out duration-1000 min-h-screen flex flex-col items-center ">
          <Text>Welcome</Text>
          <Button
              rounded={"full"}
              bg={"linear"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              className="bg-primary-color"
              onClick={() => {
                signOut()
              }}
            >
              Get started
            </Button>
        </div>
      ) : (
        <div className="navbar-top  dark:bg-black dark:text-silver  ease-in-out duration-1000 min-h-screen flex flex-col items-center justify-center">Welcome
         (Large Screen View)</div>
      )}

      {/* Rest of the home content */}
    </div>
  );
}
