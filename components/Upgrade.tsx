import Router from 'next/router'
import { TbCurrencyNaira } from "react-icons/tb"
import { useToast } from "@chakra-ui/react";
import axios from 'axios';
import { signIn } from 'next-auth/react';
const data = [
    {
        "_id": "6409c98623ef878fb2c93937",
        "name": "customer",
        "amount": 1000,
        "welcome_bonus": 0,
        "point_value": 0,
        "__v": 0
    },
    {
        "_id": "6409d0ae40f1f10fdea8264c",
        "name": "basic",
        "amount": 5000,
        "welcome_bonus": 1000,
        "point_value": 20,
        "__v": 0
    },
    {
        "_id": "6409d2ebda29bcc4bf7baa0b",
        "name": "bronze",
        "amount": 10000,
        "welcome_bonus": 2000,
        "point_value": 40,
        "__v": 0
    },
    {
        "_id": "6409d56cda29bcc4bf7baa15",
        "name": "silver",
        "amount": 20000,
        "welcome_bonus": 4000,
        "point_value": 80,
        "__v": 0
    },
    {
        "_id": "6409d901da29bcc4bf7baa1f",
        "name": "gold",
        "amount": 30000,
        "welcome_bonus": 6000,
        "point_value": 120,
        "__v": 0
    },
    {
        "_id": "6409de33da29bcc4bf7baa25",
        "name": "diamond",
        "amount": 40000,
        "welcome_bonus": 8000,
        "point_value": 160,
        "__v": 0
    },
    {
        "_id": "6409e0d8da29bcc4bf7baa2b",
        "name": "platinum",
        "amount": 50000,
        "welcome_bonus": 10000,
        "point_value": 200,
        "__v": 0
    }
];
export default function Upgrade({ userInfo }) {
    if (userInfo === null) {
        return (
            <div className="m-3 ease-in-out duration-200  text-black pb-8">
                <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 min-w-full lg:mx-auto ">
                    {data.map((item) => <Card key={item._id} name={item.name} amount={item.amount} welcome={item.welcome_bonus} pv={item.point_value} />)}
                </div>
            </div>
        )
    } else {
        return (
            <div className="m-3 ease-in-out duration-200  text-black pb-8">
                <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 min-w-full lg:mx-auto ">
                    {data.map((item) => <Cardauth key={item._id} name={item.name} amount={item.amount} welcome={item.welcome_bonus} pv={item.point_value} user={userInfo} />)}
                </div>
            </div>
        )
    }
}

const Cardauth = ({ name, amount, welcome, pv, user }) => {
    const toast = useToast();
    return (
        <div className="shadow p-5 rounded-lg border-t-4 border-secondary-color bg-white ">
            <p className="uppercase text-sm font-medium text-gray-500 linear">
                {name}
            </p>

            <p className="mt-4 text-3xl text-gray-700 font-medium">
                {amount}
            </p>

            <p className="mt-4 font-medium text-gray-700">
                Features:
            </p>

            <div className="mt-8">
                <ul className="grid grid-cols-1 gap-4">
                    <li className="inline-flex max-sm:flex-col items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                        </svg>
                        Welcome bonus:
                        <p className="flex">
                            <TbCurrencyNaira className="text-2xl" />{welcome}
                        </p>
                    </li>

                    <li className="inline-flex items-center max-sm:flex-col text-gray-600">
                        <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                        </svg>

                        Point Value: {pv}
                    </li>

                    <li className="inline-flex items-center max-sm:flex-col text-gray-600 w-fit">
                        <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                        </svg>

                        Transaction bonuses: <p className="flex">
                            {name === 'customer' && "None"} {name === "gold" && "15%"} {name === "diamond" && "20%"} {name === 'platinum' && "25%"} {name === "basic" && "1%"} {name === 'bronze' && "5%"}{name === 'silver' && '10%'} </p>
                    </li>
                </ul>
            </div>

            <div className="mt-8">
                <button id={name} className="bg-secondary-color hover:bg-primary px-3 py-2 rounded-lg w-full text-white uppercase" onClick={
                    async (e: any) => {
                        let filter: any = data.filter((item) => item.name === e.target.id).pop();
                        filter.owner = user;
                        const response = await axios.post('/api/user/upgrade', filter);
                        const paid = response.data;
                        if (paid != null) {
                            toast({
                                title: 'Payment Success',
                                description: `Your Payment for upgrade to ${paid.account_type.toUpperCase()} was successful`,
                                status: 'success',
                                duration: 5000,
                                isClosable: true,
                                position: "top",
                                size: { width: '300', height: '200' },
                                variant: 'top-accent'
                            });
                            await Router.reload();
                            return;
                        } else {
                            toast({
                                title: 'Payment Failure',
                                description: `Your Payment for upgrade to ${filter.name.toUpperCase()} failed`,
                                status: 'warning',
                                duration: 5000,
                                isClosable: true,
                                position: "top",
                                size: { width: '300', height: '200' },
                                variant: 'top-accent'
                            });
                        }
                        // I'll restart by sending a request to buy package to api
                    }
                }>
                    pay
                </button>
            </div>
        </div>
    )
}
const Card = ({ name, amount, welcome, pv }) => {
    const toast = useToast();
    return (
        <div className="shadow p-5 rounded-lg border-t-4 border-secondary-color bg-white ">
            <p className="uppercase text-sm font-medium text-gray-500 linear">
                {name}
            </p>

            <p className="mt-4 text-3xl text-gray-700 font-medium">
                {amount}
            </p>

            <p className="mt-4 font-medium text-gray-700">
                Features
            </p>

            <div className="mt-8">
                <ul className="grid grid-cols-1 gap-4">
                    <li className="inline-flex max-sm:flex-col items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                        </svg>

                        Welcome bonus:
                        <p className="flex">
                            <TbCurrencyNaira className="text-2xl" />{welcome}
                        </p>                    </li>

                    <li className="inline-flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                        </svg>

                        Point Value: {pv}
                    </li>

                    <li className="inline-flex items-center text-gray-600">
                        <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                        </svg>

                        Transaction bonuses: {name === 'customer' && "None"} {name === "gold" && "15%"} {name === "diamond" && "20%"} {name === 'platinum' && "25%"} {name === "basic" && "1%"} {name === 'bronze' && "5%"}{name === 'silver' && '10%'}
                    </li>
                </ul>
            </div>

            <div className="mt-8">
                <button id={name} className="bg-secondary-color hover:bg-primary px-3 py-2 rounded-lg w-full text-white uppercase" onClick={() => { signIn() }}>
                    pay
                </button>
            </div>
        </div>
    )
}