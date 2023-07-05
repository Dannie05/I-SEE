import "bootstrap/dist/css/bootstrap.min.css"
import { useSession } from "next-auth/react"
import Home from "../user"
import axios from 'axios';
import Upgrade from "../../components/Upgrade"
import { IUser } from "../../interface"
import useSWR from 'swr'
import {signIn} from 'next-auth/react'
const userFetcher = async (url: string) => {
    const res = await axios.get(url);
    const data : IUser= res.data;
    return data;
}
export default function Dashboard() {
    const { status, data: session } = useSession();
    if (status === 'loading') return (<div className="text-4xl dark:text-silver text-tahiti"> Loading session...</div>)
    if (status === 'unauthenticated') return (<div className="flex text-center flex-col min-w-full  gap-3 items-center justify-center text-6xl text-tahiti min-h-screen dark:bg-black ease-in-out duration-700">You are logged out😢. <p className='text-secondary-color no-underline cursor-pointer' onClick={()=>{signIn()}}>Click to login</p></div>)
    if (status === "authenticated") {
        return (
            <div className=" ease-in-out duration-700  before:absolute inset-0 min-h-screen">
                <Interface userdata={session} />
            </div>
        )
    }
}

const Interface = ({ userdata }) => {
    const { data, isLoading, error } = useSWR(`/api/${userdata.user.email}/user`, userFetcher);
    if (isLoading) return (<div className="text-6xl dark:text-silver text-tahiti justify-center"> Loading user...</div>)
    if (error) return (<div className="text-6xl dark:text-silver text-tahiti">Could not fetch user</div>)
    return (<div className="w-screen md:w-[100%] h-screen overflow-x-hidden">       
            <Home userInfo={data} />
    </div>)
}