import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

import {
  ArticleAuthor,
  ArticleDate,
  ArticleImage,
  ArticleText,
  ArticleTitle,
} from "../ArticleComponents";

const DummyArticleList = [
  {
    id: 1,
    srcImage: "/assets/images/cat2.jpeg",
    title: "Cara Kasih Makan Kucing",
    date: "29 Jan, 2022",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Author 1",
    authorProfile: <FaUserCircle />,
    authorEmail: "muhnurdayat@gmail.com",
  },
  {
    id: 2,
    srcImage: "/assets/images/cat3.jpeg",
    title: "Cara Menjadi Kucing",
    date: "29 Jan, 2022",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Author 2",
    authorProfile: <FaUserCircle />,
    authorEmail: "muhnurdayat@gmail.com",
  },
  {
    id: 3,
    srcImage: "/assets/images/cat4.jpeg",
    title: "Cara Berjalan Seperti Kucing",
    date: "29 Jan, 2022",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Author 3",
    authorProfile: <FaUserCircle />,
    authorEmail: "muhnurdayat@gmail.com",
  },
  {
    id: 4,
    srcImage: "/assets/images/cat5.jpeg",
    title: "Kenapa Kucing?",
    date: "29 Jan, 2022",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Author 4",
    authorProfile: <FaUserCircle />,
    authorEmail: "muhnurdayat@gmail.com",
  },
];

const ArticleList = () => {
  return (
    <section className="w-[calc(90vw)] mx-auto flex flex-wrap justify-between items-center pt-20 sm:pt-40">
      {DummyArticleList.map((article) => {
        return (
          <div key={article.id} className="sm:h-96 md:h-fit mb-20 md:mb-28">
            <ArticleImage
              href="#"
              src={article.srcImage}
              alt={`Cat ${article.id}`}
              height="55%"
              figClassName="w-[calc(90vw)] sm:w-[calc(42.5vw)] mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-8 2xl:mb-10 drop-shadow-xl hover:drop-shadow-2xl duration-300 ease-in-out"
              imgClassName="rounded-lg"
            />
            <div className="w-[calc(90vw)] sm:w-[calc(42.5vw)] mx-auto md:flex justify-between">
              <div className="basis-6/12 mb-6 md:mb-0">
                <ArticleTitle
                  href="#"
                  className="font-roboto text-2xl sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl mb-1 sm:mb-2 xl:mb-3 2xl:mb-4 hover:underline duration-300 ease-in-out cursor-pointer grid place-self-center"
                >
                  {article.title}
                </ArticleTitle>

                <ArticleDate
                  dateTime={article.date}
                  className="font-roboto text-sm underline sm:text-xs md:text-sm xl:text-base 2xl:text-lg"
                >
                  {article.date}
                </ArticleDate>
              </div>

              <div className="basis-6/12 flex flex-col justify-evenly items-center">
                <ArticleText className="font-roboto text-base mb-4 2xl:mb-8 sm:text-sm lg:text-base xl:text-lg 3xl:text-xl">
                  {article.text}
                </ArticleText>

                <div className="w-full flex flex-row-reverse justify-end">
                  <ArticleAuthor className="text-center not-italic font-bold text-blue-600 hover:underline duration-300 ease-in-out self-center text-base sm:text-sm xl:text-base 2xl:text-lg 3xl:text-xl">
                    <Link href={article.authorEmail}>
                      <a>{article.author}</a>
                    </Link>
                  </ArticleAuthor>

                  <div className="self-center mr-4 text-3xl sm:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl">
                    {article.authorProfile}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export { ArticleList };
