import React from "react";
import { useState } from "react";
import { FaUser, FaLock, FaEyeSlash, FaEye } from "react-icons/fa";

interface LoginFormProps {
  rememberMe: boolean;
  setRememberMe: React.Dispatch<React.SetStateAction<boolean>>;
  loginData: { username: string; password: string };
  handleInputForm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  submitForm: (event: React.FormEvent<HTMLFormElement>) => void;
  setForgotPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const DataForm = ({
  rememberMe,
  setRememberMe,
  loginData,
  handleInputForm,
  submitForm,
  setForgotPassword,
}: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form
      className="w-[90vw] sm:w-[70vw] md:w-[55vw] lg:w-full h-fit place-self-center rounded-lg p-4 bg-white"
      method="POST"
      onSubmit={submitForm}
    >
      <fieldset>
        <h2 className="text-blue-600 font-poppins font-bold text-center mb-8 text-base lg:text-lg lg:mb-10">
          Login to read more articles
        </h2>
      </fieldset>

      <fieldset className="flex justify-between items-center mb-3.5 lg:mb-6">
        <i>
          <FaUser className="text-blue-600 self-center" />
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
          <FaLock className="text-blue-600 self-center" />
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
            className="absolute right-[12px]"
            onClick={() =>
              showPassword ? setShowPassword(false) : setShowPassword(true)
            }
          >
            {showPassword ? (
              <i className="text-sm lg:text-base">
                <FaEye />
              </i>
            ) : (
              <i className="text-sm lg:text-base">
                <FaEyeSlash />
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
          className="w-full font-poppins bg-blue-600 text-white font-bold py-1 rounded-md hover:bg-blue-700 duration-300 ease-in-out drop-shadow-xl text-sm xl:text-base"
        >
          Sign In
        </button>
      </fieldset>
    </form>
  );
};

export { DataForm };
