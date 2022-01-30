import { NavbarLinks } from "../NavbarLinks";

const MemoizedNavbar = () => {
  return (
    <>
      <h1 className="font-bold uppercase font-patrickHand sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-6xl">
        Company
      </h1>
      <NavbarLinks
        ulClassName="flex justify-between items-center hidden md:flex"
        liClassName="text-sm font-poppins uppercase font-bold lg:text-base 3xl:text-xl hover:text-blue-600 duration-300 ease-in-out"
        btnClassName="font-poppins bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 duration-300 ease-in-out drop-shadow-xl md:ml-8 md:text-sm lg:ml-10 lg:text-base 2xl:ml-12 3xl:ml-14 3xl:text-xl"
      />
    </>
  );
};

export { MemoizedNavbar };
