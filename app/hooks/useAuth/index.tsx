import { useRouter } from "next/router";
import axios from "axios";
import jwt, { GetPublicKeyOrSecret, Secret } from "jsonwebtoken";

interface LoginDataProps {
  username: string;
  password: string;
}

const useAuth = () => {
  const { push, reload } = useRouter();

  const login = async (loginData: LoginDataProps) => {
    try {
      const { data } = await axios.post("/api/auth/login", { loginData });

      const decoded = jwt.verify(
        data.token,
        process.env.JWT_SECRET as Secret | GetPublicKeyOrSecret
      );

      reload();
    } catch {
      push("/auth/login");
    }
  };

  const logout = async () => {};

  return { login, logout };
};

export { useAuth };
