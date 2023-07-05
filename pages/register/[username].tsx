import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { signIn } from "next-auth/react";
import Router from "next/router";
export default function Register({ username }) {
    const router = useRouter();

    const [isValid, setIsValid] = useState<boolean | null>(null);

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        password: '',
        re_password: '',
        username: '',
        referer: username
    });

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    const checkUser = async ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = target;
        if (value.length > 3) {
            try {
                const response = await axios.get<{ isValid: boolean | null }>(
                    `/api/check-username?username=${value}`
                );
                setIsValid(response.data.isValid);
            } catch (error) {
                setIsValid(null);
            }
        } else {
            setIsValid(false)
        }

    }
    const handleSubmit = async event => {
        event.preventDefault();
        const response = await axios.post("/api/create", formData);
        const { data } = response;
        const {user} = data;
        const res = await signIn("credentials", {
            email: user.email,
            password: user.password,
            redirect: false
        })
        if (res.ok === true && res.status === 200) {
            Router.push("/dashboard");
        }

    }

    return (
        <div className="ease-in-out duration-700 overflow-none before:absolute inset-0 min-h-screen dark:bg-black dark:text-silver pb-8">

            <h1 className="text-center font-medium text-2xl uppercase pt-4 linear">Sign up</h1>


            <div className="flex flex-col items-center justify-center md:flex-row md:px-8 min-w-full">

                <div className="signup_image w-1/2 min-h-[70vh] inset-0 rounded-md mr-3 max-md:-my-20 max-sm:w-screen max-md:w-screen">
                </div>

                <div className="w-1/2 max-md:w-[90vw]">
                    <form onSubmit={handleSubmit} className="h-full inputBox max-md:px-4 md:mt-14 ">
                        <input required type='text' onChange={handleChange} name="first_name" placeholder="First Name" value={formData.first_name} className='my-3 focus:outline rounded-md focus:border-none relative pt-0 sign' />
                        <input required type='text' onChange={handleChange} name="last_name" placeholder="Last Name" value={formData.last_name} className='my-3 focus:outline rounded-md focus:border-none relative pt-0 sign' />
                        <input required type='tel' onChange={handleChange} name="phone" placeholder="Your Tel" value={formData.phone} className='my-3 focus:outline rounded-md focus:border-none relative pt-0 sign' />
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input required type='text' name="username" onBlur={checkUser} onChange={handleChange} placeholder='Username' value={formData.username} className='my-3 focus:outline rounded-md focus:border-none relative pt-0 sign' />
                            {isValid !== null && (isValid ? <FaCheckCircle color="green" /> : <FaTimesCircle color="red" />)}
                        </div>
                        <input required type='email' onChange={handleChange} name="email" placeholder="Email" value={formData.email} className='my-3 focus:outline rounded-md focus:border-none relative pt-0 sign' />
                        <input required type='text' readOnly name="referer" value={formData.referer} className='my-3 focus:outline rounded-md focus:border-none relative pt-0 sign' />
                        <input required type='password' onChange={handleChange} name="password" placeholder="Password" value={formData.password} className='my-3 focus:outline rounded-md focus:border-none relative pt-0 sign' />
                        <input required type='password' onChange={handleChange} name="re_password" placeholder="Repeat password" value={formData.re_password} className='my-3 focus:outline rounded-md focus:border-none relative pt-0 sign' />

                        {isValid && <button className='my-3 text-center rounded-md  relative p-2 sign ease-in-out duration-500 uppercase w-fit sticky left-1/3 btn btn-block btn-success'>Sign Up</button>}
                    </form>
                </div>
            </div>
            <p className="gap-1 flex flex-row items-center justify-center ">Have an account already?<Link href='/login'>Login</Link></p>
        </div>
    )

}
export async function getServerSideProps(context) {
    const { username } = context.query;
    return {
        props: { username },
    };
}
