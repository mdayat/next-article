import { request, gql } from "graphql-request";

const getRecentPosts = async (params: string | string[]) => {
  const query = gql`
    query RecentPosts($params: String!) {
      articles(
        orderBy: createdAt_ASC
        last: 3
        where: { articleSlug_not: $params }
      ) {
        articleID
        articleTitle
        articleImage {
          url(transformation: { document: { output: { format: webp } } })
        }
        articleDate
        articleSlug
        authorName
      }
    }
  `;

  const result = await request(
    process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!,
    query,
    { params }
  );

  return result.articles;
};

export { getRecentPosts };
