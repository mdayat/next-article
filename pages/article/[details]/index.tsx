import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Head from "next/head";
import Image from "next/image";
import { request, gql } from "graphql-request";

import { getArticle } from "app/services";
import { getArticleContent } from "app/utils";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = (await getArticle(params?.details!)) || [];

  return {
    props: { post },
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

          <h1 className="text-center font-poppins font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl my-5 md:my-6 xl:my-8 2xl:my-10">
            {post.articleTitle}
          </h1>

          <div className="px-4 pb-4 lg:p-6">
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

        <aside className="lg:col-span-1 place-self-center bg-gray-700 text-white p-4 rounded-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
          repellendus molestias aspernatur amet beatae esse nostrum accusamus,
          eius, deserunt consectetur, repellat laboriosam doloribus hic!
          Architecto iusto repellat voluptatum nam optio.
        </aside>
      </section>
    </>
  );
};

export default ArticleDetails;
