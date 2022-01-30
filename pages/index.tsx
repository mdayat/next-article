import type { NextPage } from "next";
import Head from "next/head";

import { Article } from "app/components";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Next Article</title>
      </Head>

      <Article />
    </main>
  );
};

export default Home;
