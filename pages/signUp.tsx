import React from "react";
import Image from "next/image";
import microphone from "../public/images/microphone.png";
import apple from "../public/images/apple.png";
import google from "../public/images/google.png";
import line from "../public/images/line.png";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { signIn } from "next-auth/react";
import Router from "next/router";
import { Text, useToast } from "@chakra-ui/react";
import { BsApple, BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SignUp = () => {
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [isEmail, setIsEmail] = useState<boolean | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState("none");
  const [synth, setSynth] = useState(null);
  const [recognition, setRecognition] = useState(null);
  const [isListening, setIsListening] = useState(false);

  const [ref_data, setRefDAta] = useState<{
    exists: boolean | null;
    name: null | string;
  }>({ exists: false, name: null });
  const toast = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    re_password: "",
    first_name: "",
    last_name: "",
    phone: "",
    username: "",
    country: "",
    address: "",
  });

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = ({ target }) => {
    const { value, name } = target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const checkEmail = async ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
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
  // const checkUser = async ({ target }: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = target;
  //   if (value.length > 3) {
  //     try {
  //       const response = await axios.get<{ isValid: boolean | null }>(
  //         `/api/user/check-username?username=${value.toLowerCase()}`
  //       );
  //       setIsValid(response.data.isValid);
  //     } catch (error) {
  //       setIsValid(null);
  //     }
  //   } else {
  //     setIsValid(false);
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post("/api/create", formData);
    const { data } = response;
    const { user } = data;
    if (user != null) {
      toast({
        title: "User created successfully",
        description: data.error,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
        size: { width: "300", height: "200" },
        variant: "top-accent",
      });
      const res = await signIn("credentials", {
        email: user.email,
        password: user.password,
        redirect: false,
      });
      if (res.ok === true && res.status === 200) {
        toast({
          title: "Sign in success",
          description: "Sign in of new user successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
          size: { width: "300", height: "200" },
          variant: "top-accent",
        });
        Router.push("/dashboard");
        return;
      }
    } else {
      toast({
        title: "User creation Failed",
        description: data.error,
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
        size: { width: "300", height: "200" },
        variant: "top-accent",
      });
      return;
    }
  };

  const [message, setMessage] = useState("");
  const commands = [
    {
      command: "reset",
      callback: () => resetTranscript(),
    },
    {
      command: "shut up",
      callback: () => setMessage("I wasn't talking."),
    },
    {
      command: "Hello",
      callback: () => setMessage("Hi there!"),
    },
  ];
  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
  } = useSpeechRecognition({ commands });

  useEffect(() => {
    if (finalTranscript !== "") {
      console.log("Got final result:", finalTranscript);
    }
  }, [interimTranscript, finalTranscript]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log(
      "Your browser does not support speech recognition software! Try Chrome desktop, maybe?"
    );
  }
  const listenContinuously = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-GB",
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen  ">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded pt-6 pb-8 mb-4 md:px-12 px-5 mx-5 sm:w-1/2 md:w-1/3 max-sm:min-w-full"
      >
        <div className="mb-4">
          <h2 className="text-center font-bold mb-4">SIGN UP</h2>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <div className="relative flex items-center">
            <input
              className="appearance-none border-b-2 rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-medium text-lg"
              required
              type="email"
              onInput={checkEmail}
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
            />
            {isEmail !== null &&
              (isEmail ? (
                <FaCheckCircle color="green" />
              ) : (
                <FaTimesCircle color="red" />
              ))}
            <Image
              width={200}
              height={150}
              src={microphone}
              alt=""
              onClick={async () => {
                await resetTranscript();
                await listenContinuously();
                toast({
                  title: "listening",
                  status: "success",
                  duration: 2000,
                  isClosable: false,
                  position: "top",
                  size: { width: "300", height: "200" },
                  variant: "top-accent",
                });
                formData.email = transcript;
                console.log(transcript);
                // setTimeout(() => {
                //   resetTranscript();
                //   SpeechRecognition.stopListening();
                // }, 10000);
              }}
              className="h-5 w-5 text-gray-400 ml-2"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <div className="flex items-center justify-center border-b-2 border-b-[silver]">
            <input
              className="appearance-none  py-3 px-3 leading-tight font-medium text-lg w-full p-1 outline-none"
              required
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              name="password"
              placeholder="Password"
              value={formData.password}
            />
            <div className="text-secondary-color " onClick={toggleShowPassword}>
              {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
            </div>
            <Image
              width={200}
              height={150}
              src={microphone}
              alt=""
              className="h-5 w-5 text-gray-400 ml-2"
              onClick={async () => {
                await resetTranscript();
                await listenContinuously();
                toast({
                  title: "listening",
                  status: "success",
                  duration: 2000,
                  isClosable: false,
                  position: "top",
                  size: { width: "300", height: "200" },
                  variant: "top-accent",
                });
                formData.password = transcript;
                console.log(transcript);
              }}
            />
          </div>
          <></>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Re-write Password
          </label>
          <div className="flex items-center justify-center border-b-2 border-b-[silver]">
            <input
              className="appearance-none  py-3 px-3 leading-tight font-medium text-lg w-full p-1 outline-none"
              required
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              name="re_password"
              placeholder="Repeat password"
              value={formData.re_password}
            />
            <div className="text-secondary-color " onClick={toggleShowPassword}>
              {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
            </div>
            <Image
              width={200}
              height={150}
              src={microphone}
              alt=""
              className="h-5 w-5 text-gray-400 ml-2"
              onClick={async () => {
                await resetTranscript();
                await listenContinuously();
                toast({
                  title: "listening",
                  status: "success",
                  duration: 2000,
                  isClosable: false,
                  position: "top",
                  size: { width: "300", height: "200" },
                  variant: "top-accent",
                });
                formData.re_password = transcript;
                console.log(transcript);
              }}
            />
          </div>
        </div>
        <div className="flex-end text-right text-red-700 mt-1">
          Forgot Password
        </div>
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center">
            <input
              required
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ml-2 text-gray-700">
              I agree to the{" "}
              <span className="text-[#138808]"> Terms & Conditions </span> and{" "}
              <span className="text-[#138808]">Privacy Policy </span>
            </label>
          </div>
        </div>
        <div className="flex items-center justify-center my-3  min-w-full">
          <button
            type="submit"
            className="uppercase btn btn-sm border bg-secondary-color cursor-pointer  my-1.5 active:opacity-0 normalTextBolder rounded-lg w-full py-2 text-medium text-base"
            style={{ letterSpacing: 1, backgroundColor: "#6CB564" }}
          >
            Create account
          </button>
        </div>

        <div className="flex justify-evenly mt-5 mb-3">
          <p className="pt-3">
            <Image
              width={200}
              height={150}
              src={line}
              alt="line"
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
            <Image
              width={50}
              height={50}
              src={google}
              alt="google sign in "
              onClick={() => {
                signIn("google", { callbackUrl: "/dashboard" });
              }}
            />
          </p>
        </div>
        <div>
          <p className="text-center">
           Have an account?
            <Link href="/login" className="text-[#6CB564] mx-2 font-bold text-[16px] normalTextBolder">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
