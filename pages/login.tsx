import "bootstrap/dist/css/bootstrap.min.css";
import { useState, FormEventHandler, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import Router from "next/router";
import Link from "next/link";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import Image from "next/image";
import Head from "next/head";
import apple from "../public/images/apple.png";
import microphone from "../public/images/microphone.png";
import google from "../public/images/google.png";
import line from "../public/images/line.png";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useToast } from "@chakra-ui/react";

export default function Login() {
  const toast = useToast();

  // const SpeechToText = () => {

  const { status } = useSession();
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [synth, setSynth] = useState(null);
  const [recognition, setRecognition] = useState(null);
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      Router.replace("/dashboard");
    }
  }, [status]);
  const [error, setError] = useState(null);
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const login: FormEventHandler<HTMLFormElement> = async (e: any) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: details.email,
      password: details.password,
      redirect: false,
    });
    if (res.ok === true && res.status === 200) {
      Router.push("/dashboard");
    } else if (res.ok === false && res.status === 401) {
      console.log("error:", res.error);
      setError(`${res.error}: Check credentials and try again`);
      setTimeout(() => {
        setError(null);
      }, 15000);
    }
  };
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setDetails({ ...details, [name]: value });
  };

  useEffect(() => {
    if ("SpeechRecognition" in window) {
      const recognition = new window.SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = false;
      setRecognition(recognition);
    }
  }, []);

  const handleSpeechToText = () => {
    if (recognition) {
      recognition.start();
      setIsListening(true);
    }
  };

  //   useEffect(() => {
  //     if (recognition) {
  //       recognition.onresult = (event) => {
  //         const transcript = event.results[0][0].transcript;
  //         setDetails({ ...details, password: transcript });
  //         console.log(transcript)
  //         setIsListening(false);
  //       };
  //     }
  //   }, [recognition, details]);

  useEffect(() => {
    if ("speechSynthesis" in window) {
      const synth = window.speechSynthesis;
      setSynth(synth);
    }

    if ("SpeechRecognition" in window) {
      const recognition = new window.SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = false;
      setRecognition(recognition);
    }
  }, []);

  const speakText = (text) => {
    if (synth && synth.speaking) {
      synth.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
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
    <div className="ease-in-out duration-700  before:absolute inset-0 min-h-screen dark:bg-black dark:text-silver">
      <div className="my-0 mx-[5px] md:p-[70px] py-[70px] ">
        <Head>
          <title>Login</title>
        </Head>

        <div className="login">
          <h2></h2>
          <div className="form justify-center items-center mx-5 ">
            <form
              className="bg-gray-800 text-black font-medium text-lg px-4 py-8 lg:w-2/5 w-1/2 my-2 max-sm:w-[90vw] max-md:w-2/3 bg-white pt-20 rounded-lg"
              method="post"
              onSubmit={login}
            >
              {error && (
                <p className="dark:text-tahiti text-red text-2xl alert">
                  {error}
                </p>
              )}
              <label
                className="block font-medium mb-2 -translate-x-3"
                htmlFor="email"
              >
                Email / Username
              </label>
              <div className="mb-4 ml-2 min-w-full border-b-2 border-b-[silver] relative flex items-center">
                <input
                  className="outline-none w-11/12 p-1 
                font-medium text-xl text-black"
                  type="text"
                  id="email"
                  name="email"
                  value={details.email}
                  onChange={handleChange}
                />
                <Image
                  width={200}
                  height={150}
                  src={microphone}
                  alt=""
                  // onClick={() => {
                  //   speakText(`${details.email}`);
                  // }}
                  onClick={() => {
                    // if (listenContinuously) {
                    //   // SpeechRecognition.stopListening();
                      toast({
                        title: 'listening',
                        status: 'success',
                        // duration: 5000,
                        isClosable: false,
                        position: "top",
                        size: { width: '300', height: '200' },
                        variant: 'top-accent'
                      });
                    // } else {
                    listenContinuously();
                    setInterval(()=>{
                      details.email = transcript;

                    },1000)
                    console.log(transcript);
                    // setTimeout(() => {
                    //   resetTranscript();
                    //   SpeechRecognition.stopListening();
                    // }, 10000);
                  }}
                  className="h-5 w-5 text-gray-400 ml-2 cursor-pointer"
                />
              </div>
              <div className="mb-4 ml-2 min-w-full ">
                <label
                  className="block font-medium mb-2 -translate-x-3"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="flex items-center justify-center border-b-2 border-b-[silver]">
                  <input
                    className=" text-black dark:text-metal font-medium text-xl w-full p-1 outline-none"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={details.password}
                    name="password"
                    onChange={handleChange}
                  />
                  <div
                    className="text-secondary-color "
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                  </div>
                  <Image
                    width={200}
                    height={150}
                    src={microphone}
                    alt=""
                    // onClick={() => {
                    //   speakText(`${details.password}`);
                    // }}                    
                    className="h-5 w-5 text-gray-400 ml-2 cursor-pointer"
                    onClick={() => {
                        toast({
                          title: 'listening',
                          status: 'success',
                          isClosable: false,
                          position: "top",
                          size: { width: '300', height: '200' },
                          variant: 'top-accent'
                        });
                      // } else {
                      listenContinuously();
                      details.password = transcript;
                      console.log(transcript);
                      // setTimeout(() => {
                      //   resetTranscript();
                      //   SpeechRecognition.stopListening();
                      // }, 10000);
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-center">
                <button
                  className="uppercase btn btn-sm border bg-secondary-color cursor-pointer text-white my-1.5 active:opacity-0 dark:text-white py-2 px-8 rounded-lg w-full"
                  style={{ letterSpacing: 1, backgroundColor: "#008000" }}
                >
                  Login
                </button>
              </div>
              <span className="">
                {/* <p> Not a member? <Link href='/signUp'>Sign Up</Link></p>
                                <p>Forgot Password? <Link href='links/resetPassword'>Reset password</Link></p> */}
                <div className="flex justify-evenly ">
                  <p className="pt-3 mt-3 -mb-2">
                    <Image
                      width={200}
                      height={150}
                      src={line}
                      alt=""
                      className="pb-3"
                    />
                  </p>
                  <p className="font-bold px-3 mt-3 ">OR</p>
                  <p className="pt-3 mt-3">
                    <Image width={200} height={150} src={line} alt="" />
                  </p>
                </div>
                <div className="flex justify-evenly">
                  <p className="">
                    <Image
                      width={50}
                      height={50}
                      src={apple}
                      alt=""
                      className="pb-3"
                    />
                  </p>
                  <p>
                    <Image
                      width={50}
                      height={50}
                      src={google}
                      alt=""
                      onClick={() => {
                        signIn("google", { callbackUrl: "/dashboard" });
                      }}
                    />
                  </p>
                </div>
                <div>
                  <p className={"sm:text-center self-center text-center"}>
                    Don&apos;t have an account ? <br />
                    <Link
                      href="/signUp"
                      className="text-[#138808] font-bold text-[16px]"
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
