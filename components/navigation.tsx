import React, { useState, useEffect } from "react";
import { FaCog, FaHeart } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  const [activeNavLink, setActiveNavLink] = useState("Home");
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <>
      <nav>
        {isMobile ? (
          <div className="fixed bottom-0 left-0 z-50 min-w-full h-16 bg-secondary-color rounded-t-3xl justify-between flex border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600  flex-row items-center">
            <div className="grid h-full max-w-lg grid-cols-3 font-medium ">
              <Link
                href="/dashboard"
                type="button"
                onClick={() => setActiveNavLink("Home")}
                className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
              >
                <svg
                  className={`w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 ${
                    activeNavLink === "Home"
                      ? "text-primary-color"
                      : "text-gray-500"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 30 30"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                {/* <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Home</span> */}
              </Link>
              <Link
              href="/favorites"
                type="button"
                onClick={() => setActiveNavLink("Favorites")}
                className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
              >
                
                  <Image src={"/images/Heart.png"} width={30} height={30} alt="" className="-mt-3 "/>
                {/* <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Wallet</span> */}
              </Link>
              <Link
                href="/settings"
                type="button"
                onClick={() => setActiveNavLink("Settings")}
                className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
              >
                <svg
                  className={`w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 ${
                    activeNavLink === "Settings"
                      ? "text-primary-color"
                      : "text-gray-500"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 30 30"
                >
                  <FaCog size={23} color="black" fontSize={400} />
                </svg>
                {/* <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Settings</span> */}
              </Link>
            </div>
          </div>
        ) : (
          <div className="navbar-top  dark:bg-black dark:text-silver  ease-in-out duration-1000  flex flex-col hidden items-center justify-center">
            Welcome (Large Screen View)
          </div>
        )}

        {/* Rest of the home content */}
      </nav>
    </>
  );
};

export default Navigation;
