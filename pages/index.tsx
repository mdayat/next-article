import type { NextPage } from "next";
import Head from "next/head";

import { Article } from "app/components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Article Home Page</title>
        <meta />
      </Head>

      <Article />
    </>
  );
};

export default Home;
