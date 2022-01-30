import { ArticleComponentsProps } from "app/types";

const ArticleText = ({ children, className = "" }: ArticleComponentsProps) => {
  return <p className={className}>{children}</p>;
};

export { ArticleText };
