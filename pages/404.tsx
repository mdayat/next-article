import { ReactElement } from "react";

function Custom404() {
  return (
    <div className="w-screen h-screen bg-gray-200 flex">
      <h1 className="m-auto underline select-none font-bold text-2xl lg:text-3xl">
        404 - Page Not Found
      </h1>
    </div>
  );
}

export default Custom404;

Custom404.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
