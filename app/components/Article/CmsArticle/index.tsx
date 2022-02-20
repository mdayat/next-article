import Image from "next/image";
import Link from "next/link";

const CmsArticle = ({ post }: any) => {
  return (
    <>
      <figure className="block relative h-[275px]">
        <Image
          src={post.articleImage.url}
          alt={post.articleTitle}
          priority
          layout="fill"
          objectPosition="center"
          className="rounded-lg 2xl:rounded-xl pointer-events-none select-none"
        />
      </figure>

      <h2>
        <Link href={`/article/${post.articleSlug}`} prefetch={false}>
          <a className="block font-poppins font-bold hover:underline hover:duration-1000 hover:ease-in-out text-lg sm:text-xl lg:text-2xl 2xl:text-3xl lg:mb-2 mt-4 sm:mt-5 md:mt-6 lg:mt-7">
            {post.articleTitle}
          </a>
        </Link>
      </h2>

      <time
        dateTime={post.articleDate}
        className="font-poppins underline text-xs lg:text-sm 2xl:text-base"
      >
        {post.articleDate}
      </time>

      <p className="font-roboto text-sm lg:text-base 2xl:text-lg mt-4 sm:mt-5 md:mt-6 lg:mt-7">
        {post.articleDescription}
      </p>

      <figure className="flex items-center justify-start mt-4 sm:mt-5 md:mt-6 lg:mt-7">
        <i className="block relative w-[26px] h-[26px] lg:w-[30px] lg:h-[30px] 2xl:w-[32px] 2xl:h-[32px]">
          <Image
            src={post.authorImage.url}
            alt={post.authorName}
            quality={100}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </i>

        <Link href={`mailto:${post.authorEmail}`} prefetch={false}>
          <a className="block font-roboto font-bold text-center hover:underline hover:duration-1000 hover:ease-in-out ml-2 text-xs lg:text-sm 2xl:text-base">
            {post.authorName}
          </a>
        </Link>
      </figure>
    </>
  );
};

export { CmsArticle };
