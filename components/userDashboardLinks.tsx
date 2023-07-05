import Image from "next/image"
import Router  from "next/router"
import { signOut } from "next-auth/react"
export function UserDashboardDownLinks({title, icon,route}) {
    return (
        <div className="flex hover:bg-silver
        hover:text-black rounded-md cursor-pointer">
          <Image
            src={icon}
            alt={`${icon} icon`}
            width={30}
            height={30}
          />{" "}
          &nbsp;
          <p onClick={()=>{Router.push(`${route}`)}}>{title}</p>
        </div>
    )
}
export function UserDashboardUpLinks({title, icon, route}) {
    return (
        <div className="flex mt-2.5 hover:bg-silver rounded-md cursor-pointer  hover:text-black">
        <Image
          src={icon}
          alt={`${icon} icon`}
          width={30}
          height={30}
        />
        &nbsp;
        <p onClick={()=>{Router.push(`${route}`)}} className="">{title}</p>
      </div>
    )
}
// "/dashboard#quickTxnTable"

