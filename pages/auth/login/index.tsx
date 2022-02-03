import { NextPage } from "next";

import { LoginForm } from "@components/Login";

const LoginPage: NextPage = () => {
  return (
    <div className="min-h-screen grid bg-gradient-to-r from-blue-600 to-blue-400">
      <h1 className="hidden lg:block font-patrickHand text-white lg:text-4xl xl:text-5xl 2xl-6xl 3xl:text-7xl place-self-center row-span-1">
        Explore and grasp the world with Company articles
      </h1>

      <LoginForm />
    </div>
  );
};

export default LoginPage;
