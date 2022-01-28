import { useState } from "react";

import { Button } from "@components/Button";
import { NavbarLinks } from "./NavbarComponents/NavbarLinks";

import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  const [btnCollapse, setBtnCollapse] = useState(false);

  const clickHandler = () => {
    btnCollapse ? setBtnCollapse(false) : setBtnCollapse(true);
  };

  return (
    <nav className="bg-gray-200 fixed top-0 left-0 right-0 z-10">
      <div className="w-11/12 mx-auto h-20 flex justify-between items-center">
        {children}

        <Button type="button" className="md:hidden" onClick={clickHandler}>
          {btnCollapse ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </Button>
      </div>

      {btnCollapse ? (
        <NavbarLinks
          ulClassName="w-11/12 lg:w-10/12 mx-auto flex flex-col justify-between h-32 md:hidden"
          liClassName="w-full font-poppins font-bold text-center first:mt-4 last:pb-6 hover:text-blue-600 duration-300 ease-in-out uppercase text-sm sm:text-base"
          btnClassName="w-full font-poppins bg-blue-600 text-white py-1.5 rounded-md select-none hover:bg-blue-700 duration-300 ease-in-out drop-shadow-xl sm:w-[calc(100%-15%)] text-sm sm:text-base"
        />
      ) : (
        ""
      )}
    </nav>
  );
};

export { Navbar };
