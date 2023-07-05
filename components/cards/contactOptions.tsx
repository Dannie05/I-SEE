import { FiPhoneCall } from "react-icons/fi"
import { TbHome } from "react-icons/tb"
import { MdEmail } from "react-icons/md"
export const contactOpt = [
    { icon: <TbHome className="text-center" />, heading: 'Our Location', text: 'These button types will have interactive states. It is important for accessibilty that these with...' },
    { icon: <MdEmail />, heading: 'Email', email: 'example@stamnimart.com' },
    { icon: <FiPhoneCall />, heading: 'Phone no.', tel: 'xxxx-xxxx-xxxx-xxxx' },
]
export default function ContactOptions() {
    return (
        <div className=''>{contactOpt.map(({ heading, icon, text, tel, email }) => (
            <div key={heading} className="flex items-center justify-start
            flex-row no-underline max-w-full my-3 px-3 py-1 mx-2 rounded-md hover:text-bermuda">
                <div className="flex1 w-14 mr-1.5">
                    <span className="flex flex-col text-3xl text-secondary-color">{icon}</span>
                </div>
                <div className="flex2 text-left w-fit min-w-[15vw]" style={{letterSpacing:1}}>
                    <h1 className="font-medium uppercase text-xl">{heading}</h1>
                    <p className="" >{text}</p>
                    <span className='-mt-3' >
                        <a href={`mailto:${email}`}>{email}</a>
                        <span>{tel}</span>
                    </span>
                </div>
            </div>





        ))}</div>
    )
}



