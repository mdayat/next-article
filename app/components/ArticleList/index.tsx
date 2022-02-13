import Link from "next/link";
import Image from "next/image";

import { articleListData } from "app/utils";

const ArticleList = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-2 lg:gap-4 xl:gap-6 2xl:gap-8 md:w-[95vw] xl:w-[90vw] mx-auto">
      {articleListData.map((article) => {
        return (
          <section
            className="bg-gray-200 p-2 sm:p-2.5 md:p-4 lg:p-6 xl:p-8 2xl:p-10 md:rounded-lg 2xl:rounded-xl w-full"
            key={article.title}
          >
            <figure>
              <Link href={article.source}>
                <a>
                  <Image
                    src={article.image}
                    alt={article.title}
                    layout="responsive"
                    placeholder="blur"
                    className="rounded-lg 2xl:rounded-xl"
                  />
                </a>
              </Link>
            </figure>

            <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-7">
              <Link href={article.source}>
                <a>
                  <h2 className="font-poppins font-bold hover:underline hover:duration-1000 hover:ease-in-out text-lg sm:text-xl lg:text-2xl 2xl:text-3xl lg:mb-2">
                    {article.title}
                  </h2>
                </a>
              </Link>

              <time
                dateTime={article.date}
                className="font-poppins underline text-xs lg:text-sm 2xl:text-base"
              >
                {article.date}
              </time>
            </div>

            <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-7">
              <p className="font-roboto text-sm lg:text-base 2xl:text-lg">
                {article.description}
              </p>

              <figure className="flex items-center justify-start mt-4 sm:mt-5 md:mt-6 lg:mt-7">
                <div className="relative w-[26px] h-[26px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px]">
                  <Image
                    src={article.authorProfile}
                    alt={article.authorName}
                    layout="fill"
                  />
                </div>

                <Link href={article.authorEmail} prefetch={false}>
                  <a className="block font-roboto font-bold text-center hover:underline hover:duration-1000 hover:ease-in-out ml-2 text-xs lg:text-sm 2xl:text-base">
                    {article.authorName}
                  </a>
                </Link>
              </figure>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export { ArticleList };
