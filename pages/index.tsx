import { NextPage } from "next";
import Head from "next/head";

import { HeroArticle } from "@components/Article";
import { ListArticle } from "@components/Article";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Article Home Page</title>
        <meta name="description" content="Next JS Article" />
        <meta
          name="keywords"
          content="Pre Rendering Next JS, Static Generation Next JS, Server Side Rendering Next JS, Data Fetching Next JS, Api Routes Next JS"
        />
      </Head>

      <HeroArticle />
      <ListArticle />
    </>
  );
};

export default Home;
