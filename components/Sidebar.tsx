import { useState } from "react"
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai'
import Menu from "./menu/menu";
import Link from "next/link";
import { landingPageLink } from "../pages";

export default function Sidebar(
    {
        Authenticated
    }: {
        Authenticated?: boolean
    }
) {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
            {isOpen ? (
                <button type="button"
                    className="top-4 right-4 fixed"
                    onClick={() => { setIsOpen(!isOpen) }}>
                    <AiOutlineBars className="side-menu" />
                </button>

            ) :
                (

                    <button type="button" className="top-4 right-4 fixed z-10"
                        onClick={() => { setIsOpen(!isOpen) }}>
                        <AiOutlineClose
                            className="dark:text-black"
                        />
                    </button>
                )

            }

            <div className={`top-0 right-0 fixed bg-silver w-11/12 md:w-1/2 sm h-full p-6 ${isOpen ? "translate-x-full" : "translate-x-0"} ease-in-out duration-500 z-[9] `}>

                <div onClick={() => { setIsOpen(!isOpen) }} className="dark:text-black text-2xl">
                    {/* <Menu /> */}
                    {Authenticated ? (
                        <Menu />
                    ) : (
                        <nav className='flex flex-col'>
                            {landingPageLink.map(({ id, item, href }) => (
                                <a href={href} key={id} className='no-underline uppercase mr-4 hover:text-secondary-color font-medium text-base text-midnight'>{item}</a>
                            ))}
                            <button className='p-2 border uppercase rounded-md text-white btn active:opacity-0 ease-in-out mt-4'><Link href="/signUp" className='no-underline text-white w-full h-full'>Get started </Link></button>
                        </nav>


                    )}
                </div>
            </div>
        </>
    )
}