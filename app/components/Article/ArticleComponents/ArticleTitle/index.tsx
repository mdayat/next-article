import Link from "next/link";

import { ArticleComponentsProps } from "app/types";

// import { ArticleComponentsProps } from "app/types/Article";

const ArticleTitle = ({
  children,
  className = "",
  href = "",
}: ArticleComponentsProps) => {
  return (
    <Link href={href}>
      <a>
        <h2 className={className}>{children}</h2>
      </a>
    </Link>
  );
};

export { ArticleTitle };
