import { useState } from 'react'
import Image from 'next/image';

export const internetServiceProviders = [
    { networkName: "mtn", imageLocation: "/assets/mtn.jpg" },
    { networkName: "airtel", imageLocation: "/assets/airtel.png" },
    { networkName: "glo", imageLocation: "/assets/glo.png" },
    { networkName: "9mobile", imageLocation: "/assets/9mobile.png" }
]

export default function SelectNetwork({ networkName, imageLocation }) {
    const [activeNetwork, setactiveNetwork] = useState("none");
    return (
        <div className={`biller-${networkName}  ${networkName === activeNetwork ? "activeBiller" : " "
            }`} onClick={() => {
                setactiveNetwork(networkName);
            }}>
            <Image src={imageLocation} alt='icon' width={50} height={50} className='rounded-full mt-0.5' />
        </div>
  )
}
