import { NextPage } from "next";
import Head from "next/head";

import { Navbar } from "@components/Navbar";
import { MemoizedNavbar } from "@components/Navbar/MemoizedNavbar";

const Article: NextPage = () => {
  return (
    <article>
      <Head>
        <title>Article Page</title>
      </Head>

      <Navbar>
        <MemoizedNavbar />
      </Navbar>
    </article>
  );
};

export default Article;
