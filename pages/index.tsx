import type { NextPage } from "next";
import Head from "next/head";

import { HeroArticle } from "@components/HeroArticle";
import { ArticleList } from "@components/ArticleList";
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

      <article className="pt-40 pb-20">
        <HeroArticle />
        <ArticleList />
      </article>
    </>
  );
};

export default Home;
