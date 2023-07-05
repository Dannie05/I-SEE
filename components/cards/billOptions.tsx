import { FiPhoneCall } from "react-icons/fi"
import { TbBulb } from "react-icons/tb"
import { CgData } from "react-icons/cg"
import { MdScreenSearchDesktop } from "react-icons/md"
export const bills =[
  {billItem:'Airtime', icon:<FiPhoneCall/>},
  {billItem:'Data', icon:<CgData/>},
  {billItem:'Cable TV', icon:<MdScreenSearchDesktop/>},
  {billItem:'Electricity Bill', icon:<TbBulb/>},
]
export default function BillsType () {
  return (
    <h5 className='mt-8 flex flex-wrap align-[center] justify-center sm:px-2'>{bills.map(({ billItem, icon }) => (
      <button className='flex items-center justify-center
       flex-col no-underline border border-black h-24 w-[40vw] m-2 px-2 rounded-md flex-wrap hover:text-bermuda' type={'button'} key={billItem}>
        <span className='flex flex-row'>{icon}</span>
        {billItem}</button>
    ))}</h5>
  )
}
  
  