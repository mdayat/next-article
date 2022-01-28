import type { AppProps } from "next/app";
import Head from "next/head";

import { Navbar } from "@components/Navbar";
import { MemoizedNavbar } from "@components/Navbar/NavbarComponents/MemoizedNavbar";

import "../app/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Next Article" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar>
        <MemoizedNavbar />
      </Navbar>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
