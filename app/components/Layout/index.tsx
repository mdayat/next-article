import { Footer, Navbar } from "..";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar>
        <Link href="/">
          <a>
            <h1 className="font-bold uppercase font-patrickHand sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-6xl">
              Company
            </h1>
          </a>
        </Link>

        <ul className="hidden md:flex justify-between items-center">
          <li className="font-poppins font-bold uppercase hover:text-blue-600 duration-300 ease-in-out text-sm lg:text-base 3xl:text-xl">
            <Link href="/article">
              <a>Articles</a>
            </Link>
          </li>

          <li>
            <Link href="/auth/login">
              <a className="block font-poppins rounded-md bg-blue-600 text-white hover:bg-blue-700 duration-300 ease-in-out hover:drop-shadow-xl py-1.5 px-3 md:ml-8 lg:ml-10 2xl:ml-12 3xl:ml-14 md:text-sm lg:text-base 3xl:text-xl">
                Sign In
              </a>
            </Link>
          </li>
        </ul>
      </Navbar>

      <main>{children}</main>

      <Footer />
    </>
  );
}

export { Layout };
