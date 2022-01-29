import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

import { ArticleAuthor } from "../ArticleComponents";
import { ArticleDate } from "../ArticleComponents";
import { ArticleImage } from "../ArticleComponents";
import { ArticleText } from "../ArticleComponents";
import { ArticleTitle } from "../ArticleComponents";

const HeroArticle = () => {
  return (
    <section className="w-fit mx-auto flex flex-col items-center">
      <ArticleImage
        href="#"
        src="/assets/images/cat1.jpeg"
        alt="Cat"
        height="50%"
        figClassName="w-[calc(100vw-10vw)] sm:w-[calc(100vw-20vw)] mb-4 sm:mb-5 md:mb-6 lg:mb-8 2xl:mb-10 drop-shadow-xl hover:drop-shadow-2xl duration-300 ease-in-out"
        imgClassName="rounded-lg"
      />

      <div className="w-[calc(100vw-10vw)] sm:w-[calc(100vw-20vw)] mx-auto md:flex justify-between">
        <div className="basis-6/12 mb-6 md:mb-0">
          <ArticleTitle
            href="#"
            className="font-roboto font-extrabold text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-4xl mb-1 sm:mb-2 xl:mb-3 2xl:mb-4 hover:underline duration-300 ease-in-out cursor-pointer grid place-self-center"
          >
            Cara Memandikan Kucing
          </ArticleTitle>

          <ArticleDate
            dateTime="2022-01-24 11:00"
            className="font-roboto text-xs underline sm:text-sm md:text-base xl:text-lg"
          >
            Jan 24, 2022
          </ArticleDate>
        </div>

        <div className="basis-6/12 flex flex-col justify-evenly items-center">
          <ArticleText className="font-roboto text-sm mb-4 2xl:mb-8 sm:text-base xl:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            nostrum esse laboriosam voluptate velit corporis quasi debitis illo
            a sint. Tempore magni laborum rem. Aliquam suscipit nulla doloremque
            pariatur nostrum.
          </ArticleText>

          <div className="w-full flex flex-row-reverse justify-end">
            <ArticleAuthor className="text-center not-italic text-blue-600 hover:underline duration-300 ease-in-out self-center text-sm sm:text-base xl:text-lg">
              <Link href="mailto:muhnurdayat@gmail.com">
                <a>Muhammad Nur Hidayat</a>
              </Link>
            </ArticleAuthor>

            <FaUserCircle className="self-center mr-4 text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroArticle };
