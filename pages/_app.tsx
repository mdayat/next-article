import type { AppProps } from "next/app";
import Head from "next/head";

import { Navbar } from "@components/Navbar";
import { MemoizedNavbar } from "@components/Navbar/NavbarComponents/MemoizedNavbar";

import "../app/styles/globals.css";
import { Footer } from "@components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Next Article" />
        <link rel="icon" href="/assets/icons/favicon.ico" />
      </Head>

      <Navbar>
        <MemoizedNavbar />
      </Navbar>

      <Component {...pageProps} />

      <Footer />
    </>
  );
}

export default MyApp;
