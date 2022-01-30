import { ArticleComponentsProps } from "app/types";

const ArticleDate = ({
  children,
  dateTime = "",
  className = "",
}: ArticleComponentsProps) => {
  return (
    <time dateTime={dateTime} className={className}>
      {children}
    </time>
  );
};

export { ArticleDate };
