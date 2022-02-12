import { ReactElement } from "react";
import Head from "next/head";
import Image from "next/image";

import { LoginForm } from "@components/Login";

import LoginImage from "@images/login.jpeg";

function LoginPage() {
  return (
    <section className="h-screen bg-gray-50 grid lg:grid-cols-7">
      <Head>
        <title>Login Page</title>
        <meta name="description" content="Next JS Article Login Page" />
      </Head>

      <figure className="relative h-screen col-span-4 hidden lg:block">
        <Image
          src={LoginImage}
          alt="Login Image"
          placeholder="blur"
          objectFit="cover"
          layout="fill"
          priority
        />
      </figure>

      <LoginForm />
    </section>
  );
}

export default LoginPage;

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
