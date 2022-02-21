import React, { useState } from "react";

import { useAuth } from "app/hooks";
import { DataForm } from "./DataForm";
import { ForgotPassword } from "./ForgotPassword";

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
    <div className="col-span-3 grid place-items-center">
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
