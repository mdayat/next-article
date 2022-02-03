import type { NextPage } from "next";
import Head from "next/head";

import { Article } from "app/components";
import { Footer } from "@components/Footer";
import { Navbar } from "@components/Navbar";
import { MemoizedNavbar } from "@components/Navbar/NavbarComponents/MemoizedNavbar";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Next Article</title>
      </Head>

      <Navbar>
        <MemoizedNavbar />
      </Navbar>

      <Article />

      <Footer />
    </main>
  );
};

export default Home;
