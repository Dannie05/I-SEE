

import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { signIn } from "next-auth/react";
import Router from "next/router";
import { FcGoogle } from "react-icons/fc";
import {  BsApple, BsEyeFill, BsEyeSlashFill} from "react-icons/bs";
import Image from "next/image";
import { Text, useToast } from "@chakra-ui/react";

export default function SignUp() {
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [isEmail, setIsEmail] = useState<boolean | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [ref_data, setRefDAta] = useState<{
    exists: boolean | null;
    name: null | string;
  }>({ exists: false, name: null });
  const toast = useToast();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
    re_password: "",
    username: "",
    country:"",
    address:"",
  });

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = ({ target }) => {
    const { value, name } = target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const getReferal = async ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    if (value.length > 3) {
      try {
        const response = await axios.get<{
          exists: boolean | null;
          name: string | null;
        }>(`/api/user/get-referal?username=${value.toLowerCase()}`);
        setRefDAta(response.data);
      } catch (error) {
        setRefDAta(null);
      }
    } else {
      setRefDAta(null);
    }
  };
  const checkEmail = async ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const { value } = target;
    const isEmailValid = emailRegex.test(value);
    if (isEmailValid) {
      try {
        const response = await axios.get<{ isValid: boolean | null }>(
          `/api/user/check-email?email=${value}`
        );
        setIsEmail(response.data.isValid);
      } catch (error) {
        setIsEmail(null);
      }
    } else {
      setIsEmail(false);
    }
  };
  const checkUser = async ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    if (value.length > 3) {
      try {
        const response = await axios.get<{ isValid: boolean | null }>(
          `/api/user/check-username?username=${value.toLowerCase()}`
        );
        setIsValid(response.data.isValid);
      } catch (error) {
        setIsValid(null);
      }
    } else {
      setIsValid(false);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post("/api/create", formData);
    const { data } = response;
    const { user } = data;
    if (user != null) {
      toast({
        title: 'User created successfully',
        description: data.error,
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: "top",
        size: { width: '300', height: '200' },
        variant: 'top-accent'
      });
      const res = await signIn("credentials", {
        email: user.email,
        password: user.password,
        redirect: false,
      });
      if (res.ok === true && res.status === 200) {
        toast({
          title: 'Sign in success',
          description: 'Sign in of new user successful',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: "top",
          size: { width: '300', height: '200' },
          variant: 'top-accent'
        });
        Router.push("/dashboard");
        return;
      }
    } else {
      toast({
        title: 'User creation Failed',
        description: data.error,
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: "bottom",
        size: { width: '300', height: '200' },
        variant: 'top-accent'
      });
      return;
    }
  };
  return (
    <div className="ease-in-out duration-700 overflow-none before:absolute inset-0 min-h-screen dark:bg-black dark:text-silver pb-8 signupPage">
      <div className="flex flex-col items-center justify-center pt-10 min-h-screen  md:px-8 min-w-full">
        <div>
          {/* <Avatar size={'md'} src={'/images/recharge.jpg'} /> */}
          <Image src='/images/logo.png' alt='logo' height={80} className='rounded-full' width={180} />
        </div>
        {/* <div className="signup_image w-1/2 min-h-[70vh] inset-0 rounded-md mr-3 max-md:-my-20 max-sm:w-screen max-md:w-screen max-md:hidden"></div> */}

        <div className="lg:w-2/5 w-1/2 my-2 max-sm:w-[90vw] max-md:w-2/3 sm:px-10 py-8 text-black font-medium text-lg bg-white rounded-md">
          <Text letterSpacing={'1px'} className="text-center font-bold text-xl uppercase sm:-mb-6 linear">Create a secured Account</Text>
          <form
            onSubmit={handleSubmit}
            className="h-full inputBox max-md:px-4 md:mt-14 "
          >
            {/* <input
              required
              type="text"
              onChange={handleChange}
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              className="my-3 focus:outline rounded-md focus:border-none relative pt-0 sign focus:bg-[#efecec87]"
            />
            <input
              required
              type="text"
              onChange={handleChange}
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              className="my-3 focus:outline rounded-md focus:border-none relative pt-0 sign focus:bg-[#efecec87]"
            />
            <input
              required
              type="tel"
              onChange={handleChange}
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              className="my-3 focus:outline rounded-md focus:border-none relative pt-0 sign focus:bg-[#efecec87]"
            /> */}

             {/* <input
              required
              type="text"
              onChange={handleChange}
              name="country"
              placeholder="country"
              value={formData.country}
              className="my-3 focus:outline rounded-md focus:border-none relative pt-0 sign focus:bg-[#efecec87]"
            />

             <input
              required
              type="text"
              onChange={handleChange}
              name="address"
              placeholder="address"
              value={formData.address}
              className="my-3 focus:outline rounded-md focus:border-none relative pt-0 sign focus:bg-[#efecec87]"
            /> */}

            <div className='flex items-center'>
              <input
                required
                type="text"
                onChange={handleChange}
                name="username"
                placeholder="Username"
                onInput={checkUser}
                value={formData.username}
                className="my-3 focus:outline rounded-md focus:border-none relative pt-0 sign focus:bg-[#efecec87]"
              />
              {isValid !== null &&
                (isValid ? (
                  <FaCheckCircle color="green" />
                ) : (
                  <FaTimesCircle color="red" />
                ))}
            </div>
            <div className='flex items-center'>
              <input
                required
                type="email"
                onInput={checkEmail}
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
                className="my-3 focus:outline rounded-md focus:border-none relative pt-0 sign focus:bg-[#efecec87]"
              />
              {isEmail !== null &&
                (isEmail ? (
                  <FaCheckCircle color="green" />
                ) : (
                  <FaTimesCircle color="red" />
                ))}
            </div>
            {/* {ref_data !== null && ref_data.exists ? (
              <p className="my-3 focus:outline rounded-md focus:border-none relative pt-0 sign focus:bg-[#efecec87]">
                Your referer : {ref_data.name}{" "}
              </p>
            ) : (
              <p>Referer must be valid to proceed</p>
            )} */}
            {/* <div style={{ display: "flex", alignItems: "center" }}>
              <input
                required
                type="text"
                onChange={handleChange}
                onBlur={getReferal}
                name="referer"
                placeholder="Referer"
                value={formData.referer}
                className="my-3 focus:outline rounded-md focus:border-none relative pt-0 sign focus:bg-[#efecec87]"
              />
              {ref_data != null &&
                (ref_data.exists ? (
                  <FaCheckCircle color="green" />
                ) : (
                  <FaTimesCircle color="red" />
                ))}
            </div> */}
            <div className='flex items-center justify-center'>
              <div>
                <input
                  required
                  type={showPassword ? 'text' : 'password'}
                  onChange={handleChange}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  className="my-3 focus:outline rounded-md focus:border-none relative pt-0 sign focus:bg-[#efecec87]"
                />

                <input
                  required
                  type={showPassword ? 'text' : 'password'}
                  onChange={handleChange}
                  name="re_password"
                  placeholder="Repeat password"
                  value={formData.re_password}
                  className="my-3 focus:outline rounded-md focus:border-none relative pt-0 sign focus:bg-[#efecec87]"
                />
              </div>
              <div className="text-secondary-color border" onClick={toggleShowPassword}>{showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}</div>
            </div>


            {(isValid) ? (
              <button className="my-3 focus:outline rounded-md focus:border-none relative pt-0 sign uppercase w-fit border-none sticky left-1/3 btn-success btn ease-in-out duration-500">
                Sign Up
              </button>
            ) :
              (
                <button type="button" className="uppercase btn btn-sm border rounded-md hover:translate-y-[-2px] background cursor-pointer text-white my-1.5 px-6 active:opacity-0 -mr-6"
                  onClick={() => {
                    toast({
                      title: 'Incorrect Details',
                      description: 'Either Username or email is taken OR referer is incorrect, Check and try again',
                      status: 'warning',
                      duration: 5000,
                      isClosable: true,
                      position: "bottom",
                      size: { width: '300', height: '200' },
                      variant: 'top-accent'
                    })
                  }}>
                  Sign Up
                </button>
              )
            }
          </form>
        </div>
      </div>
      <p className="gap-1 flex flex-row items-center justify-center">
        Have an account already?
        <span className="bg-white w-fit p-1.5 rounded-md">
          <Link href="/login" className="w-fit">
            login
          </Link>
        </span>
      </p>
      <div className="mb-10 flex gap-2 text-3xl items-center justify-center icons">
        <p className="p-2 rounded-full bg-white">
          <FcGoogle />
        </p>
        <p className="p-2 rounded-full bg-white">
          <BsApple className="text-black" />
        </p>
      </div>
    </div>
  );
}
