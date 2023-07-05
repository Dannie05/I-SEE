
import { FaPiggyBank, FaFileInvoice, FaMoneyBillAlt } from "react-icons/fa"
import { TbCurrencyNaira, TbArrowsDoubleSeNw } from "react-icons/tb"
import { GiTakeMyMoney } from "react-icons/gi"
import { CgData } from "react-icons/cg"
import { GrScheduleNew } from "react-icons/gr"
import { FcIdea, FcMoneyTransfer } from "react-icons/fc"
import { VStack } from "@chakra-ui/react"

export const buttons = [
    { item: "Fund Wallet", id: 1, icon: <FaPiggyBank />, route: '/links/Account/fundWallet', balance: '2000' },
    { item: "Buy Airtime", id: 2, icon: <TbCurrencyNaira />, route: '/links/buyAirtime' },
    { item: "Transfer", id: 3, icon: <TbArrowsDoubleSeNw />, route: '/links/Account/Transfer' },
    { item: "withdraw", id: 4, icon: <GiTakeMyMoney />, route: '/links/Account/Withdraw' },
]

export const tableHeadings = [
    { heading: "Invoice ID" },
    { heading: "Account Name/Number" },
    { heading: "Date/Time" },
    { heading: "Transaction type" },
    { heading: "Amount" },
    { heading: "Status" },
    { heading: "Action" }
]
export const cards = [
    { item: "Buy Airtime", id: 1, icon: <FaPiggyBank />, route: "/links/buyAirtime" },
    { item: "Buy Data", id: 2, icon: <CgData />, route: "/links/buyData" },
    { item: "cable TV", id: 3, icon: <CgData />, route: "/links/buyData" },
    { item: "electric bills", id: 4, icon: <FcIdea />, route: "/links/pay-nepa-bill" },
    { item: "send money", id: 5, icon: <FcMoneyTransfer />, route: "/links/sendmoney" },
    // { item: "utility bills", id: 6, icon: <FaMoneyBillAlt />, route: "/links/utility" },
    // { item: "invoice", id: 7, icon: <FaFileInvoice />, route: "/links/invoice" },
    { item: "schedule payment", id: 8, icon: <GrScheduleNew />, route: "/links/schedule" }
    // { item: "All Withdrawals", id: 9 }
]

export const withdrawalSuccessInformation = [
    { item: "Amount", info: "16,000.00 NGN" },
    { item: "Fee", info: "8.00 NGN" },
    { item: "To", info: "Obiefuna Marcel" },
    { item: "Bank Name", info: "First Bank" },
    { item: "Account Number", info: "8159793032" },
    { item: "Completion time", info: "" }
]

export function HandleWithdrawalSuccessInformation({ item, info }) {
    return (
        <section className="flex items-center justify-between  mt-2.5 font-medium text-lg hover:bg-silver rounded-md cursor-pointer  text-black">
            <div className="" >
                {item}:
            </div>
            <div>
                {info}
            </div>
        </section>
    )
}



