import { FaUser, FaLock } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

import IsoflatIcon from "@icons/isoflat.svg";

const LoginForm = () => {
  return (
    <div className="grid lg:grid-cols-2 m-auto lg:pb-36">
      <figure className="hidden lg:block">
        <Image src={IsoflatIcon} alt="IsoFlatIcon" />
      </figure>

      <form
        action=""
        className="w-[90vw] sm:w-[55vw] lg:w-full h-fit place-self-center rounded-lg p-4 bg-white"
        method="POST"
      >
        <fieldset>
          <h2 className="text-blue-600 font-poppins font-bold text-center mb-8 text-base lg:text-lg lg:mb-10">
            Login to read more articles
          </h2>
        </fieldset>

        <fieldset className="flex justify-between items-center mb-3.5 lg:mb-6">
          <FaUser className="text-blue-600 self-center" />

          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username or Email"
            className="font-poppins px-4 py-1 w-[calc(100%-10%)] border-2 focus:border-2 focus:border-blue-600 rounded-lg outline-none text-xs xl:text-sm"
            required
          />
        </fieldset>

        <fieldset className="flex justify-between items-center mb-3.5 lg:mb-6">
          <FaLock className="text-blue-600 self-center" />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="font-poppins px-4 py-1 w-[calc(100%-10%)] border-2 focus:border-2 focus:border-blue-600 rounded-lg outline-none text-xs xl:text-sm"
            required
          />
        </fieldset>

        <fieldset className="flex justify-between items-center mb-6 lg:mb-8">
          <div className="flex justify-between items-center">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              className="cursor-pointer mr-1.5"
            />

            <label
              htmlFor="rememberMe"
              className="font-poppins text-blue-600 flex items-center select-none cursor-pointer text-xs xl:text-sm"
            >
              Remember me
            </label>
          </div>

          <Link href="#">
            <a className="font-poppins text-blue-600 hover:underline duration-300 ease-in-out text-xs xl:text-sm">
              Forgot password?
            </a>
          </Link>
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
    </div>
  );
};

export { LoginForm };
