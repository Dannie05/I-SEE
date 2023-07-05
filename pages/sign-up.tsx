import React, { useState } from "react";
import Image from "next/image";
import axios from "axios"
import Router from "next/router";
import apple from "../public/images/apple.png";
import microphone from "../public/images/microphone.png";
import google from "../public/images/google.png";
import line from "../public/images/line.png";
import { signIn, signOut, useSession } from 'next-auth/react'
import {useFormik} from "formik"
const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    // validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => { values = await Object.assign(values)
    console.log(values)
  }
  })

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
    re_password: "",
    username: "",
    referer: "",
  });

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  function handleSignIn (e){
    e.preventDefault();
    signIn("credentials",{email,password,username,callbackUrl:"/test"})
    setEmail("");
    setPassword("");
    setUsername("")
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post("/api/auth/testSignUp", {email,username,password});
    const { data } = response;
    const { user } = data;
    if (user !== null) {
      // alert({
      //   title: 'User created successfully',
      //   description: data.error,
      //   status: 'success',
      //   duration: 5000,
      //   isClosable: true,
      //   position: "top",
      //   size: { width: '300', height: '200' },
      //   variant: 'top-accent'
      // });
      alert("User created successfully")
      const res = await signIn("credentials", {
        email,password,username,
        // password: user.password,
        // username:user.username,
        redirect: false,
        callbackUrl:"/test"
      });
      alert(`status is :,${ res.status}`)
      if (res.ok === true && res.status === 200) {
        // alert({
        //   title: 'Sign in success',
        //   description: 'Sign in of new user successful',
        //   status: 'success',
        //   duration: 5000,
        //   isClosable: true,
        //   position: "top",
        //   size: { width: '300', height: '200' },
        //   variant: 'top-accent'
        // });
        alert("Sign in success")
        Router.push("/test");
        return;
      }
      console.log(res.status)
    } else {
      // alert({
      //   title: 'User creation Failed',
      //   description: data.error,
      //   status: 'warning',
      //   duration: 5000,
      //   isClosable: true,
      //   position: "bottom",
      //   size: { width: '300', height: '200' },
      //   variant: 'top-accent'
      // });
      alert("User creation Failed")
      return;
    }
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    //Getting value from useRef()
    // const email = emailRef.current.value;
    // const password = passwordRef.current.value;
    //Validation
    if (!email || !email.includes('@') || !password) {
        console.log('Invalid details');
        return;
    }
    //POST form values
    const res = await fetch('/api/auth/testSignUp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    });
    //Await for data for any desirable next steps
    const data = await res.json();
    console.log(data);
};

  return (
    <div className="flex items-center justify-center h-screen ">
      <form className="bg-white shadow-md rounded pt-6 pb-8 mb-4 md:px-12 px-5 mx-5 sm:w-1/2 md:w-1/3" onSubmit={handleSignIn}>
        <div className="mb-4">
          <h2 className="text-center font-bold mb-4">SIGN IN</h2>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <div className="relative flex items-center">
            <input
              className="appearance-none border-b-2 rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter your email"
              {...formik.getFieldProps('email')} 
            />

            <Image
              width={200}
              height={150}
              src={microphone}
              alt=""
              className="h-5 w-5 text-gray-400 ml-2"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            username
          </label>
          <div className="relative flex items-center">
            <input
              className="appearance-none border-b-2 rounded w-full py-3 px-3 focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              {...formik.getFieldProps('username')} 
            />
            <Image
              width={200}
              height={150}
              src={microphone}
              alt=""
              className="h-5 w-5 text-gray-400 ml-2"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
             Password
          </label>
          <div className="relative flex items-center">
            <input
              className="appearance-none border-b-2 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="re-enter your password"
              {...formik.getFieldProps('password')} 
            />
            <Image
              width={200}
              height={150}
              src={microphone}
              alt=""
              className="h-5 w-5 text-gray-400 ml-2"
            />
          </div>
        </div>

        {/* <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Re-write Password
          </label>
          <div className="relative flex items-center">
            <input
              className="appearance-none border-b-2 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="passwordRepeat"
              type="password"
              onChange={(e) => setPasswordRepeat(e.target.value)}
              value={passwordRepeat}
              placeholder="re-enter your password"
            />
            <Image
              width={200}
              height={150}
              src={microphone}
              alt=""
              className="h-5 w-5 text-gray-400 ml-2"
            />
          </div>
        </div> */}
        <div className="flex-end text-right text-red-700 mt-1">
          Forgot Password
        </div>
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="appearance-none border border-green-400 rounded-sm checked:bg-green-500 checked:border-transparent h-4 w-4"
            />
            <label className="ml-2 text-gray-700">
              I agree to the{" "}
              <span className="text-[#138808]"> Terms & Conditions </span> and{" "}
              <span className="text-[#138808]">Privacy Policy </span>
            </label>
          </div>
        </div>
        <div className="flex items-center justify-center my-5">
          <button
            className="bg-[#138808] text-white font-bold py-2 px-24 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Account
          </button>
        </div>
        <div className="flex justify-evenly mt-5 mb-3">
          <p className="pt-3">
            <Image
              width={200}
              height={150}
              src={line}
              alt=""
              className="pb-3"
            />
          </p>
          <p className="font-bold px-3  leading-8 ">OR</p>
          <p className="pt-3">
            <Image width={200} height={150} src={line} alt="" />
          </p>
        </div>
        <div className="flex justify-evenly">
          <p className="">
            <Image width={50} height={50} src={apple} alt="" className="pb-3" />
          </p>
          <p>
            <Image width={50} height={50} src={google} alt="" />
          </p>
        </div>
        <div>
          <p>
            Don't have an account?{" "}
            <span className="text-[#138808] font-bold text-[16px]">
              Sign Up
            </span>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
