import { lorem } from "./"
import "bootstrap/dist/css/bootstrap.min.css"
import Sidebar from '../components/Sidebar'
import { useSession } from "next-auth/react"
import { useEffect, useState } from 'react'
import Router from 'next/router'


export default function Settings() {
  const { status, data: session } = useSession();
  useEffect(() => {
    if (status === "unauthenticated") {
      Router.replace("/login")
    }
    if (status === "authenticated") {
      setUserData(session)
    }
  }, [status, session]);
  const [userData, setUserData] = useState(session)
  const [userInfo, setUserInfo] = useState(session?.user);

  useEffect(() => {
    async function getUser() {
      if (userData !== undefined) {
        const account = await fetch(`/api/${userData?.user.email}/user`, {
          method: "GET",
          mode: "cors",
          referrerPolicy: "no-referrer",
          headers: {
            "Content-Type": "application/json",
          }
        })
        const user = await account.json();

        setUserInfo(user);
      }
    }
    getUser();

  }, [userData])


  if (status === "authenticated") {
    return (
      <div className=" ease-in-out duration-700  before:absolute inset-0 min-h-screen dark:bg-black dark:text-silver pb-8">
          <Sidebar Authenticated={true} />
        <div className="flex justify-center items-center h-screen text-center uppercase px-6 flex-col">
          <h2 className="linear">Settings page</h2>
          <p>{lorem}</p>
        </div>
      </div>

    )
  } else {
    return (
      <div>You must log in to continue</div>
    )
  }
}

