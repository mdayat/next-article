import { request, gql } from "graphql-request";

const getArticles = async () => {
  const query = gql`
    query Articles {
      articles {
        articleID
        articleImage {
          url(transformation: { document: { output: { format: webp } } })
        }
        articleTitle
        articleDescription
        articleSlug
        articleDate
        authorName
        authorImage {
          url(
            transformation: {
              document: { output: { format: webp } }
              image: { resize: { height: 92, width: 92, fit: crop } }
            }
          )
        }
        authorEmail
      }
    }
  `;

  const result = await request(
    process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!,
    query
  );

  return result.articles;
};

export { getArticles };
