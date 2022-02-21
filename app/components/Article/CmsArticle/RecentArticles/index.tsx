import Image from "next/image";
import Link from "next/link";

const RecentArticles = ({ recentArticles }: any) => {
  return (
    <aside className="mt-20 lg:mt-0 lg:w-full lg:col-span-1 place-self-center bg-gray-100 p-4 rounded-xl">
      <h2 className="font-poppins font-bold text-lg mb-6">
        Recent Article Posts
      </h2>

      <ul>
        {recentArticles.map((post: any) => {
          return (
            <li
              className="hover:bg-gray-300 duration-300 ease-in-out py-2 px-2 rounded-lg mt-2 first:mt-0"
              key={post.articleID}
            >
              <Link href={`/article/${post.articleSlug}`} prefetch={false}>
                <a className="flex">
                  <figure className="grid place-items-center">
                    <Image
                      src={post.articleImage.url}
                      alt={post.articleTitle}
                      width={52}
                      height={52}
                      className="rounded-xl"
                    />
                  </figure>

                  <div className="w-full flex justify-between">
                    <div className="flex flex-col justify-evenly ml-2">
                      <h3 className="font-roboto text-xs font-bold">
                        {post.articleTitle}
                      </h3>

                      <p className="font-roboto text-xs">{post.authorName}</p>
                    </div>

                    <time
                      dateTime={post.articleDate}
                      className="place-self-center font-roboto text-xs"
                    >
                      {post.articleDate}
                    </time>
                  </div>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export { RecentArticles };
