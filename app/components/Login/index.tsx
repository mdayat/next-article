import { useState } from "react";
import Image from "next/image";

import { ForgotPassword } from "./ForgotPassword";
import { DataForm } from "./DataForm";

import IsoflatIcon from "@icons/isoflat.svg";

const LoginForm = () => {
  const [forgotPassword, setForgotPassword] = useState(false);

  return (
    <div className="grid lg:grid-cols-2 m-auto lg:pb-36 lg:w-[90vw] xl:w-[75vw] 2xl:w-[60vw] 3xl:w-[55vw]">
      <figure className="hidden lg:block">
        <Image src={IsoflatIcon} alt="IsoFlatIcon" />
      </figure>

      {forgotPassword ? (
        <ForgotPassword setForgotPassword={setForgotPassword} />
      ) : (
        <DataForm setForgotPassword={setForgotPassword} />
      )}
    </div>
  );
};

export { LoginForm };
