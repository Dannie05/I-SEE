import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css"
import Image from "next/image";
import { TbCurrencyNaira } from "react-icons/tb";
const packages = [
  { plan: "EasyPay Plan", fee: 1000, PointValue: 0, WelcomeBonus: 0 },
  { plan: "PowerPay Plan", fee: 5000, PointValue: 20, WelcomeBonus: 1000 },
  { plan: "SuperPay Plan", fee: 10000, PointValue: 40, WelcomeBonus: 2000 },
  { plan: "Family Plus Plan", fee: 20000, PointValue: 80, WelcomeBonus: 4000 },
  { plan: "BizProPay Plan", fee: 30000, PointValue: 120, WelcomeBonus: 6000 },
  {
    plan: "EnterprisePro Plan",
    fee: 50000,
    PointValue: 200,
    WelcomeBonus: 10000,
  },
];
{
  /* <Image alt='icon' src='/assets/icons/Bell.png' width={50} height={40}/> */
}
export default function Packages() {
  return (
    <div className="my-4 flex flex-wrap items-center justify-center gap-6 px-2 dark:bg-none ease-in-out">
      {packages.map(({ plan, PointValue, fee, WelcomeBonus }) => (
        <button
          className="
            no-underline border border-black h-fit p-3 max-sm:min-w-full max-md:w-[90vw] md:w-[42vw] m-2 rounded-md  hover:text-bermuda hover:bg-[#870E3A]"
          type={"button"}
          key={plan}
        >
          <h2 className="text-xl font-medium my-1">{plan}</h2>
          <div className="flex justify-between">
            <div className="flex1 capitalize text-left">
                <p className="flex flex-row">Fee :<TbCurrencyNaira className="text-3xl "/> {fee}</p>
                <p>Point value : {PointValue}</p>
                <p>welcome bonus : {WelcomeBonus}</p>
            </div>
            <div className="flex2 flex items-center justify-center">
             <Image alt='icon' src='/assets/icons/Bell.png' width={50} height={40}/> 
            </div>
          </div>
            <input type={"button"} className="btn btn-lg btn-block btn-outline-warning mt-2 " value={`Buy${plan} now`}/>
        </button>
      ))}
    </div>
  );
}
