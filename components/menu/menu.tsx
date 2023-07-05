import "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/link";
import { BsArrowLeftShort, BsChevronDown, BsFillImageFill, BsPerson, BsReverseLayoutTextSidebarReverse, BsDashCircle } from "react-icons/bs";
import { AiFillEnvironment, AiOutlineBarChart, AiOutlineFileText, AiOutlineLogout, AiOutlineMail, AiOutlineSetting, AiOutlineBars, AiOutlineClose, AiFillAndroid } from "react-icons/ai";
import { RiDashboardFill, RiFundsFill, RiNotificationBadgeFill } from "react-icons/ri";
import { TbCurrencyNaira } from "react-icons/tb";
import { signOut } from "next-auth/react";
import { CgData } from "react-icons/cg";
import { HiUserCircle, HiUserGroup } from "react-icons/hi";
import { FaMoneyBillWave, FaPiggyBank } from "react-icons/fa";
import { MdGroups, MdOutlineNotificationsActive } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { FcMoneyTransfer } from "react-icons/fc";
import { useState } from "react";
import Style from "../../styles/utils.module.css";
import { GrTransaction } from "react-icons/gr";

export const Navmenu = [
    { title: "Dashboard", route: '/dashboard', id: 1 },
    { title: "Buy Airtime", icon: <TbCurrencyNaira />, route: '/links/buyAirtime', id: 2 },
    { title: "Buy Data", spacing: true, icon: <CgData />, route: '/links/buyData', id: 3 },
    { title: "Notifications", spacing: true, icon: <MdOutlineNotificationsActive />, route: '/links/Notifications', id: 4 },
    {
        title: "Transactions",
        icon: <GrTransaction/>,
        route: "/links/transactions",
        id:9
      },
    {
        title: "My Account",
        submenu: true,
        route: '/links/profile',
        icon: < HiUserCircle />,
        submenuItems: [
            { title: "Fund Wallet", icon: <FaPiggyBank />, routs: '/links/Account/fundWallet', id: '4i' },
            { title: "Withdraw Funds", icon: <GiTakeMyMoney />, routs: '/links/Account/Withdraw', id: '4ii' },
            { title: "Transfer Funds", icon: <FcMoneyTransfer />, routs: '/links/Account/Transfer', id: '4iii' },
        ],
    },
    { title: "Pay NEPA Bills", icon: <FaMoneyBillWave />, route: '/links/pay-nepa-bill', id: 5 },
    { title: "My Referals", icon: <MdGroups />, route: '/links/referals', id: 6 },
    { title: "Upgrade Levels", spacing: true, icon: <RiFundsFill />, route: '/Upgrade', id: 7 },
    { title: "Settings", icon: <AiOutlineSetting />, route: '/settings', id: 8 },

];

export default function Menu() {
    const [open, setOpen] = useState(true);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    return (
        <div className=" ease-in-out duration-700  pr-16  before:absolute inset-0 min-h-screen pb-8 -mt-2 relative ">

            {Navmenu.map((menus, index) => (
                <div key={index} >
                    <span className={`text-grey-color text-[21px] font-normal flex items-center gap-x-2 -pt-2 -ml-4 mt-2 hover:bg-silver rounded-2xl`}>
                        <li className="text-gray-600 block float-left dark:text-black">{menus.icon ? menus.icon : <RiDashboardFill />}</li>

                        <Link href={`${menus.route}`} key={menus.id} className={` mb-1 cursor-pointer font-[400] ${!open ? "hidden" : "flex"} relative`}>{`${menus.title}`}</Link>

                        {menus.submenu && open && (
                            <BsChevronDown className={`${submenuOpen && "rotate-180"} text-lg font-bold ease-in-out duration-100 sticky text-signature-color cursor-pointer mt-1`} onClick={() => {
                                setSubmenuOpen(!submenuOpen)
                            }} />

                        )}
                    </span>

                    {menus.submenu && submenuOpen && open && (
                        <ul className="hover:text-signature-color text-base pl-10 flex flex-col min-w-fit">
                            {menus.submenuItems.map(({ id, routs, icon, title }) => (
                                <li key={id}>
                                    <Link href={routs} className={` hover:bg-silver rounded-2xl text-[20px] items-center mb-3 hover:text-signature-color cursor-pointer ${Style.link} `} >
                                        {title}
                                    </Link>
                                </li>
                            )
                            )}
                        </ul>
                    )}
                </div>
            ))}
            <span className="flex flex-col items-center justify-center min-h-[10vh] ">
                <button className="btn btn-block btn-outline-danger sticky mt-3 left-[45%]" onClick={() => signOut()}>Log out</button>
            </span>
        </div>
    )
}

