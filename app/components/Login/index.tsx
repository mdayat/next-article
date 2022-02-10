import React, { useState } from "react";
import Image from "next/image";

import { useAuth } from "app/hooks";
import { DataForm } from "./DataForm";
import { ForgotPassword } from "./ForgotPassword";

import IsoflatIcon from "@icons/isoflat.svg";

const LoginForm = () => {
  const { login, loginStatus } = useAuth();

  const [forgotPassword, setForgotPassword] = useState(false);

  const [rememberMe, setRememberMe] = useState(false);

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleInputForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setLoginData({ ...loginData, [event.target.name]: value });
  };

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await login({ ...loginData, rememberMe });
  };

  return (
    <div className="grid lg:grid-cols-2 m-auto lg:pb-36 lg:w-[90vw] xl:w-[75vw] 2xl:w-[60vw] 3xl:w-[55vw]">
      <figure className="hidden lg:block">
        <Image src={IsoflatIcon} alt="IsoFlatIcon" />
      </figure>

      {forgotPassword ? (
        <ForgotPassword setForgotPassword={setForgotPassword} />
      ) : (
        <DataForm
          rememberMe={rememberMe}
          setRememberMe={setRememberMe}
          loginData={loginData}
          handleInputForm={handleInputForm}
          submitForm={submitForm}
          setForgotPassword={setForgotPassword}
          loginStatus={loginStatus}
        />
      )}
    </div>
  );
};

export { LoginForm };
