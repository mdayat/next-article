import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";

import { CmsArticleLists } from "@components/Article";
import { getArticles } from "app/services";

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getArticles()) || [];

  return { props: { posts } };
};

const Article: NextPage = ({
  posts,
}: InferGetStaticPropsType<GetStaticProps>) => {
  return (
    <>
      <Head>
        <title>Article Page</title>
        <meta name="description" content="Premium Next JS Article" />
        <meta
          name="keywords"
          content="Next JS Advanced Topics, Trick And Tips"
        />
      </Head>

      <section className="w-full pt-40 pb-20 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-y-10 md:gap-2 lg:gap-4 xl:gap-6 2xl:gap-8 md:w-[95vw] xl:w-[90vw] mx-auto">
        {posts.map((post: any) => {
          return (
            <article
              key={post.articleID}
              className="bg-gray-200 p-2 py-4 sm:p-2.5 sm:py-5 md:p-4 lg:p-6 xl:p-8 md:rounded-lg 2xl:rounded-xl w-full"
            >
              <CmsArticleLists post={post} />
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Article;
