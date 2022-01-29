import type { NextPage } from "next";
import Head from "next/head";

import { Article } from "app/components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next Article</title>
      </Head>

      <Article />
    </div>
  );
};

export default Home;
