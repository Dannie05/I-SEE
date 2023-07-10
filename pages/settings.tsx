import { lorem } from "./";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { Text, Button, Flex, HStack } from "@chakra-ui/react";
import Router from "next/router";
import Link from "next/link";
import Navigation from "../components/navigation";
import RenderHeader from "../components/renderHeader";
import { FaCog, FaHeart, FaChevronRight } from "react-icons/fa";

export default function Settings() {
  //   const { status, data: session } = useSession();
  //   useEffect(() => {
  //     if (status === "unauthenticated") {
  //       Router.replace("/login");
  //     }
  //     if (status === "authenticated") {
  //       setUserData(session);
  //     }
  //   }, [status, session]);
  //   const [userData, setUserData] = useState(session);
  //   const [userInfo, setUserInfo] = useState(session?.user);

  //   useEffect(() => {
  //     async function getUser() {
  //       if (userData !== undefined) {
  //         const account = await fetch(`/api/${userData?.user.email}/user`, {
  //           method: "GET",
  //           mode: "cors",
  //           referrerPolicy: "no-referrer",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         });
  //         const user = await account.json();

  //         setUserInfo(user);
  //       }
  //     }
  //     getUser();
  //   }, [userData]);

  //   if (status === "authenticated") {
  //     const settingsItems = [
  //       { name: "Profile", route: "/profile" },
  //       { name: "History", route: "/History" },
  //       { name: "Log out", route: "/Settings" },
  //     ];

  //   } else {
  //     return <div>You must log in to continue</div>;
  //   }
  // }

  const settingsItems = [
    { name: "Profile", route: "/profile" },
    { name: "History", route: "/History" },
  ];
  return (
    <div className="dark:bg-black overflow-y-scroll dark:text-silver  ease-in-out duration-1000 min-h-screen pb-14">
      <Navigation />
      <RenderHeader heading="Settings" />

      <Flex className="justify-center min-h-[50vh] pl-2 self-center flex-col ">
        {settingsItems.map(({ name, route }) => (
          <div
            key={name + route}
            className="w-[340px] flex flex-row justify-between border-b border-b-[#333] my-4"
          >
            <Link
              href={route}
              className="normalText flex self-end -mb-[3px] dark:text-white hover:text-secondary-color hover:dark:text-secondary-color"
            >
              {name}
            </Link>
            <FaChevronRight />
          </div>
        ))}
        <div className="w-[340px] flex flex-row justify-between border-b border-b-[#333] my-4">
          <p
            className="normalText flex self-end -mb-[3px] dark:text-white hover:text-secondary-color hover:dark:text-secondary-color"
            onClick={()=>signOut()}
          >
            {"Log Out"}
          </p>
          <FaChevronRight />
        </div>
      </Flex>
    </div>
  );
}
Settings.auth = true;
