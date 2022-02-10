import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

import {
  ArticleAuthor,
  ArticleDate,
  ArticleImage,
  ArticleText,
  ArticleTitle,
} from "../ArticleComponents";

const HeroArticle = () => {
  return (
    <section className="w-fit mx-auto flex flex-col items-center">
      <ArticleImage
        href="#"
        src="/assets/images/cat1.jpeg"
        alt="Cat"
        height="55%"
        figClassName="w-[calc(90vw)] sm:w-[calc(90vw)] mb-4 sm:mb-5 md:mb-6 lg:mb-8 2xl:mb-10 drop-shadow-xl hover:drop-shadow-2xl duration-300 ease-in-out"
        imgClassName="rounded-lg"
      />

      <div className="w-[calc(90vw)] sm:w-[calc(90vw)] mx-auto md:flex justify-between">
        <div className="basis-6/12 mb-6 md:mb-0">
          <ArticleTitle
            href="#"
            className="font-roboto font-extrabold text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl mb-1 sm:mb-2 xl:mb-3 2xl:mb-4 hover:underline duration-300 ease-in-out cursor-pointer grid place-self-center"
          >
            Cara Memandikan Kucing
          </ArticleTitle>

          <ArticleDate
            dateTime="2022-01-24 11:00"
            className="font-roboto text-sm underline sm:text-base lg:text-lg 2xl:text-xl 3xl:text-2xl"
          >
            Jan 24, 2022
          </ArticleDate>
        </div>

        <div className="basis-6/12 flex flex-col justify-evenly items-center">
          <ArticleText className="font-roboto text-base mb-4 2xl:mb-8 lg:text-lg 2xl:text-xl 3xl:text-2xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            nostrum esse laboriosam voluptate velit corporis quasi debitis illo
            a sint. Tempore magni laborum rem. Aliquam suscipit nulla doloremque
            pariatur nostrum.
          </ArticleText>

          <div className="w-full flex flex-row-reverse justify-end">
            <ArticleAuthor className="text-center not-italic font-bold text-blue-600 hover:underline duration-300 ease-in-out self-center text-base lg:text-lg 2xl:text-xl 3xl:text-2xl">
              <Link href="mailto:muhnurdayat@gmail.com">
                <a>Muhammad Nur Hidayat</a>
              </Link>
            </ArticleAuthor>

            <div className="self-center mr-4 text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-5xl">
              <FaUserCircle />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroArticle };
