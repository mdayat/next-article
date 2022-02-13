import { LegacyRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { useDetectClick } from "app/hooks";

import BarsIcon from "@icons/bars-solid.svg";

interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  const { clickOutsideRef, isClicked, setIsClicked } = useDetectClick(false);

  return (
    <nav className="bg-gray-200 fixed top-0 left-0 right-0 z-10">
      <div className="w-11/12 mx-auto h-20 flex justify-between items-center">
        {children}

        <button
          type="button"
          className="md:hidden"
          onClick={() => (isClicked ? setIsClicked(false) : setIsClicked(true))}
          ref={clickOutsideRef as LegacyRef<HTMLButtonElement>}
        >
          <i>
            <Image src={BarsIcon} alt="Bars Icon" width={14} height={14} />
          </i>
        </button>
      </div>

      {isClicked && (
        <ul className="w-11/12 lg:w-10/12 mx-auto flex flex-col justify-between h-32 md:hidden">
          <li className="w-full font-poppins font-bold text-center uppercase mt-4 hover:text-blue-600 duration-300 ease-in-out text-sm sm:text-base">
            <Link href="/article">
              <a>Articles</a>
            </Link>
          </li>

          <li className="pb-6">
            <Link href="/auth/login">
              <a className="block font-poppins text-center rounded-md select-none py-1.5 bg-blue-600 text-white hover:bg-blue-700 duration-300 ease-in-out hover:drop-shadow-xl w-full sm:w-[90vw] mx-auto text-sm sm:text-base">
                Sign In
              </a>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export { Navbar };
