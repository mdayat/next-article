import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import { LoginDataTypes } from "app/types";

const useAuth = () => {
  const { push } = useRouter();

  const [loginStatus, setLoginStatus] = useState<"SUCCEED" | "FAILED">();

  const login = async (loginData: LoginDataTypes) => {
    try {
      const { data } = await axios.post("/api/auth/login", loginData);

      if (data.status) {
        push("/");

        setLoginStatus("SUCCEED");

        return loginStatus;
      }
    } catch (error: any) {
      push("/auth/login");

      setLoginStatus("FAILED");

      return loginStatus;
    }
  };

  const logout = async () => {};

  return { login, logout, loginStatus };
};

export { useAuth };
