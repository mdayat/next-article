import { ArticleComponentsProps } from "app/types";

const ArticleAuthor = ({
  children,
  className = "",
}: ArticleComponentsProps) => {
  return <address className={className}>{children}</address>;
};

export { ArticleAuthor };
