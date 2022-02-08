import { useRouter } from "next/router";
import axios from "axios";

interface LoginDataProps {
  username: string;
  password: string;
  rememberMe: boolean;
}

const useAuth = () => {
  const { push } = useRouter();

  const login = async (loginData: LoginDataProps) => {
    try {
      const { data } = await axios.post("/api/auth/login", loginData);

      if (data) {
        push("/");
      }
    } catch {
      push("/auth/login");
    }
  };

  const logout = async () => {};

  return { login, logout };
};

export { useAuth };
