import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { createContext } from "react";
import Head from "next/head";

import { Article } from "app/components";
import { Footer } from "@components/Footer";
import { Navbar } from "@components/Navbar";
import { MemoizedNavbar } from "@components/Navbar/MemoizedNavbar";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookie = context.req.cookies.auth;

  if (cookie) {
    return {
      props: {
        status: "SUCCEED",
      },
    };
  }

  return {
    props: {
      status: "FAILED",
    },
  };
};

export const LoginStatusContext = createContext("");

const Home: NextPage = ({
  status,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  return (
    <main>
      <Head>
        <title>Article Home Page</title>
      </Head>

      <LoginStatusContext.Provider value={status}>
        <Navbar>
          <MemoizedNavbar />
        </Navbar>
      </LoginStatusContext.Provider>

      <Article />

      <Footer />
    </main>
  );
};

export default Home;
