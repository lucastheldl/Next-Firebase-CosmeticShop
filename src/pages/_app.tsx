import Header from "@/components/Header";
import { AuthContext, AuthContextProvider } from "@/context/AuthContext";
import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Header />
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
