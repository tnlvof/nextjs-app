import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/common/NavBar";
import { useRouter } from "next/router";
import { AuthProvider } from "../context/auth";
import Axios from "axios";

export default function App({ Component, pageProps }: AppProps) {
  Axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
  Axios.defaults.withCredentials = true;

  const { pathname } = useRouter();
  const authRoutes = ["/register", "/login"];
  const authRoute = authRoutes.includes(pathname);

  return (
    <>
      <AuthProvider>
        {!authRoute && <NavBar />}
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}
