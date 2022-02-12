import { ReactElement } from "react";
import Head from "next/head";

import { LoginForm } from "@components/Login";

function LoginPage() {
  return (
    <div className="min-h-screen grid bg-gradient-to-r from-blue-600 to-blue-400">
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Next JS Article Login Page" />
      </Head>

      <h1 className="hidden lg:block font-patrickHand text-white lg:text-4xl xl:text-5xl 2xl-6xl 3xl:text-7xl place-self-center row-span-1">
        Explore and grasp the world with Company articles
      </h1>

      <LoginForm />
    </div>
  );
}

export default LoginPage;

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
