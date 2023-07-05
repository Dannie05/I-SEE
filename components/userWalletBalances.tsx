import Image from "next/image"
import { TbCurrencyNaira } from "react-icons/tb"
import Link from "next/link"
import { currentdate } from "../utilities/date"
import Chart from "./piechart"

export default function WalletBalance({ balance, pv, referals }) {
  return (
    <div className=" ease-in-out overflow-x-hidden inset-0 bg-none text-black  max-sm:mt-12">
      {/* <div className="flex flex-col p-auto mt-1 ">

        <div className="flex flex-col overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-col gap-2 md:flex-row md:flex-wrap lg:flex-nowrap md:gap-3 lg:gap-[-3]" >
            <div className="inline-block px-3">
              <div className="md:w-80 h-56 max-w-xs overflow-hidden rounded-md shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col text-unset border border-[grey] justify-center bg-white text-black pl-2 text-justify" ><Image src='/assets/icons/icons8-coin-wallet-64.png' alt='icon' width={35} height={35} className='mb-2' />
                <p className="flex">Balance: <TbCurrencyNaira className="text-2xl" />{balance}</p>
                <button className="flex gap-x-1 my-1 w-fit outline outline-1 outline-secondary-color p-2 rounded-lg">
                  <Link href='links/Account/fundWallet'>Fund</Link>
                  <Image src='/assets/icons/Buy-Upgrade.png' width={25} height={25} alt='icon' className=" mt-0.5 " />
                </button>
              </div>
            </div>

            <div className="inline-block px-3 ">
              <div className="md:w-80 h-56 max-w-xs overflow-hidden rounded-md shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out px-3 py-2 text-black justify-center flex flex-col"              >
                <div className='flex justify-between max-sm:gap-x-2 gap-x-1'>
                  <div className='flex flex-col'>
                    <Image src='/assets/icons/download.png' alt='icon' width={35} height={35} className='mt-0.5' />
                    <h3 className="my-2">PV</h3>
                    <p className="my-1 font-bold" >{pv} points</p>
                  </div>

                  <div className='flex flex-col text-right items-center'>
                    <span className="text-right float-right mb-2" >
                      <Image src='/assets/icons/icons8-starburst-shape-64.png' alt='icon' width={35} height={35} className="float-right" />
                    </span>

                    <h3>Referals</h3>
                    <p className="flex flex-row my-0.5 font-bold">{referals.length}</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="inline-block px-3">
              <div className="w-[17rem] md:w-80 h-56 max-w-xs overflow-hidden rounded-md shadow-md bg-white text-black hover:shadow-xl transition-shadow duration-300 ease-in-out"             >
                <span className="flex justify-between px-2 ">
                  <h4 className="text-let">Activities</h4>
                  <p className="text-right bg-tranquil text-nowrap mt-1 text-white p-0.5 rounded-md">{currentdate}</p>
                </span>
                <Chart />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col bg-transparent m-auto p-auto">
        <div
          className="flex overflow-x-scroll pb-10 hide-scroll-bar"
        >
          <div
            className="flex flex-nowrap lg:ml-10 md:ml-20 ml-1 mt-3"
          >
            <div className="inline-block px-3">
              {/* <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div> */}
              <div className="md:w-80 h-36 w-[13rem] overflow-hidden rounded-md shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col text-unset border border-[grey] justify-center bg-none text-black pl-2 text-justify" ><Image src='/assets/icons/icons8-coin-wallet-64.png' alt='icon' width={35} height={35} className='mb-2' />
                <p className="flex">Balance: <TbCurrencyNaira className="text-2xl" />{balance}</p>
                <button className="flex gap-x-1 my-1 w-fit outline outline-1 outline-secondary-color p-2 rounded-lg">
                  <Link href='links/Account/fundWallet'>Fund</Link>
                  <Image src='/assets/icons/Buy-Upgrade.png' width={25} height={25} alt='icon' className=" mt-0.5 " />
                </button>
              </div>
            </div>
            <div className="inline-block px-3">
              {/* <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div> */}
              <div className="md:w-80 h-36 w-[15rem] max-w-xs overflow-hidden rounded-md shadow-md bg-none hover:shadow-xl transition-shadow duration-300 ease-in-out px-3 py-2 text-black justify-center flex flex-col"              >
                <div className='flex justify-between max-sm:gap-x-2 gap-x-1'>
                  <div className='flex flex-col'>
                    <Image src='/assets/icons/download.png' alt='icon' width={35} height={35} className='mt-0.5' />
                    <h3 className="my-2">PV</h3>
                    <p className="my-1 font-bold" >{pv} points</p>
                  </div>

                  <div className='flex flex-col text-right items-center'>
                    <span className="text-right float-right mb-2" >
                      <Image src='/assets/icons/icons8-starburst-shape-64.png' alt='icon' width={35} height={35} className="float-right" />
                    </span>

                    <h3>Referals</h3>
                    <p className="flex flex-row my-0.5 font-bold">{referals.length}</p>
                  </div>
                </div>

              </div>
            </div>
            <div className="inline-block px-3">
              {/* <div
              className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div> */}
              <div  className="w-[17rem] md:w-80 h-56 max-w-xs overflow-hidden rounded-md shadow-md bg-none text-black hover:shadow-xl transition-shadow duration-300 ease-in-out"             >
                <span className="flex justify-between px-2 ">
                  <h4 className="text-let">Activities</h4>
                  <p className="text-right bg-tranquil text-nowrap mt-1 text-white p-0.5 rounded-md">{currentdate}</p>
                </span>
                <Chart showOnUtilitiesPage="hello"/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div >

  )

}