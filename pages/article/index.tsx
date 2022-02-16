import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import axios from "axios";

import { pageAuthCheck } from "app/utils";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userCheck = pageAuthCheck(context);

  if (!userCheck) {
    return {
      redirect: {
        statusCode: 302,
        destination: "/auth/login",
      },
    };
  }

  const { data } = await axios.get("http://localhost:3000/api/article/read", {
    headers: {
      cookie: userCheck,
    },
  });

  return {
    props: { data },
  };
};

const Article: NextPage = ({
  data,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  return (
    <article>
      <Head>
        <title>Article Page</title>
      </Head>
    </article>
  );
};

export default Article;
