import React from "react";

import UserIcon from "@icons/user-solid.svg";

interface ForgotPasswordProps {
  setForgotPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const ForgotPassword = ({ setForgotPassword }: ForgotPasswordProps) => {
  return (
    <form className="w-full px-2 sm:px-6 md:px-10" method="POST">
      <fieldset className="mb-4">
        <h2 className="text-blue-600 font-poppins font-bold text-center text-lg lg:text-lg mb-5">
          Forgot your password?
        </h2>

        <p className="font-poppins font-bold text-blue-500 italic text-center text-xs lg:text-sm">
          Please enter your registered email. We will send you a link to update
          your password
        </p>
      </fieldset>

      <fieldset className="flex justify-between items-center mb-6 lg:mb-6">
        <i>
          <UserIcon className="fill-blue-600 w-[16px]" />
        </i>

        <input
          type="email"
          name="forgotPassword"
          placeholder="Email"
          required
          className="font-poppins px-4 py-1 w-[calc(100%-10%)] border-2 focus:border-2 focus:border-blue-600 rounded-lg outline-none text-xs xl:text-sm"
        />
      </fieldset>

      <fieldset className="flex justify-between items-center">
        <button
          type="button"
          className="bg-blue-600 text-white hover:bg-blue-700 duration-300 ease-in-out hover:drop-shadow-xl text-sm w-[45%] py-1 rounded-lg lg:text-base"
          onClick={() => setForgotPassword(false)}
        >
          Back
        </button>

        <button
          type="submit"
          className="bg-blue-600 text-white hover:bg-blue-700 duration-300 ease-in-out hover:drop-shadow-xl text-sm w-[45%] py-1 rounded-lg lg:text-base"
        >
          Send
        </button>
      </fieldset>
    </form>
  );
};

export { ForgotPassword };
