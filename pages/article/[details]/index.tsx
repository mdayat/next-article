import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import { request, gql } from "graphql-request";

import { RecentArticles } from "@components/Article";
import { getArticle, getRecentPosts } from "app/services";
import { getArticleContent } from "app/utils";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = (await getArticle(params?.details!)) || [];

  const recentArticles = (await getRecentPosts(params?.details!)) || [];

  return {
    props: { post, recentArticles },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    query Articles {
      articles {
        articleSlug
      }
    }
  `;

  const { articles } = await request(
    process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!,
    query
  );

  return {
    paths: articles.map(({ articleSlug }: any) => ({
      params: { details: articleSlug },
    })),
    fallback: false,
  };
};

const ArticleDetails: NextPage = ({
  post,
  recentArticles,
}: InferGetStaticPropsType<GetStaticProps>) => {
  return (
    <>
      <Head>
        <title>Article Page</title>
        <meta name="description" content="Premium Next JS Article Details" />
        <meta name="keywords" content={post.articleTitle} />
      </Head>

      <section className="w-11/12 mx-auto pt-40 pb-20 lg:grid lg:grid-cols-3 lg:gap-4">
        <article className="bg-gray-100 rounded-lg lg:col-span-2">
          <figure className="overflow-hidden relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[450px]">
            <Image
              src={post.articleImage.url}
              alt={post.articleTitle}
              quality={100}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
              className="rounded-tr-lg rounded-tl-lg pointer-events-none select-none"
            />
          </figure>

          <h1 className="text-center font-poppins font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mt-5 md:mt-6 xl:mt-8 xl:mb-2 2xl:mb-4">
            {post.articleTitle}
          </h1>

          <div className="last:mb-0 p-4 lg:p-6">
            {post.articleContent.raw.children.map(
              (content: any, contentIndex: number) => {
                const children = content.children.map(
                  (item: any, itemindex: number) =>
                    getArticleContent(itemindex, item.text, item)
                );

                return getArticleContent(
                  contentIndex,
                  children,
                  content,
                  content.type
                );
              }
            )}
          </div>
        </article>

        <RecentArticles recentArticles={recentArticles} />
      </section>
    </>
  );
};

export default ArticleDetails;
