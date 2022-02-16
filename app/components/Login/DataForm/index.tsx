import React from "react";
import { useState } from "react";

import UserIcon from "@icons/user-solid.svg";
import LockIcon from "@icons/lock-solid.svg";
import EyeIcon from "@icons/eye-solid.svg";
import EyeSlashIcon from "@icons/eye-slash-solid.svg";

interface LoginFormProps {
  rememberMe: boolean;
  setRememberMe: React.Dispatch<React.SetStateAction<boolean>>;
  loginData: { username: string; password: string };
  handleInputForm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  submitForm: (event: React.FormEvent<HTMLFormElement>) => void;
  setForgotPassword: React.Dispatch<React.SetStateAction<boolean>>;
  loginStatus: "SUCCEED" | "FAILED" | undefined;
}

const DataForm = ({
  rememberMe,
  setRememberMe,
  loginData,
  handleInputForm,
  submitForm,
  setForgotPassword,
  loginStatus,
}: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form
      className="w-full px-2 sm:px-6 md:px-10"
      method="POST"
      onSubmit={submitForm}
    >
      <fieldset>
        <h2 className="text-blue-600 font-poppins font-bold text-center mb-6 text-base lg:text-lg lg:mb-8">
          Login to read more articles
        </h2>
      </fieldset>

      {loginStatus === "FAILED" && (
        <fieldset>
          <label
            htmlFor="error"
            className="block text-red-500 font-poppins font-bold italic text-xs mb-2 text-center lg:text-sm lg:mb-3 2xl:mb-4 3xl:text-base animate-pulse"
          >
            Username or Password doesn&apos;t match
          </label>
        </fieldset>
      )}

      <fieldset className="flex justify-between items-center mb-3.5 lg:mb-6">
        <i>
          <UserIcon className="fill-blue-600 w-[16px]" />
        </i>

        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username or Email"
          className="font-poppins px-4 py-1 w-[calc(100%-10%)] border-2 focus:border-2 focus:border-blue-600 rounded-lg outline-none text-xs xl:text-sm"
          required
          autoComplete="off"
          value={loginData.username}
          onChange={handleInputForm}
        />
      </fieldset>

      <fieldset className="flex justify-between items-center mb-3.5 lg:mb-6">
        <i>
          <LockIcon className="fill-blue-600 w-[16px]" />
        </i>

        <div className="relative w-[calc(100%-10%)] text-right flex items-center">
          <input
            type={`${showPassword ? "text" : "password"}`}
            id="password"
            name="password"
            placeholder="Password"
            className="font-poppins px-4 py-1 w-full border-2 focus:border-2 focus:border-blue-600 rounded-lg outline-none text-xs xl:text-sm"
            required
            value={loginData.password}
            onChange={handleInputForm}
          />

          <button
            type="button"
            aria-label="Show and hidden password"
            className="absolute right-[12px]"
            onClick={() =>
              showPassword ? setShowPassword(false) : setShowPassword(true)
            }
          >
            {showPassword ? (
              <i>
                <EyeIcon className="fill-gray-800 w-[16px]" />
              </i>
            ) : (
              <i>
                <EyeSlashIcon className="fill-gray-800 w-[16px]" />
              </i>
            )}
          </button>
        </div>
      </fieldset>

      <fieldset className="flex justify-between items-center mb-6 lg:mb-8">
        <div className="flex justify-between items-center">
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            className="cursor-pointer mr-1.5"
            onClick={() =>
              rememberMe ? setRememberMe(false) : setRememberMe(true)
            }
            value={rememberMe ? "true" : "false"}
          />

          <label
            htmlFor="rememberMe"
            className="font-poppins text-blue-600 flex items-center select-none cursor-pointer text-xs xl:text-sm"
          >
            Remember me
          </label>
        </div>

        <button
          type="button"
          className="font-poppins text-blue-600 hover:underline duration-300 ease-in-out text-xs xl:text-sm"
          onClick={() => setForgotPassword(true)}
        >
          Forgot password?
        </button>
      </fieldset>

      <fieldset className="grid place-items-center">
        <button
          type="submit"
          className="w-full font-poppins border-2 border-blue-600 text-blue-600 font-bold py-1 rounded-md hover:bg-blue-700 hover:text-white duration-300 ease-in-out drop-shadow-xl text-sm xl:text-base"
        >
          Sign In
        </button>
      </fieldset>
    </form>
  );
};

export { DataForm };
