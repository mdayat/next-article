import { useContext } from "react";
import Link from "next/link";

import { useAuth } from "app/hooks";
import { LoginStatusContext } from "pages";

interface NavbarLinksProps {
  ulClassName?: string;
  liClassName?: string;
  linkClassName?: string;
}

const NavbarLinks = ({
  ulClassName = "",
  liClassName = "",
  linkClassName = "",
}: NavbarLinksProps) => {
  const { logout } = useAuth();

  const loginStatusContext = useContext(LoginStatusContext);

  return (
    <ul className={`flex justify-between ${ulClassName}`}>
      <li
        className={`text-sm font-poppins font-bold first:uppercase hover:text-blue-600 duration-300 ease-in-out ${liClassName}`}
      >
        <Link href="/article">
          <a>Articles</a>
        </Link>
      </li>

      <li className={liClassName}>
        {loginStatusContext === "FAILED" ? (
          <Link href="/auth/login">
            <a
              className={`block font-poppins bg-blue-600 text-white py-1.5 rounded-md hover:bg-blue-700 duration-300 ease-in-out hover:drop-shadow-xl ${linkClassName}`}
            >
              Sign In
            </a>
          </Link>
        ) : (
          loginStatusContext === "SUCCEED" && (
            <button
              className={`block font-poppins bg-blue-600 text-white py-1.5 rounded-md hover:bg-blue-700 duration-300 ease-in-out hover:drop-shadow-xl ${linkClassName}`}
              onClick={logout}
            >
              Sign Out
            </button>
          )
        )}
      </li>
    </ul>
  );
};

export { NavbarLinks };
