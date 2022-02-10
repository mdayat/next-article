import Link from "next/link";

import { NavbarLinks } from "../NavbarLinks";

const MemoizedNavbar = () => {
  return (
    <>
      <Link href="/">
        <a>
          <h1 className="font-bold uppercase font-patrickHand sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-6xl">
            Company
          </h1>
        </a>
      </Link>

      <NavbarLinks
        ulClassName="items-center hidden md:flex"
        liClassName="lg:text-base 3xl:text-xl"
        linkClassName="px-3 md:ml-8 md:text-sm lg:ml-10 lg:text-base 2xl:ml-12 3xl:ml-14 3xl:text-xl"
      />
    </>
  );
};

export { MemoizedNavbar };
