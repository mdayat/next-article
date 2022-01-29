import Link from "next/link";

import { Button } from "@components/Button";

interface NavbarLinksProps {
  ulClassName?: string;
  liClassName?: string;
  btnClassName?: string;
}

const NavbarLinks = ({
  ulClassName = "",
  liClassName = "",
  btnClassName = "",
}: NavbarLinksProps) => {
  return (
    <ul className={ulClassName}>
      <li className={liClassName}>
        <Link href="/article">
          <a>Articles</a>
        </Link>
      </li>

      <li className={liClassName}>
        <Button
          type="button"
          className={btnClassName}
          onClick={(e) => console.log(e)}
        >
          Sign In
        </Button>
      </li>
    </ul>
  );
};

export { NavbarLinks };
