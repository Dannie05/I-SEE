import { ChakraProvider, Toast } from "@chakra-ui/react";
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import Head from "next/head";
import Router from "next/router";
import { SessionProvider, useSession } from "next-auth/react";
// import { siteTitle } from '../components/layout';
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  function handleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <ChakraProvider>
      <SessionProvider session={session}>
        {/* <Component {...pageProps} /> */}
        {Component.auth ? (
          <AuthenticateUser>
            <Component {...pageProps} />
          </AuthenticateUser>
        ) : (
          <>
            <Component {...pageProps} />
          </>
        )}
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
        </Head>

        <div
          className="text-left fixed
       top-16 left-0 rounded-full mr-1 px-0"
        >
          <button className="btn hover:border-tahiti" onClick={handleTheme}>
            {theme === "dark" ? (
              <FaSun className="text-silver" />
            ) : (
              <FaMoon className="text-black" />
            )}
          </button>
        </div>
      </SessionProvider>
    </ChakraProvider>
  );
}

function AuthenticateUser({ children }) {
  const { data: session, status } = useSession();
  const isThereUser = !!session?.user;
  const loadingState = status === "loading";

  useEffect(() => {
    if (!loadingState) {
      if (!isThereUser) {
        Router.push("/login");
      }
    }
  }, [isThereUser, loadingState]);

  if (loadingState) {
    return <p>loading</p>;
  }
  if (!loadingState && isThereUser) {
    return children;
  }
  return null;
}
