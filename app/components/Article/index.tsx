import { ArticleList } from "./ArticleList";
import { HeroArticle } from "./HeroArticle";

const Article = () => {
  return (
    <article className="w-screen mx-auto pt-40">
      <HeroArticle />
      <ArticleList />
    </article>
  );
};

export { Article };
