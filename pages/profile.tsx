import Navigation from "../components/navigation";
import { Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { RiEdit2Line } from "react-icons/ri";
import profile from "../public/images/avatar.png";

export default function Profile() {
  function RenderHeader({heading}){
    return(
    <Flex className="justify-between p-6">
    <Text className="pageHeading dark:text-white">{heading}</Text>
  </Flex>
  )
  }

  function EditableInfoItems(props:{data:string,inputType:string,inputId?:any,inputName?:string,inputValue?:any, inputOnValueChange?:()=>void}){
    return(
      <div className="my-4">
        <p className="normalText ml-3 dark:text-white">{props.data}</p>
        <div className="ml-2 mx-3 border-b-2 border-b-[silver] relative flex items-center">
                <input
                  className="outline-none w-11/12 py-0.5 px-1 
                font-medium text-xl dark:text-white bg-transparent"
                  type={props.inputType}
                  id={props.inputId||props.data}
                  name={props.inputName}
                  placeholder={props.data}
                  // value={details.email}
                  // onChange={handleChange}
                />
                <RiEdit2Line/>
              </div>
      </div>
    )
  }


  return (
    <div className="dark:bg-black overflow-y-scroll dark:text-silver  ease-in-out duration-1000 min-h-screen pb-32">
      <Navigation />
      <RenderHeader heading="Profile"/>
      <section className="flex items-center justify-center">
      <Image
        width={70}
        height={76}
        src={profile}
        alt=""
        className="shrink-0 text-gray-400 ml-2 cursor-pointer"
      />
      </section>

      
      <EditableInfoItems data="First Name" inputType="text" inputName="firstName" />
      <EditableInfoItems data="Last Name" inputType="text" inputName="lastName" />
      <EditableInfoItems data="Email" inputType="email" inputName="email" />
      <EditableInfoItems data="Country" inputType="text" inputName="country" />
      <EditableInfoItems data="Phone Number" inputType="tel" inputName="phone" />
      <EditableInfoItems data="Delivery Address" inputType="text" inputName="Delivery_Address" />
    </div>
  );
}
Profile.auth = true;
