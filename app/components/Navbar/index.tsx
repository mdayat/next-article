import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

import { useAuth } from "app/hooks";

import BarsIcon from "@icons/bars-solid.svg";
import CloseIcon from "@icons/xmark-solid.svg";

const Navbar = () => {
  const { logout } = useAuth();

  const [showNav, setShowNav] = useState(false);

  const [userStatus, setUserStatus] = useState<"SUCCEED" | "FAILED">("FAILED");

  useEffect(() => {
    const userStatusHandler = async () => {
      const { data } = await axios.get(
        "https://next-article-j9sorwru7-mdayat.vercel.app/api/user-status"
      );

      setUserStatus(data);

      return data;
    };

    userStatusHandler();
  }, []);

  return (
    <nav className="bg-gray-700 fixed top-0 left-0 right-0 z-10">
      <div className="w-11/12 mx-auto h-20 flex justify-between items-center">
        <h2>
          <Link href="/">
            <a className="block text-white font-bold uppercase font-patrickHand sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-6xl">
              Company
            </a>
          </Link>
        </h2>

        <ul className="hidden md:flex justify-between items-center">
          {userStatus === "SUCCEED" && (
            <li className="font-poppins font-bold text-white hover:text-gray-200 duration-300 ease-in-out uppercase ease text-sm lg:text-base 3xl:text-xl">
              <Link href="/article" prefetch={false}>
                <a>Articles</a>
              </Link>
            </li>
          )}

          {userStatus === "SUCCEED" ? (
            <li>
              <button
                type="button"
                onClick={logout}
                className="block font-poppins rounded-md border-2 border-blue-600 hover:bg-blue-600 hover:border-transparent text-white duration-300 ease-in-out py-1.5 px-3 md:ml-8 lg:ml-10 2xl:ml-12 3xl:ml-14 md:text-sm lg:text-base 3xl:text-xl"
              >
                Log out
              </button>
            </li>
          ) : (
            <li>
              <Link href="/auth/login">
                <a className="block font-poppins rounded-md border-2 border-blue-600 hover:bg-blue-600 hover:border-transparent text-white duration-300 ease-in-out py-1.5 px-3 md:ml-8 lg:ml-10 2xl:ml-12 3xl:ml-14 md:text-sm lg:text-base 3xl:text-xl">
                  Sign in
                </a>
              </Link>
            </li>
          )}
        </ul>

        <button
          type="button"
          className="md:hidden"
          aria-label="Show and Close Navbar"
          onClick={() => (showNav ? setShowNav(false) : setShowNav(true))}
        >
          <i>
            {showNav && <CloseIcon className="w-[14px] fill-white" />}

            <BarsIcon
              className={`${showNav && "hidden"} w-[14px] fill-white`}
            />
          </i>
        </button>
      </div>

      {showNav && (
        <ul
          className={`w-11/12 lg:w-10/12 mx-auto flex flex-col justify-between h-32 md:hidden ${
            userStatus !== "SUCCEED" && "grid place-items-center grid-cols-1"
          }`}
        >
          {userStatus === "SUCCEED" && (
            <li className="w-full font-poppin font-bold text-white hover:text-gray-200 text-center uppercase mt-4 text-sm sm:text-base">
              <Link href="/article" prefetch={false}>
                <a>Articles</a>
              </Link>
            </li>
          )}

          {userStatus === "SUCCEED" ? (
            <li className="pb-6">
              <button
                type="button"
                onClick={logout}
                className="block font-poppins text-center rounded-md select-none py-1.5 border-2 border-blue-600 hover:bg-blue-600 hover:border-transparent duration-300 ease-in-out text-white w-full sm:w-[90vw] mx-auto text-sm sm:text-base"
              >
                Log out
              </button>
            </li>
          ) : (
            <li className="pb-6 w-full sm:w-[90vw] mx-auto">
              <Link href="/auth/login">
                <a
                  className={`block font-poppins text-center rounded-md select-none py-1.5 border-2 border-blue-600 hover:bg-blue-600 hover:border-transparent duration-300 ease-in-out text-white text-sm sm:text-base`}
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
