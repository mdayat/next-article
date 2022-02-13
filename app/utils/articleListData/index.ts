import StaticGenerationImage from "@images/static-generation.jpeg";
import ServerSideRenderingImage from "@images/server-side-rendering.jpeg";
import DataFetchingImage from "@images/data-fetching.jpeg";
import ApiRoutesImage from "@images/api-routes.jpeg";
import CircleUserSolidIcon from "@icons/circle-user-solid.svg";

const articleListData = [
  {
    image: StaticGenerationImage,
    title: "Static Generation Next JS",
    date: "2022-02-13",
    description:
      "One method of pre-rendering is static generation. Here, we will learn about what static generation is, how we can use it, and its advantages and disadvantages.",
    source:
      "https://nextjs.org/docs/basic-features/pages#static-generation-recommended",
    authorName: "Mawar",
    authorProfile: CircleUserSolidIcon,
    authorEmail: "mailto:muhnurdayat@gmail.com",
  },
  {
    image: ServerSideRenderingImage,
    title: "Server Side Rendering Next JS",
    date: "2022-02-14",
    description:
      "The pre-rendering method other than static generation is server side rendering. Here, we will study them and discuss about their advantages and disadvantages.",
    source:
      "https://nextjs.org/docs/basic-features/pages#server-side-rendering",
    authorName: "Melati",
    authorProfile: CircleUserSolidIcon,
    authorEmail: "mailto:muhnurdayat@gmail.com",
  },
  {
    image: DataFetchingImage,
    title: "Data Fetching Next JS",
    date: "2022-02-15",
    description:
      "In this article, we will learn how to retrieve data both client and server. And we will look at the advantages and disadvantages of both.",
    source: "https://nextjs.org/docs/basic-features/data-fetching/overview",
    authorName: "Himawari",
    authorProfile: CircleUserSolidIcon,
    authorEmail: "mailto:muhnurdayat@gmail.com",
  },
  {
    image: ApiRoutesImage,
    title: "Api Routes Next JS",
    date: "2022-02-16",
    description:
      "Api routes is the most important feature, because it is this feature that makes Next JS so powerful. And this time we will learn about this feature.",
    source: "https://nextjs.org/docs/api-routes/introduction",
    authorName: "Jasmine",
    authorProfile: CircleUserSolidIcon,
    authorEmail: "mailto:muhnurdayat@gmail.com",
  },
];

export { articleListData };
