import { LegacyRef, useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

import { useAuth, useDetectClick } from "app/hooks";

import BarsIcon from "@icons/bars-solid.svg";
import CloseIcon from "@icons/xmark-solid.svg";

const Navbar = () => {
  const { logout } = useAuth();

  const { clickOutsideRef, isClicked, setIsClicked } = useDetectClick(false);

  const [userStatus, setUserStatus] = useState<"SUCCEED" | "FAILED">("FAILED");

  useEffect(() => {
    const userStatusHandler = async () => {
      const { data } = await axios.get("http://localhost:3000/api/user-status");

      setUserStatus(data);

      return data;
    };

    userStatusHandler();
  }, []);

  return (
    <nav className="bg-gray-200 fixed top-0 left-0 right-0 z-10">
      <div className="w-11/12 mx-auto h-20 flex justify-between items-center">
        <h2>
          <Link href="/">
            <a className="block font-bold uppercase font-patrickHand sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-6xl">
              Company
            </a>
          </Link>
        </h2>

        <ul className="hidden md:flex justify-between items-center">
          {userStatus === "SUCCEED" && (
            <li className="font-poppins font-bold uppercase hover:text-blue-600 duration-300 ease-in-out text-sm lg:text-base 3xl:text-xl">
              <Link href="/article">
                <a>Articles</a>
              </Link>
            </li>
          )}

          {userStatus === "SUCCEED" ? (
            <li>
              <button
                type="button"
                onClick={logout}
                className="block font-poppins rounded-md bg-blue-600 text-white hover:bg-blue-700 duration-300 ease-in-out hover:drop-shadow-xl py-1.5 px-3 md:ml-8 lg:ml-10 2xl:ml-12 3xl:ml-14 md:text-sm lg:text-base 3xl:text-xl"
              >
                Log out
              </button>
            </li>
          ) : (
            <li>
              <Link href="/auth/login">
                <a className="block font-poppins rounded-md bg-blue-600 text-white hover:bg-blue-700 duration-300 ease-in-out hover:drop-shadow-xl py-1.5 px-3 md:ml-8 lg:ml-10 2xl:ml-12 3xl:ml-14 md:text-sm lg:text-base 3xl:text-xl">
                  Sign in
                </a>
              </Link>
            </li>
          )}
        </ul>

        <button
          type="button"
          className="md:hidden"
          onClick={() => (isClicked ? setIsClicked(false) : setIsClicked(true))}
          ref={clickOutsideRef as LegacyRef<HTMLButtonElement>}
        >
          <i>
            {isClicked && <CloseIcon className="w-[14px] fill-gray-800" />}

            <BarsIcon
              className={`${isClicked && "hidden"} w-[14px] fill-gray-800`}
            />
          </i>
        </button>
      </div>

      {isClicked && (
        <ul
          className={`w-11/12 lg:w-10/12 mx-auto flex flex-col justify-between h-32 md:hidden ${
            userStatus !== "SUCCEED" && "grid place-items-center grid-cols-1"
          }`}
        >
          {userStatus === "SUCCEED" && (
            <li className="w-full font-poppins font-bold text-center uppercase mt-4 hover:text-blue-600 duration-300 ease-in-out text-sm sm:text-base">
              <Link href="/article">
                <a>Articles</a>
              </Link>
            </li>
          )}

          {userStatus === "SUCCEED" ? (
            <li className="pb-6">
              <button
                type="button"
                onClick={logout}
                className="block font-poppins text-center rounded-md select-none py-1.5 bg-blue-600 text-white hover:bg-blue-700 duration-300 ease-in-out hover:drop-shadow-xl w-full sm:w-[90vw] mx-auto text-sm sm:text-base"
              >
                Log out
              </button>
            </li>
          ) : (
            <li className="pb-6 w-full sm:w-[90vw] mx-auto">
              <Link href="/auth/login">
                <a
                  className={`block font-poppins text-center rounded-md select-none py-1.5 bg-blue-600 text-white hover:bg-blue-700 duration-300 ease-in-out hover:drop-shadow-xl text-sm sm:text-base`}
                >
                  Sign in
                </a>
              </Link>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export { Navbar };
