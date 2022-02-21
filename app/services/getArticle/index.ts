import { request, gql } from "graphql-request";

const getArticle = async (params: string | string[]) => {
  const query = gql`
    query Article($params: String!) {
      article(where: { articleSlug: $params }) {
        articleImage {
          url(transformation: { document: { output: { format: webp } } })
        }
        articleTitle
        articleContent {
          raw
        }
        articleDate
        authorName
        authorImage {
          url(
            transformation: {
              document: { output: { format: webp } }
              image: { resize: { fit: crop, height: 92, width: 92 } }
            }
          )
        }
        authorEmail
      }
    }
  `;

  const result = await request(
    process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!,
    query,
    { params }
  );

  return result.article;
};

export { getArticle };
