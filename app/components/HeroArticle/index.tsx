import Image from "next/image";
import Link from "next/link";

import PreRenderingImage from "@images/pre-rendering.jpeg";
import CircleUserSolidIcon from "@icons/circle-user-solid.svg";

const HeroArticle = () => {
  return (
    <section className="bg-gray-200 w-full md:w-[95vw] xl:w-[90vw] mx-auto p-2 sm:p-2.5 md:p-4 lg:p-6 xl:p-8 2xl:p-10 md:rounded-lg 2xl:rounded-xl mb-10 md:mb-20">
      <figure>
        <Link href="https://nextjs.org/docs/basic-features/pages#pre-rendering">
          <a className="block relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[500px]">
            <Image
              src={PreRenderingImage}
              alt="Pre Rendering Next JS"
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
              placeholder="blur"
              className="rounded-lg 2xl:rounded-xl"
            />
          </a>
        </Link>
      </figure>

      <div className="md:flex">
        <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-7 md:basis-2/5">
          <Link href="https://nextjs.org/docs/basic-features/pages#pre-rendering">
            <a>
              <h1 className="font-poppins font-bold hover:underline hover:duration-1000 hover:ease-in-out text-lg sm:text-xl lg:text-2xl 2xl:text-3xl lg:mb-2">
                Pre Rendering Next JS
              </h1>
            </a>
          </Link>

          <time
            dateTime="2022-02-12"
            className="font-poppins underline text-xs lg:text-sm 2xl:text-base"
          >
            2022-02-12
          </time>
        </div>

        <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-7 md:basis-3/5">
          <p className="font-roboto text-sm lg:text-base 2xl:text-lg">
            We will learn about the benefits of pre-rendering in Next JS, the
            different ways to use pre-rendering, and the advantages and
            disanvantages of them.
          </p>

          <figure className="flex items-center justify-start mt-4 sm:mt-5 md:mt-6 lg:mt-7">
            <div className="relative w-[26px] h-[26px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px]">
              <Image
                src={CircleUserSolidIcon}
                alt="Muhammad Nur Hidayat"
                layout="fill"
              />
            </div>

            <Link href="mailto:muhnurdayat@gmail.com" prefetch={false}>
              <a className="block font-roboto font-bold text-center hover:underline hover:duration-1000 hover:ease-in-out ml-2 text-xs lg:text-sm 2xl:text-base">
                Muhammad Nur Hidayat
              </a>
            </Link>
          </figure>
        </div>
      </div>
    </section>
  );
};

export { HeroArticle };
